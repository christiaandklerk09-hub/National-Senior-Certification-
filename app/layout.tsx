import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Apex Papers DBE Exam Practice',
  description: 'Comprehensive South African DBE Grade 12 National Senior Certificate examination practice platform with interactive annexures, step-by-step mathematical working, and authentic marking guidelines in signature light red theme.',
  openGraph: {
    title: 'Apex Papers DBE Exam Practice',
    description: 'Comprehensive South African DBE Grade 12 National Senior Certificate examination practice platform with interactive annexures, step-by-step mathematical working, and authentic marking guidelines in signature light red theme.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Papers DBE Exam Practice',
    description: 'Comprehensive South African DBE Grade 12 National Senior Certificate examination practice platform with interactive annexures, step-by-step mathematical working, and authentic marking guidelines in signature light red theme.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
