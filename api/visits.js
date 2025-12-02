// Vercel Serverless Function to track visits
// This creates a simple visit counter using Vercel KV or environment variables

let visitCount = 0;

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  
  if (req.method === 'GET') {
    // Increment visit count
    visitCount++;
    
    return res.status(200).json({ 
      count: visitCount,
      message: 'Visit counted'
    });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
