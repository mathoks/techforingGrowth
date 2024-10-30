'use client';
import Header from '@/components/Header';
import Finance_res_nav from '@/components/Finance_res_nav/Finance_res_nav';
import Finance_Banner_section from '@/components/Finance_Banner_section/Finance_Banner_section';
import Finance_routes_nav from '@/components/Finance_routes_nav/Finance_routes_nav';

import { usePathname } from 'next/navigation';

const FinanceLayout = ({ children }) => {
    const pathName = usePathname();
    const path = usePathname();
    const splits = path.split("/")[2];
    return (
        <div>
            <Header pathName={pathName} />
            <Finance_res_nav path={path} />
            <Finance_Banner_section />
            <div id="management"></div>
            <Finance_routes_nav path={splits} />
            {children}
        </div>
    );
};

export default FinanceLayout;