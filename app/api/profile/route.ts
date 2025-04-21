import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'

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
}

interface MatchResult {
  score: number
  compatibility: string[]
  profile: UserProfile
}

// Get the user's home directory for reliable local storage
const getLocalStoragePath = () => {
  const homeDir = os.homedir()
  return path.join(homeDir, 'project_hero_data')
}

// Ensure all necessary directories exist
const ensureDirectories = async () => {
  const directories = [
    path.join(process.cwd(), 'data'),
    getLocalStoragePath()
  ]
  
  for (const dir of directories) {
    try {
      await fs.access(dir)
    } catch {
      await fs.mkdir(dir, { recursive: true })
    }
  }
}

// Get profiles from both storage locations
const getStoredProfiles = async (type: 'student' | 'individual'): Promise<UserProfile[]> => {
  await ensureDirectories()
  
  const fileName = `${type}_profiles.json`
  const serverPath = path.join(process.cwd(), 'data', fileName)
  const localPath = path.join(getLocalStoragePath(), fileName)
  
  let profiles: UserProfile[] = []
  
  // Try reading from both locations and merge
  try {
    const [serverData, localData] = await Promise.all([
      fs.readFile(serverPath, 'utf8').catch(() => '[]'),
      fs.readFile(localPath, 'utf8').catch(() => '[]')
    ])
    
    const serverProfiles = JSON.parse(serverData)
    const localProfiles = JSON.parse(localData)
    
    // Merge profiles, preferring local copies if duplicates exist
    const merged = new Map()
    localProfiles.forEach((profile: UserProfile) => {
      merged.set(profile.id, profile)
    })
    serverProfiles.forEach((profile: UserProfile) => {
      if (!merged.has(profile.id)) {
        merged.set(profile.id, profile)
      }
    })
    
    profiles = Array.from(merged.values())
  } catch (error) {
    console.error('Error reading profiles:', error)
    profiles = []
  }
  
  return profiles
}

// Store profile in both locations
const storeProfile = async (profile: UserProfile): Promise<void> => {
  await ensureDirectories()
  
  const fileName = `${profile.type}_profiles.json`
  const serverPath = path.join(process.cwd(), 'data', fileName)
  const localPath = path.join(getLocalStoragePath(), fileName)
  
  // Add ID and timestamp if not present
  const profileToStore = {
    ...profile,
    id: profile.id || Date.now().toString(),
    timestamp: profile.timestamp || new Date().toISOString()
  }
  
  // Get existing profiles from both locations
  const existingProfiles = await getStoredProfiles(profile.type)
  
  // Add new profile
  existingProfiles.push(profileToStore)
  
  // Save to both locations
  const saveOperations = [serverPath, localPath].map(async (filePath) => {
    try {
      await fs.writeFile(filePath, JSON.stringify(existingProfiles, null, 2))
    } catch (error) {
      console.error(`Error saving to ${filePath}:`, error)
    }
  })
  
  await Promise.all(saveOperations)
}

// Calculate match score between profiles
const calculateMatchScore = (profile1: UserProfile, profile2: UserProfile): { score: number, factors: string[] } => {
  let score = 0;
  const factors: string[] = [];
  
  // Check if profiles are of opposite types
  if (profile1.type === profile2.type) {
    return { score: 0, factors: [] }; // No match if same type
  }
  
  // 1. Support Needs Match (40% of score)
  const sharedNeeds = profile1.supportNeeds.filter(need => 
    profile2.supportNeeds.includes(need)
  );
  if (sharedNeeds.length > 0) {
    const needsScore = (sharedNeeds.length / Math.max(profile1.supportNeeds.length, profile2.supportNeeds.length)) * 40;
    score += needsScore;
    factors.push(`Matching support needs: ${sharedNeeds.join(', ')}`);
  }
  
  // 2. Agency Match (20% of score)
  if (profile1.agency === profile2.agency) {
    score += 20;
    factors.push('Same agency connection');
  }
  
  // 3. Interest Match (40% of score)
  // Simple keyword matching for now
  const interests1 = profile1.interests.toLowerCase().split(/\s+/);
  const interests2 = profile2.interests.toLowerCase().split(/\s+/);
  const matchingInterests = interests1.filter(interest => 
    interests2.includes(interest)
  );
  
  if (matchingInterests.length > 0) {
    const interestScore = (matchingInterests.length / Math.max(interests1.length, interests2.length)) * 40;
    score += interestScore;
    factors.push(`Interest compatibility: ${Math.round(interestScore)}%`);
  }
  
  return { score: Math.round(score), factors };
}

export async function POST(request: Request) {
  try {
    const profile = await request.json()
    
    // Store the profile in both locations
    await storeProfile(profile)
    
    // Get opposite type profiles for matching
    const oppositeType = profile.type === 'student' ? 'individual' : 'student'
    const oppositeProfiles = await getStoredProfiles(oppositeType)
    
    // Calculate matches
    const matches = oppositeProfiles
      .map(otherProfile => {
        const { score, factors } = calculateMatchScore(profile, otherProfile)
        return { score, compatibility: factors, profile: otherProfile }
      })
      .filter(match => match.score >= 50)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
    
    return NextResponse.json({
      success: true,
      matches,
      storagePath: getLocalStoragePath() // Return the local storage path for reference
    })
    
  } catch (error) {
    console.error('Profile storage error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to store profile'
    })
  }
} 