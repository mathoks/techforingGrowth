import Header from '@/components/Header';
import Routes_nav from '@/components/Routes_nav/Routes_nav';
import HRMS_res_nav from '@/components/HRMS_res_nav/HRMS_res_nav';
import HRMS_Banner_section from '@/components/HRMS_Banner_section/HRMS_Banner_section';

const HrmsLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <HRMS_res_nav />
            <HRMS_Banner_section />
            <div id="management"></div>
            <Routes_nav />
            {children}
        </div>
    );
};

export default HrmsLayout;