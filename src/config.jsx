import { Employee, Performance, Arrow, Report, Document, Fund, Notice, Support, Filter, User, List, Money, Sales, Cash, MoneyBundle, Payroll, Asset, Percentage, ReportBar, Attendance, GlobeIcon, BlogIcon, SocialIcon, AccessIcon } from '@/components/Icon';


export const techForingHumanSubList = [
  {
    icon: <Employee />,
    name: 'Employee Management',
    link: '/techforing-human/employee_Management/#management'
  },
  {
    icon: <Attendance color1='#494949' color2='#494949' width='24px' />,
    name: 'Attendance Management',
    link: '/techforing-human/attendance_management/#management'
  },
  {
    icon: <Performance />,
    name: 'Performance Management',
    link: '/techforing-human/performance_management/#management'
  },
  {
    icon: <Notice />,
    name: 'Noticeboard Management',
    link: '/techforing-human/noticeboard_management/#management'
  },
  {
    icon: <Report />,
    name: 'Report Management',
    link: '/techforing-human/report_management/#management'
  },
  {
    icon: <Document />,
    name: 'Document Management',
    link: '/techforing-human/document_management/#management'
  },
  {
    icon: <Fund />,
    name: 'Funds Management',
    link: '/techforing-human/funds/#management',
  },

]
export const techForingTalentSubList = [
  {
    icon: <List />,
    name: 'Dynamic Job Board',
    link: "/techforing-talent/#path_1",

  },
  {
    icon: <User />,
    name: 'Hiring Process',
    link: '/techforing-talent/#path_2'
  },
  {
    icon: <Attendance color1='#494949' color2='#494949' width='24px' />,
    name: 'Applicant Management',
    link: '/techforing-talent/#path_3'
  },
  {
    icon: <Filter />,
    name: 'Talent Sorting',
    link: '/techforing-talent/#path_4'
  },
  {
    icon: <Support />,
    name: 'Candidate Support',
    link: '/techforing-talent/#path_5'
  },
]
export const techForingCentSubList = [
  {
    icon: <Money />,
    name: 'Budget Management',
    link: "/techforing-cent/budget_management/#management",
  },
  {
    icon: <Sales />,
    name: 'Sales Management',
    link: "/techforing-cent/sales_management/#management",
  },
  {
    icon: <Cash />,
    name: 'Cash Flow',
    link: "/techforing-cent/cash_flow/#management",
  },
  {
    icon: <MoneyBundle />,
    name: 'Expense & Expenses',
    link: "/techforing-cent/estimate_expense/#management",
  },
  {
    icon: <Payroll />,
    name: 'Payroll',
    link: "/techforing-cent/payroll/#management",
  },
  {
    icon: <Asset />,
    name: 'Asset',
    link: "/techforing-cent/asset/#management",
  },
  {
    icon: <Percentage />,
    name: 'Vat & Tax',
    link: "/techforing-cent/tax/#management",
  },
  {
    icon: <ReportBar />,
    name: 'Finance Report',
    link: "/techforing-cent/financial_report/#management",
  },
]
export const techForingCustomerSubList = [
  {
    icon: <List />,
    name: 'Client On-Boarding',
    link: "/techforing-customer/#path_1",

  },
  {
    icon: <User />,
    name: 'Project Management',
    link: '/techforing-customer/#path_2'
  },
  {
    icon: <Attendance color1='#494949' color2='#494949' width='24px' />,
    name: 'Communication Management',
    link: '/techforing-customer/#path_3'
  },
  {
    icon: <Filter />,
    name: 'Client Support',
    link: '/techforing-customer/#path_4'
  },
  {
    icon: <Support />,
    name: 'Access and Security Control',
    link: '/techforing-customer/#path_5'
  },
]

export const techForingCmsSubList = [
  {
    icon: <GlobeIcon />,
    name:'Site & Category Management',
    link:'/techforing-cms#path_1'
  },
  {
    icon: <BlogIcon />,
    name:'Blog Post Manage',
    link:'/techforing-cms/#path_2'
  },
  {
    icon: <SocialIcon />,
    name:'Social Accounts Handle',
    link:'/techforing-cms/#path_3'
  },
  {
    icon: <AccessIcon />,
    name:'Access & Security Control',
    link:'/techforing-cms/#path_4'
  },

]

export const companySubList = [
  {
    icon: '',
    name: 'About Us',
    link: '/about-us/'
  },
  {
    icon: '',
    name: 'Price',
    link: '/price/'
  },
  {
    icon: '',
    name: 'FAQ\'s',
    link: '/faq/'
  },
  {
    icon: '',
    name: 'Contact Us',
    link: '/contact-us/'
  },
]
export const legalSubList = [
  
  {
    icon: '',
    name: 'Privacy Policy',
    link: '/more/privacy_policy'
  },
  {
    icon: '',
    name: 'Terms & Condition',
    link: '/more/terms_condition'
  }
]
export const headerList = [
  {
    title: 'Home',
    link: '/',
    match: ""
  },
  {
    title: 'Applications',
    link: '',
    match: "",
    subList: [
      {
        title: 'TechForing Talent',
        link: '/techforing-talent/',
        iconPath: '/TechForing-talent-icon.svg',
        cta: {
          subTitle: 'Try Our AI-Powered Recruitment Module Today and Experience the Difference!',
          title: 'Ready to Boost Your Hiring Efficiency?',
          button: 'Learn more',
          redirect:"/techforing-talent",

        },
        subSubList: techForingTalentSubList,
      },
      {
        title: 'TechForing Human',
        link: '/techforing-human/',
        iconPath: '/TechForing-Human-icon.svg',
        subSubList: techForingHumanSubList,
        cta: {
          title: 'Embrace the Future of HR Management',
          button: 'Start Your Journey',
          redirect:"/techforing-human",
        },
      },
      {
        title: 'TechForing Cent',
        link: '/techforing-cent/',
        iconPath: '/TechForing-Cent-icon.svg',
        subSubList: techForingCentSubList,
        cta: {
          subTitle: 'Stop Wasting Time on Manual Attendance Tracking',
          title: 'Boost Financial Efficiency',
          button: 'Contact Us',
          redirect:"/techforing-cent",
        },
        
      },
      {
        title: 'TechForing Customer',
        link: '/techforing-customer/',
        iconPath: '/TechForing-Customer.svg',
        subSubList: techForingCustomerSubList,
        cta: {
          subTitle: 'Give your clients the service and updates with a portal they’ll love!',
          title: 'Your Clients Deserve the Best',
          button: 'Upgrade Your Client Management',
          redirect:"/techforing-customer",
        },
        
      },
      {
        title: 'TechForing CMS',
        link: '/techforing-cms/',
        iconPath: '/TechForing-CMS.svg',
        subSubList: techForingCmsSubList,
        cta: {
          subTitle: 'Publish on multiple websites and social media with one click with TF CMS.',
          title: 'Save Time, Ensure Consistency',
          button: 'Upgrade Your Content Management',
          redirect:"/techforing-cms"
        },
        
      },

    ]
  },
  {
    title: 'Price',
    link: '/price/',
    match: "price"
  },
  // {
  //   title: 'More',
  //   link: '',
  //   match: 'more',
  //   subList: [
  //     {
  //       title: 'Company',
  //       link: '',
  //       iconPath: '/Company-icon.svg',
  //       subSubList: companySubList,
  //       cta: {
  //         subTitle: 'TechForing: Your Reliable Partner for Tomorrows; Business Solutions',
  //         title: 'Partner With Us Today to Drive Your Business Forward',
  //         button: 'Contact Us',
  //       },
  //     },
  //     {
  //       title: 'Legal',
  //       link: '',
  //       iconPath: '/Legal-icon.svg',
  //       subSubList: legalSubList,
  //       cta: {
  //         subTitle: 'TechForing: Your Reliable Partner for Tomorrows; Business Solutions',
  //         title: 'Partner With Us Today to Drive Your Business Forward',
  //         button: 'Contact Us',
  //       },
  //     }
  //   ]
  // },
]
export const moreList =[
  {
    title: 'More',
    link: '',
    match: 'more',
    redirect:'/contact-us',
    subList: [
      {
        title: 'Company',
        link: '',
        iconPath: '/Company-icon.svg',
        subSubList: companySubList,
        cta: {
          subTitle: 'TechForing: Your Reliable Partner for Tomorrows; Business Solutions',
          title: 'Partner With Us Today to Drive Your Business Forward',
          button: 'Contact Us',
          redirect:'/contact-us'
        },
      },
      {
        title: 'Legal',
        link: '',
        iconPath: '/Legal-icon.svg',
        subSubList: legalSubList,
        cta: {
          subTitle: 'TechForing: Your Reliable Partner for Tomorrows; Business Solutions',
          title: 'Partner With Us Today to Drive Your Business Forward',
          button: 'Contact Us',
          redirect:'/contact-us'
        },
      }
    ]
  },
]