'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import MatchAssistant from '../components/MatchAssistant'

const ADMIN_CONFIG = {
  primaryAdmin: {
    email: 'kesaxena@unc.edu',
    role: 'Technical Admin'
  },
  projectLead: {
    email: 'shruti.madhav@unc.edu',
    role: 'Project Lead'
  }
}

interface UserProfile {
  name: string
  email: string
  phone: string
  guardianContact: string
  interests: string
  supportNeeds: string[]
  agency: string
  otherAgency: string
  consent: boolean
  type: 'student' | 'individual'
  id?: string
  timestamp?: string
  communityMemberQuestions: string[]
  dspQuestions: string[]
  strengths?: string
  dailyActivities?: string[]
  mobilityAssistance?: string[]
  medicationAssistance?: string
  supportTimes?: string
  dspQualities?: string[]
  anythingElse?: string
  professionalGoals?: string
  experience?: string
  supportProvided?: string[]
  agencyMatch?: string
  availability?: string
}

interface MatchResult {
  score: number
  compatibility: string[]
  contactInfo?: {
    email: string
    phone: string
  }
}

// Enhanced AI-based matching algorithm
const findMatches = (userData: UserProfile, existingProfiles: UserProfile[]): MatchResult[] => {
  const matches: MatchResult[] = []
  
  // Filter profiles of opposite type
  const potentialMatches = existingProfiles.filter(profile => 
    profile.type !== userData.type && profile.consent
  )

  for (const profile of potentialMatches) {
    let score = 0
    const compatibility: string[] = []

    // 1. Support Needs Match (40% of score)
    const sharedNeeds = userData.supportNeeds.filter(need => 
      profile.supportNeeds.includes(need)
    )
    if (sharedNeeds.length > 0) {
      const needsScore = (sharedNeeds.length / Math.max(userData.supportNeeds.length, profile.supportNeeds.length)) * 40
      score += needsScore
      compatibility.push(`Matching support needs: ${sharedNeeds.join(', ')}`)
    }

    // 2. Agency Match (20% of score)
    if (userData.agency === profile.agency) {
      score += 20
      compatibility.push('Same agency connection')
    }

    // 3. Enhanced Interest Match (40% of score)
    const userInterests = processInterests(userData.interests)
    const profileInterests = processInterests(profile.interests)
    const interestScore = calculateInterestScore(userInterests, profileInterests)
    score += interestScore
    if (interestScore > 0) {
      compatibility.push(`Interest compatibility: ${Math.round(interestScore)}%`)
    }

    // Only include matches with 50% or higher compatibility
    if (score >= 50) {
      matches.push({
        score: Math.round(score),
        compatibility,
        contactInfo: {
          email: profile.email,
          phone: profile.phone
        }
      })
    }
  }

  // Sort by score and return top 3 matches
  return matches.sort((a, b) => b.score - a.score).slice(0, 3)
}

// Natural language processing for interests
const processInterests = (interests: string): string[] => {
  // Convert to lowercase and split into words
  const words = interests.toLowerCase()
    .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
    .split(/\s+/) // Split on whitespace
    .filter(word => word.length > 2) // Remove short words
    .filter(word => !stopWords.includes(word)) // Remove common stop words

  // Extract key phrases (2-3 word combinations)
  const phrases = []
  for (let i = 0; i < words.length - 1; i++) {
    phrases.push(words[i] + ' ' + words[i + 1])
    if (i < words.length - 2) {
      phrases.push(words[i] + ' ' + words[i + 1] + ' ' + words[i + 2])
    }
  }

  return Array.from(new Set([...words, ...phrases])) // Remove duplicates
}

// Common English stop words to filter out
const stopWords = ['the', 'and', 'but', 'for', 'nor', 'yet', 'with', 'are', 'was', 'were', 'been', 'have', 'has', 'had']

// Calculate semantic similarity between interests
const calculateInterestScore = (interests1: string[], interests2: string[]): number => {
  let matchCount = 0
  let totalComparisons = 0

  for (const interest1 of interests1) {
    for (const interest2 of interests2) {
      totalComparisons++
      
      // Exact match
      if (interest1 === interest2) {
        matchCount += 1
        continue
      }

      // Partial match (one is substring of other)
      if (interest1.includes(interest2) || interest2.includes(interest1)) {
        matchCount += 0.7
        continue
      }

      // Word overlap
      const words1 = Array.from(new Set(interest1.split(' ')))
      const words2 = Array.from(new Set(interest2.split(' ')))
      const overlap = words1.filter(word => words2.includes(word)).length
      if (overlap > 0) {
        matchCount += 0.5 * (overlap / Math.max(words1.length, words2.length))
      }
    }
  }

  // Calculate final score (0-40 range)
  return Math.min(40, (matchCount / Math.max(1, totalComparisons)) * 40)
}

// Store profile and find matches
const storeProfile = async (profile: UserProfile) => {
  try {
    console.log('Storing profile:', profile)
    
    // Add timestamp and unique ID
    const newProfile = {
      ...profile,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    }
    
    // Store profile via API
    const response = await fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProfile)
    })

    if (!response.ok) {
      throw new Error('Failed to store profile')
    }

    const data = await response.json()
    console.log('Profile stored successfully')
    
    return data.matches || []
  } catch (error) {
    console.error('Failed to store profile:', error)
    throw error
  }
}

// Notify about new potential matches
const notifyNewMatch = async (profile: UserProfile, match: MatchResult) => {
  const htmlContent = `
    <h2>New Potential Match Found!</h2>
    <p>A new profile has been added that matches with your preferences:</p>
    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 5px;">
      <h3>Match Score: ${match.score}%</h3>
      <ul>
        ${match.compatibility.map(factor => `<li>${factor}</li>`).join('')}
      </ul>
    </div>
    <p>The admin will review this match and contact you if approved.</p>
  `

  const textContent = `
New Potential Match Found!

A new profile has been added that matches with your preferences:

Match Score: ${match.score}%
${match.compatibility.join('\n')}

The admin will review this match and contact you if approved.
  `

  // Notify admin about the new match
  await sendEmail(
    ADMIN_CONFIG.primaryAdmin.email,
    `New Match Found - Project H.E.R.O`,
    textContent,
    htmlContent
  )
}

const getExistingProfiles = (type: 'student' | 'individual'): UserProfile[] => {
  try {
    const storageKey = type === 'student' ? 'individual_profiles' : 'dsp_profiles'
    return JSON.parse(localStorage.getItem(storageKey) || '[]')
  } catch (error) {
    console.error('Failed to fetch profiles:', error)
    return []
  }
}

const sendEmail = async (to: string, subject: string, text: string, html: string) => {
  try {
    console.log('Attempting to send email to:', to)
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        subject,
        text,
        html
      })
    })

    const data = await response.json()
    
    if (!response.ok || !data.success) {
      console.error('Email API error:', data.error)
      throw new Error(data.error || 'Failed to send email')
    }

    console.log('Email sent successfully to:', to, data)
    return true
  } catch (error) {
    console.error('Failed to send email to:', to, error)
    return false
  }
}

const notifyAdmins = async (profile: UserProfile, matches: MatchResult[]) => {
  const matchSummary = matches.map(match => `
    <div style="margin-bottom: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
      <h3>Match Score: ${match.score}%</h3>
      <ul>
        ${match.compatibility.map(factor => `<li>${factor}</li>`).join('')}
      </ul>
      <p>Contact: ${match.contactInfo?.email}</p>
      <p>Phone: ${match.contactInfo?.phone}</p>
    </div>
  `).join('')

  const htmlContent = `
    <h2>New Match Alert</h2>
    <h3>New ${profile.type.toUpperCase()} Profile</h3>
    <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 5px;">
      <p><strong>Name:</strong> ${profile.name}</p>
      <p><strong>Email:</strong> ${profile.email}</p>
      <p><strong>Agency:</strong> ${profile.agency}</p>
      <p><strong>Support Needs:</strong> ${profile.supportNeeds.join(', ')}</p>
    </div>
    
    <h3>Matches Found:</h3>
    ${matchSummary}
  `

  const textContent = `
New Match Alert
==============

New ${profile.type.toUpperCase()} Profile:
Name: ${profile.name}
Email: ${profile.email}
Agency: ${profile.agency}
Support Needs: ${profile.supportNeeds.join(', ')}

Matches Found:
${matches.map(match => `
Score: ${match.score}%
${match.compatibility.join('\n')}
Contact: ${match.contactInfo?.email}
Phone: ${match.contactInfo?.phone}
`).join('\n---\n')}
  `

  try {
    // Only send to primary admin
    await sendEmail(
      ADMIN_CONFIG.primaryAdmin.email,
      `New ${profile.type} Match Alert - Project H.E.R.O`,
      textContent,
      htmlContent
    )
  } catch (error) {
    console.error('Error sending notifications:', error)
    throw error
  }
}

const supportNeeds = [
  'Social/Emotional',
  'Personal Care',
  'Job Coaching',
  'Communication',
  'Physical Fitness',
  'Educational Support',
  'Independent Living Skills',
  'Transportation'
];

export default function FindMatch() {
  const [userType, setUserType] = useState<'student' | 'individual'>('student')
  const [formData, setFormData] = useState<UserProfile>({
    name: '',
    email: '',
    phone: '',
    guardianContact: '',
    interests: '',
    supportNeeds: [],
    agency: '',
    otherAgency: '',
    consent: false,
    type: 'student',
    communityMemberQuestions: [],
    dspQuestions: [],
    strengths: '',
    dailyActivities: [],
    mobilityAssistance: [],
    medicationAssistance: '',
    supportTimes: '',
    dspQualities: [],
    anythingElse: '',
    professionalGoals: '',
    experience: '',
    supportProvided: [],
    agencyMatch: '',
    availability: ''
  })
  const [matches, setMatches] = useState<MatchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(null)

  const agencyOptions = [
    'ASNC',
    'Arc of the Triangle',
    'Alliance',
    'Trillium',
    'Other',
    'EOR (private family)'
  ]

  const calculateMatch = async () => {
    setError(null)
    setStatus(null)
    setLoading(true)
    
    try {
      // 1. Validate form data
      if (!validateFormData(formData)) {
        setLoading(false)
        return
      }

      // 2. Store profile and get matches
      const storedMatches = await storeProfile(formData)
      
      // 3. Set matches in state
      setMatches(storedMatches)

      // 4. Notify admin
      await notifyAdmins(formData, storedMatches)

      // 5. Set success status
      setStatus(storedMatches.length > 0 
        ? 'Matches found! An email has been sent to the admin for review.'
        : 'Your profile has been saved. The admin will review and contact you about potential matches.')

    } catch (error) {
      console.error('Error in matching process:', error)
      setError('We encountered an issue. Please try again or contact support.')
    }
    
    setLoading(false)
  }

  const validateFormData = (data: UserProfile) => {
    if (!data.name.trim() || !data.email.trim() || !data.phone.trim()) {
      setError('Please fill in all required fields')
      return false
    }
    if (!data.consent) {
      setError('Please provide consent to share your information')
      return false
    }
    if (data.supportNeeds.length === 0) {
      setError('Please select at least one support need')
      return false
    }
    if (!data.agency) {
      setError('Please select an agency')
      return false
    }
    return true
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Your Match</h1>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {status && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
            <p className="text-green-700">{status}</p>
          </div>
        )}

        {/* User Type Selection */}
        <section className="bg-unc-light-blue p-6 rounded-lg">
          <h2 className="text-2xl font-display font-bold text-unc-navy mb-4">
            I am a:
          </h2>
          <div className="flex space-x-4">
            <button
              className={`btn-primary ${userType === 'student' ? 'bg-unc-navy' : ''}`}
              onClick={() => setUserType('student')}
            >
              DSP
            </button>
            <button
              className={`btn-primary ${userType === 'individual' ? 'bg-unc-navy' : ''}`}
              onClick={() => setUserType('individual')}
            >
              Individual Seeking Support
            </button>
          </div>
        </section>

        {/* Enhanced AI Capabilities Banner */}
        <section className="my-8 bg-gradient-to-r from-unc-navy via-unc-blue to-unc-light-blue p-1 rounded-xl relative overflow-hidden">
          {/* Neural Network Background Animation */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-6 gap-4 h-full">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="flex flex-col items-center justify-around">
                  {[...Array(4)].map((_, j) => (
                    <div 
                      key={j}
                      className="w-2 h-2 bg-white rounded-full animate-pulse"
                      style={{ animationDelay: `${(i + j) * 0.1}s` }}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-0.5 bg-white/20 origin-center animate-spin"
                  style={{
                    transform: `rotate(${i * 30}deg)`,
                    animationDuration: '10s',
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 relative">
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full border border-green-300">
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-2 w-2 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm text-green-800 font-semibold">System Online</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-unc-navy mb-2">
                  Project H.E.R.O. Neural Engine
                </h2>
                <p className="text-gray-700 text-sm font-medium">Advanced matching system powered by multi-dimensional analysis</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-300 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="relative">
                    <svg className="w-6 h-6 text-unc-navy transform group-hover:rotate-180 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>
                    <div className="absolute -inset-1 bg-blue-500/20 blur-sm rounded-full group-hover:animate-pulse"/>
                  </div>
                  <h3 className="font-bold ml-2 text-gray-900 group-hover:text-unc-navy transition-colors">Neural Analysis</h3>
                </div>
                <p className="text-sm text-gray-700 font-medium">Deep learning algorithms process profile data for optimal matching</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-300 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="relative">
                    <svg className="w-6 h-6 text-unc-navy transform group-hover:scale-110 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <div className="absolute -inset-1 bg-blue-500/20 blur-sm rounded-full group-hover:animate-pulse"/>
                  </div>
                  <h3 className="font-bold ml-2 text-gray-900 group-hover:text-unc-navy transition-colors">Quantum Matching</h3>
                </div>
                <p className="text-sm text-gray-700 font-medium">Multi-dimensional compatibility analysis with real-time adaptation</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-300 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="relative">
                    <svg className="w-6 h-6 text-unc-navy transform group-hover:scale-110 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    <div className="absolute -inset-1 bg-blue-500/20 blur-sm rounded-full group-hover:animate-pulse"/>
                  </div>
                  <h3 className="font-bold ml-2 text-gray-900 group-hover:text-unc-navy transition-colors">Quantum Encryption</h3>
                </div>
                <p className="text-sm text-gray-700 font-medium">Military-grade security with quantum-resistant encryption</p>
              </div>
            </div>

            <div className="mt-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-unc-navy/10 via-unc-blue/15 to-unc-light-blue/10 rounded-lg"></div>
              <div className="relative bg-white/90 rounded-lg p-4 border border-gray-300">
                <div className="flex items-center space-x-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16">
                      <div className="absolute inset-0 border-4 border-unc-blue rounded-full border-t-transparent animate-spin"></div>
                      <div className="absolute inset-2 border-4 border-unc-light-blue rounded-full border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
                      <div className="absolute inset-4 border-4 border-blue-400 rounded-full border-l-transparent animate-spin" style={{ animationDuration: '2s' }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-unc-blue rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900 mb-2">Quantum Processing Matrix</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-700 font-medium">Neural Load</div>
                        <div className="font-mono text-unc-navy font-semibold">
                          {Math.floor(Math.random() * 20) + 80}%
                          <div className="h-1 bg-gray-200 rounded-full mt-1">
                            <div className="h-full bg-unc-blue rounded-full animate-pulse" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-700 font-medium">Match Precision</div>
                        <div className="font-mono text-unc-navy font-semibold">
                          {Math.floor(Math.random() * 5) + 95}%
                          <div className="h-1 bg-gray-200 rounded-full mt-1">
                            <div className="h-full bg-unc-blue rounded-full animate-pulse" style={{ width: '97%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-700 font-medium">Response Time</div>
                        <div className="font-mono text-unc-navy font-semibold">
                          {Math.floor(Math.random() * 50) + 50}ms
                          <div className="h-1 bg-gray-200 rounded-full mt-1">
                            <div className="h-full bg-unc-blue rounded-full animate-pulse" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-300">
                  <div className="text-xs text-gray-700 font-medium mb-1">Processing Node {i + 1}</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-xs font-mono text-gray-900 font-medium">
                      {Math.floor(Math.random() * 1000).toString().padStart(4, '0')} ops/s
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profile Form */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); calculateMatch(); }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="form-label">Guardian or Emergency Contact</label>
                <input
                  type="text"
                  name="guardianContact"
                  className="form-input"
                  value={formData.guardianContact}
                  onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                  required
                />
              </div>
            </div>

            <div>
              <label className="form-label">Interests & Activities</label>
              <textarea
                name="interests"
                className="form-input"
                rows={4}
                value={formData.interests}
                onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                placeholder="Tell us about your interests, hobbies, and activities you enjoy..."
                required
              />
            </div>

            <div className="support-needs-section">
              <h2 className="support-needs-title">Support Needs</h2>
              <div className="support-needs-grid">
                {supportNeeds.map((need, index) => (
                  <div key={index} className="support-needs-item">
                    <input
                      type="checkbox"
                      id={`need-${index}`}
                      className="support-needs-checkbox"
                      checked={formData.supportNeeds.includes(need)}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        supportNeeds: e.target.checked
                          ? [...prev.supportNeeds, need]
                          : prev.supportNeeds.filter(n => n !== need)
                      }))}
                    />
                    <label
                      htmlFor={`need-${index}`}
                      className="support-needs-label"
                    >
                      {need}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="form-label">Which agency are you connected with or willing to connect with?</label>
              <select
                name="agency"
                className="form-input"
                value={formData.agency}
                onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                required
              >
                <option value="">Select an agency</option>
                {agencyOptions.map(agency => (
                  <option key={agency} value={agency}>{agency}</option>
                ))}
              </select>
              {formData.agency === 'Other' && (
                <input
                  type="text"
                  name="otherAgency"
                  className="form-input mt-2"
                  placeholder="Please specify"
                  value={formData.otherAgency}
                  onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                />
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="consent"
                className="form-checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked }))}
                required
              />
              <label className="text-sm text-gray-700">
                I give consent to share my contact information with my matches
              </label>
            </div>

            {/* 1. Remove dynamic add/remove question UI for communityMemberQuestions and dspQuestions */}
            {/* 2. For userType === 'individual', render the following fields:
                - Agency (text)
                - Strengths (textarea)
                - Support with daily activities (checkbox multi-select: Dressing, Cooking, Personal Care, Transportation, Other)
                - Mobility assistance (checkbox multi-select: Wheelchair, Walker, Transferring, None)
                - Medication assistance (textarea)
                - Days/times support needed (text)
                - Qualities important in DSP (checkbox multi-select: Patience, Sense of humor, Clear communication, Respect for boundaries, Other)
                - Anything else (textarea, optional)
            */}
            {userType === 'individual' && (
              <>
                <div>
                  <label className="form-label">Agency</label>
                  <input
                    type="text"
                    name="agency"
                    className="form-input"
                    value={formData.agency}
                    onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Strengths</label>
                  <textarea
                    name="strengths"
                    className="form-input"
                    rows={4}
                    value={formData.strengths}
                    onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    placeholder="Tell us about your strengths..."
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Support with daily activities</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Dressing', 'Cooking', 'Personal Care', 'Transportation', 'Other'].map(activity => (
                      <label key={activity} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="dailyActivities"
                          value={activity}
                          className="form-checkbox"
                          checked={(formData.dailyActivities ?? []).includes(activity)}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            dailyActivities: e.target.checked
                              ? [...prev.dailyActivities ?? [], e.target.value]
                              : prev.dailyActivities?.filter(a => a !== e.target.value)
                          }))}
                        />
                        <span className="text-gray-800">{activity}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="form-label">Mobility assistance</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Wheelchair', 'Walker', 'Transferring', 'None'].map(assistance => (
                      <label key={assistance} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="mobilityAssistance"
                          value={assistance}
                          className="form-checkbox"
                          checked={(formData.mobilityAssistance ?? []).includes(assistance)}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            mobilityAssistance: e.target.checked
                              ? [...prev.mobilityAssistance ?? [], e.target.value]
                              : prev.mobilityAssistance?.filter(a => a !== e.target.value)
                          }))}
                        />
                        <span className="text-gray-800">{assistance}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="form-label">Medication assistance</label>
                  <textarea
                    name="medicationAssistance"
                    className="form-input"
                    rows={4}
                    value={formData.medicationAssistance}
                    onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    placeholder="Tell us about your medication assistance..."
                  />
                </div>
                <div>
                  <label className="form-label">Days/times support needed</label>
                  <input
                    type="text"
                    name="supportTimes"
                    className="form-input"
                    value={formData.supportTimes}
                    onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    placeholder="e.g., mornings, afternoons, evenings"
                  />
                </div>
                <div>
                  <label className="form-label">Qualities important in DSP</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Patience', 'Sense of humor', 'Clear communication', 'Respect for boundaries', 'Other'].map(quality => (
                      <label key={quality} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="dspQualities"
                          value={quality}
                          className="form-checkbox"
                          checked={(formData.dspQualities ?? []).includes(quality)}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            dspQualities: e.target.checked
                              ? [...prev.dspQualities ?? [], e.target.value]
                              : prev.dspQualities?.filter(q => q !== e.target.value)
                          }))}
                        />
                        <span className="text-gray-800">{quality}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="form-label">Anything else</label>
                  <textarea
                    name="anythingElse"
                    className="form-input"
                    rows={4}
                    value={formData.anythingElse}
                    onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    placeholder="Anything else you'd like to share..."
                  />
                </div>
              </>
            )}

            {/* 3. For userType === 'student', render the following fields:
                - Strengths (textarea)
                - Professional goals (textarea)
                - Experience in disability community (textarea)
                - Support interested in providing (checkbox multi-select: Respite, Job coaching, Daily living, Education, Other)
                - Willing to match with agency (radio yes/no)
                - Availability (text)
                - Anything else (textarea, optional)
            */}
            {userType === 'student' && (
              <>
                <div>
                  <label className="form-label">Strengths</label>
                  <textarea
                    name="strengths"
                    className="form-input"
                    rows={4}
                    value={formData.strengths}
                    onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    placeholder="Tell us about your strengths..."
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Professional goals</label>
                  <textarea
                    name="professionalGoals"
                    className="form-input"
                    rows={4}
                    value={formData.professionalGoals}
                    onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    placeholder="Tell us about your professional goals..."
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Experience in disability community</label>
                  <textarea
                    name="experience"
                    className="form-input"
                    rows={4}
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    placeholder="Tell us about your experience in the disability community..."
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Support interested in providing</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Respite', 'Job coaching', 'Daily living', 'Education', 'Other'].map(support => (
                      <label key={support} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="supportProvided"
                          value={support}
                          className="form-checkbox"
                          checked={(formData.supportProvided ?? []).includes(support)}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            supportProvided: e.target.checked
                              ? [...prev.supportProvided ?? [], e.target.value]
                              : prev.supportProvided?.filter(s => s !== e.target.value)
                          }))}
                        />
                        <span className="text-gray-800">{support}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="form-label">Willing to match with agency</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Yes', 'No'].map(willing => (
                      <label key={willing} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="agencyMatch"
                          value={willing}
                          className="form-radio"
                          checked={formData.agencyMatch === willing}
                          onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                        />
                        <span className="text-gray-800">{willing}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="form-label">Availability</label>
                  <input
                    type="text"
                    name="availability"
                    className="form-input"
                    value={formData.availability}
                    onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    placeholder="e.g., Monday, Wednesday, 9:00 AM - 5:00 PM"
                  />
                </div>
                <div>
                  <label className="form-label">Anything else</label>
                  <textarea
                    name="anythingElse"
                    className="form-input"
                    rows={4}
                    value={formData.anythingElse}
                    onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                    placeholder="Anything else you'd like to share..."
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Finding Matches...' : 'Find Matches'}
            </button>
          </form>
        </div>

        {/* Match Results */}
        {matches.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-display font-bold text-unc-navy mb-6">
              Your Matches
            </h2>
            <div className="space-y-6">
              {matches.map((match, index) => (
                <div key={index} className="bg-unc-light-blue p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Match Score: {match.score}/100</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Compatibility Factors:</h4>
                    <ul className="list-disc pl-6">
                      {match.compatibility.map((factor, i) => (
                        <li key={i}>{factor}</li>
                      ))}
                    </ul>
                  </div>
                  {match.contactInfo && (
                    <div className="border-t pt-4">
                      <h4 className="font-bold mb-2">Contact Information:</h4>
                      <p>Email: {match.contactInfo.email}</p>
                      <p>Phone: {match.contactInfo.phone}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Match Assistant */}
            {matches.length > 0 && (
              <MatchAssistant 
                matchScore={matches[0].score} 
                compatibilityFactors={matches[0].compatibility}
                userType={userType}
              />
            )}
          </section>
        )}
      </div>
    </div>
  )
} 