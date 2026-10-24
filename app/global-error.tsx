'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body style={{ backgroundColor: '#fff5f5', color: '#7f1d1d', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #fca5a5', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Something went wrong!</h2>
          <button
            onClick={() => reset()}
            style={{ padding: '10px 20px', backgroundColor: '#ef4444', color: 'white', borderRadius: '5px', cursor: 'pointer', border: 'none' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
