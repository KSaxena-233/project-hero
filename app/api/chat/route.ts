import { NextResponse } from 'next/server';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  userType: 'student' | 'individual';
  matchScore?: number;
  compatibilityFactors?: string[];
}

// Knowledge base for developmental disabilities
const knowledgeBase = {
  general: [
    "Developmental disabilities are a group of conditions due to an impairment in physical, learning, language, or behavior areas.",
    "These conditions begin during the developmental period, may impact day-to-day functioning, and usually last throughout a person's lifetime.",
    "Common developmental disabilities include intellectual disabilities, autism spectrum disorder, cerebral palsy, and Down syndrome."
  ],
  communication: [
    "Effective communication with individuals with developmental disabilities often requires patience, clarity, and respect.",
    "Use simple language, avoid jargon, and give the person time to process and respond.",
    "Non-verbal communication, such as gestures and facial expressions, can be very helpful.",
    "Always treat the person with dignity and respect, regardless of their communication abilities."
  ],
  support: [
    "Support needs vary widely among individuals with developmental disabilities.",
    "Some may need assistance with daily living skills, while others may need support with social interactions.",
    "It's important to ask the individual and their family about their specific needs and preferences.",
    "Consistency and routine can be very helpful for many individuals with developmental disabilities."
  ],
  resources: [
    "The Arc of the Triangle provides support and resources for individuals with developmental disabilities.",
    "ASNC (Autism Society of North Carolina) offers programs and services for individuals with autism.",
    "Alliance Health provides services for individuals with intellectual and developmental disabilities.",
    "Trillium Health Resources offers behavioral health and intellectual/developmental disability services."
  ]
};

export async function POST(request: Request) {
  try {
    const { message, userType, matchScore, compatibilityFactors } = await request.json() as ChatRequest;
    
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const lowerMessage = message.toLowerCase();
    let response = '';

    // Check for keywords and provide relevant information
    if (lowerMessage.includes('what') && lowerMessage.includes('developmental disability')) {
      response = knowledgeBase.general.join('\n\n');
    }
    else if (lowerMessage.includes('communicat') || lowerMessage.includes('talk') || lowerMessage.includes('speak')) {
      response = knowledgeBase.communication.join('\n\n');
    }
    else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('assist')) {
      response = knowledgeBase.support.join('\n\n');
    }
    else if (lowerMessage.includes('resource') || lowerMessage.includes('organization') || lowerMessage.includes('agency')) {
      response = knowledgeBase.resources.join('\n\n');
    }
    else if (lowerMessage.includes('match') || lowerMessage.includes('compatibility')) {
      response = `Your match has a compatibility score of ${matchScore}% based on the following factors:\n${compatibilityFactors?.join('\n')}\n\nWould you like to know more about how to build a successful relationship with your match?`;
    }
    else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      response = `Hello! I'm here to help you with your match. You can ask me about developmental disabilities, communication strategies, support needs, or resources in your area.`;
    }
    else {
      response = `I'm here to help you with your match and provide information about developmental disabilities. You can ask me about communication strategies, support needs, or resources in your area.`;
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 