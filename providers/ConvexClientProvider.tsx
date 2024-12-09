"use client"
import React from 'react'
import { ClerkProvider,useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ConvexReactClient } from "convex/react";
type Props = {
    children: React.ReactNode
}
const convex = new ConvexReactClient(process.env.VITE_CONVEX_URL as string);
const ConvexClientProvider = ({children}: Props) => {
  return (
    <ClerkProvider>
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
            {children}
        </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}

export default ConvexClientProvider