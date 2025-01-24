"use client";

import { SessionProvider } from 'next-auth/react';
import { LandingPageComponent } from '../components/landing-page'
import { useEffect } from 'react'
import { getSession, signIn } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

export default function Page() {
  
  useEffect(() => {
    const ensureToken = async () => {
      const session = await getSession()
      const isExpired = session?.expires ? new Date(session.expires) <= new Date() : true
      
      if (!session || isExpired) {
        await signIn("credentials", {
          redirect: false,
        })
      }
    }
    ensureToken();
  }, [])

  return (
    <SessionProvider>
        <Toaster />
        <LandingPageComponent />
    </SessionProvider>
  )
}