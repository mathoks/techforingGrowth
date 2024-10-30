'use client';

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeaderTop from '@/components/HeaderTop'
import FloatingBar from '@/section/FloatingBar'
import { usePathname } from 'next/navigation';
import React from 'react'

const HeaderFooterLayout = ({ children }) => {

  const pathname = usePathname();




  return (
    <main>
      {pathname.includes('price-preview') === false && <HeaderTop />}
      {/* <Header /> */}
      {children}

      {pathname.includes('price-preview') === false && (
        <>
          <Footer />
          <FloatingBar />
        </>

      )}
    </main>
  )
}

export default HeaderFooterLayout