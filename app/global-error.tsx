'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#fff5f5', color: '#7f1d1d', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0 }}>
        <div style={{ textAlign: 'center', padding: '32px', backgroundColor: '#ffffff', border: '1px solid #fecdd3', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(244,63,94,0.1)', maxWidth: '420px', width: '90%' }}>
          <div style={{ width: '48px', height: '48px', margin: '0 auto 16px', borderRadius: '12px', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626', fontSize: '24px', fontWeight: 'bold' }}>
            !
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#991b1b', marginBottom: '8px' }}>Application Error</h2>
          <p style={{ fontSize: '14px', color: '#b91c1c', marginBottom: '20px', lineHeight: '1.5' }}>
            {error?.message || 'An unexpected error occurred in the exam portal.'}
          </p>
          <button
            onClick={() => reset()}
            style={{ padding: '10px 24px', backgroundColor: '#ef4444', color: '#ffffff', borderRadius: '10px', cursor: 'pointer', border: 'none', fontWeight: '600', fontSize: '14px' }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
