// app/og-image/route.tsx
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Resume Builder
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#e0e7ff',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          Create Professional Resumes • 20+ Templates • Free PDF Download
        </div>
        <div
          style={{
            marginTop: 60,
            display: 'flex',
            fontSize: 24,
            color: '#c7d2fe',
          }}
        >
          No sign-up required
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}