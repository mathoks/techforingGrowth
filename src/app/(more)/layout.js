"use client";
import React from 'react';
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'
const PoliciesLayout = ({ children }) => {
    const pathName = usePathname();
    return (
        <div>
            <Header pathName={pathName} />
            <div className='custom-container'>
                {children}
            </div>
        </div>
    );
};

export default PoliciesLayout;