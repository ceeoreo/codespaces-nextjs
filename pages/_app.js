import '../global.css'
import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default function MyApp({ Component, pageProps }) {
  return ( 
    // define basepath here https://github.com/auth0/nextjs-auth0/tree/f462bc66c8dfaa82eed5615bcca40ee545ec9dd6?tab=readme-ov-file#base-path-and-internationalized-routing
    // ie UserProvider loginUrl="/basepath/api/auth/login"
    // not sure how to get this to change with each sub path routing bc it doesn't seem to be automatic
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
