'use client'
import { useRouter } from "next/navigation";
import { NavigationEvents } from '../components/NavigationEvents'
import { Suspense } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
  return (
    <div>
      <nav>
        <span onClick={() => router.push('/news')}>新闻</span>
        |
        <span onClick={() => router.push('/sports')}>体育</span>
      </nav>
      {children}
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>

    </div>
  );
}
