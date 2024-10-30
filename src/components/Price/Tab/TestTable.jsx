import React, { useEffect, useRef, useState } from 'react';

const TestTable = () => {
    const headerRef = useRef(null);
    const [headerBottom, setHeaderBottom] = useState(0);

    useEffect(() => {
        const calculateHeaderBottom = () => {
            if (headerRef.current) {
                const headerRect = headerRef.current.getBoundingClientRect();
                setHeaderBottom(headerRect.bottom);
            }
        };

        calculateHeaderBottom();
        window.addEventListener('scroll', calculateHeaderBottom);
        window.addEventListener('resize', calculateHeaderBottom);

        return () => {
            window.removeEventListener('scroll', calculateHeaderBottom);
            window.removeEventListener('resize', calculateHeaderBottom);
        };
    }, []);
    console.log('buttom position ', headerBottom);
    return (
        <div>
            <header ref={headerRef} className='sticky top-20 z-50 bg-white'>
                Sticky header
            </header>
            <p>Header bottom position: {headerBottom}px from top</p>
            <section className='h-[1000px] '> 
                <div className='h-[300px] '>
                    <h1 className='text-2xl font-bold bg-red-500 ' >Hello</h1>
                </div>
                <div className='h-[300px] '>
                    <h1 className='text-2xl font-bold bg-blue-500 sticky top-40 z-30' >Hello 2</h1>
                </div>
                <div className='h-[300px] '>
                    <h1 className='text-2xl font-bold bg-green-500 sticky ' >Hello 3</h1>
                </div>
            </section>
        </div>
    );
};

export default TestTable;