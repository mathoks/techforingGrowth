import { Check, DeleteIcon, Exclamation, IdeasIcon, MeetingIcon, Minus, PeoplesIcon, Polygon, PolygonFill, ThumbsDown, Tracking, TrashIcon } from "./SvgIcons"

export const planning = {
  ScreenShot: '/HRMS/Employee_management/planning.webp',
  headTitle: "Make Data-Driven Workforce Planning",
  content01: "Identifying staffing needs, and skill gaps, and making informed decisions without sufficient data becomes exceptionally complex.",
  content02: "Simplify the process with a complete list of employee positions and departments, aiding in workforce planning, identifying skill gaps, and optimizing staffing."
}
export const recordKeeping = {
  ScreenShot: '/HRMS/Employee_management/Record-Keeping.webp',
  headTitle: "Automate Record-Keeping for Efficiency",
  content01: "Maintaining and updating employee records manually is time-consuming and riddled with errors.",
  content02: "Streamline your HR operations by automating record management to ensure accurate and up-to-date employee information is readily accessible, right at your fingertips."
}
export const adminList = {
  ScreenShot: '/HRMS/Employee_management/adminList.webp',
  headTitle: "Efficiently Track & Relegate Admin Changes",
  content01: "Manual HR administration often faces challenges like administrative chaos, difficulty tracking admin changes, trouble communication efficiency, etc. due to a lack of centralized control and granular permissions, ultimately hindering efficient HR operations.",
  content02: "Save time and effort with centralized administrative control, enhanced data security through granular permissions, and efficient admin change tracking, This feature centralizes admin management, ensures authorized access, and maintains a historical record of changes."
}
export const registration = {
  ScreenShot: '/HRMS/Employee_management/registration.svg',
  headTitle: "Resignations Don’t Have to be Messy",
  content01: "Handling employee resignations without proper documentation and organization can lead to many complications.",
  content02: "Simplify the offboarding process by systematically recording the resignation details, including dates and reasons, making the transition smooth for both employees and HR."
}
export const exEmployee = {
  ScreenShot: '/HRMS/Employee_management/screenshot_2.webp',
  headTitle: "Easily Retrieve Ex-Employee Data!",
  content01: "Without a comprehensive archive of former employee records, it’s challenging and time-consuming to conduct reference checks or evaluate rehiring.",
  content02: "Easily store all the Ex-employee’s historical data with just a few clicks for future reference checks, assess rehiring, or perform any inquiries efficiently."
}
export const training = {
  ScreenShot: '/HRMS/Employee_management/screenshot_6.webp',
  headTitle: "Untangle Training Management Complexity",
  content01: "Manually keeping track of all your employee training needs, progress, and completion can be very cumbersome. What if you could do it from one simple dashboard?",
  content02: "TechForing Human comes with a simplified training management system, Helping HR to keep tabs on employee development, monitor progress, and ensure timely completion."
}

export const hiddenCostData_tcp = {
  headTitle: "The Hidden Costs of Inefficiency",
  featImage: "/TCP/hidden-costs-img.webp",
  description: "In today's fast-paced business environment, not using advanced management software can lead to significant challenges:",
  contents: [
    {
      id: 1,
      icon: <PeoplesIcon />,
      paragraph: "Without a streamlined system, client on-boarding becomes chaotic, leading to delays and a poor first impression."
    },
    {
      id: 2,
      icon: <MeetingIcon />,
      paragraph: "Lack of centralized project management tools can result in missed deadlines, poor task tracking, and decreased team productivity."
    },
    {
      id: 3,
      icon: <IdeasIcon />,
      paragraph: "Ineffective communication between clients and support teams can cause misunderstandings, increased response times, and client dissatisfaction."
    },
    {
      id: 4,
      icon: <DeleteIcon />,
      paragraph: "Manually handling tasks that could be automated wastes valuable time and resources, hindering overall business growth."
    }
  ]
  ,
}

export const hiddenCostData_cms = {
  headTitle: "The Hidden Costs of Manual Blog Management",
  featImage: "/CMS/hidden-cost-image.webp",
  description: "Without a dedicated blog management software, managing your blogging efforts can become a cumbersome and inefficient process.",
  contents: [
    {
      id: 1,
      icon: <TrashIcon />,
      paragraph: "Manually handling multiple sites, categories, and posts takes up valuable time that could be better spent on creating quality content."
    },
    {
      id: 2,
      icon: <ThumbsDown />,
      paragraph: "Without a unified platform to manage drafts, edits, and approvals, maintaining the quality and coherence of your blog content can be difficult."
    },
    {
      id: 3,
      icon: <Tracking />,
      paragraph: "Keeping track of blog history, edits, and updates across various platforms without a centralized system can lead to confusion and mistakes."
    },
    {
      id: 4,
      icon: <Exclamation />,
      paragraph: "Managing user roles and permissions manually increases the risk of unauthorized access and content breaches, compromising the security of your blogs."
    }
  ]
  ,
}


export const cmsBlogData = [
  {
    name: 'anim1',
    images: [
      ' /CMS/anim/anim1-setting.svg',
      '/CMS/anim/anim1-globe1.svg',
      ' /CMS/anim/anim1-globe2.svg',
      ' /CMS/anim/anim1-globe3.svg',
      ' /CMS/anim/globetick.svg'
    ],
    title: "Add and Manage Sites",
    content: "Easily add the site logo, name, and URL of the platforms where your blogs will be posted. Edit these details at any time to keep your information up-to-date."
  },
  {
    name: 'anim2',
    images: [
      ' /CMS/anim/anim2-step1.svg',
      '/CMS/anim/anim2-step2.svg',
      ' /CMS/anim/anim2-step3.svg',
      ' /CMS/anim/anim2-step4.svg',
      ' /CMS/anim/anim2-step5.svg',
      ' /CMS/anim/anim2-step6.svg',
      ' /CMS/anim/anim2-step7.svg',
      ' /CMS/anim/anim2-step8.svg'
    ],
    title: "Organize with Categories & Sub-categories",
    content: "Choose the site from your list and add categories and sub-categories for better organization. This ensures that your blogs are neatly categorized, making it easier to manage and find specific posts."
  },
  {
    name: 'anim3',
    images: [
      ' /CMS/anim/anim3-step1.svg',
      '/CMS/anim/anim3-step2.svg',
      ' /CMS/anim/anim3-step3.svg',
      ' /CMS/anim/anim3-step4.svg',
      ' /CMS/anim/anim3-step5.svg',
    ],
    title: "Streamlined Blog Creation",
    content: "Write and post blogs tailored to your chosen categories and sub-categories. Navigate through your blog history effortlessly to locate posts by their specific category or sub-category, ensuring a structured and efficient blogging process."
  },
]

export const perfectBlogData = [
  {
    icon1: <Polygon className='w-5 h-5 flex-shrink-0' />,
    icon2: <PolygonFill className='w-5 h-5 flex-shrink-0' />,
    img1: "/CMS/b-tab2.1.webp",
    img2: "/CMS/b-tab2.2.webp",
    title: 'Choose Your Platform',
    content: 'Define the website where your blog will be published effortlessly. Select from your pre-saved list of sites to ensure your content reaches the right audience.',
  },
  {
    icon1: <Polygon className='w-5 h-5 flex-shrink-0' />,
    icon2: <PolygonFill className='w-5 h-5 flex-shrink-0' />,
    title: 'Organize by Category',
    content: 'Write your blog according to the initially saved category and sub-category topics. This keeps your content organized and easy to manage.',
    img1: "/CMS/b-tab3.1.webp",
    img2: "/CMS/b-tab3.2.webp"
  },
  {
    icon1: <Polygon className='w-5 h-5 flex-shrink-0' />,
    icon2: <PolygonFill className='w-5 h-5 flex-shrink-0' />,
    title: 'Customize Your URL',
    content: ' Set the URL endpoint for your blog to enhance its visibility and accessibility. Ensure your posts are easy to find and share.',
    img1: "/CMS/b-tab4.1.webp",
    img2: "/CMS/b-tab4.2.webp"
  },
  {

    icon1: <Polygon className='w-5 h-5 flex-shrink-0' />,
    icon2: <PolygonFill className='w-5 h-5 flex-shrink-0' />,
    title: 'Seamless Content Creation',
    content: 'From writing precise content to managing images with accuracy, our platform empowers you to craft perfect blogs effortlessly.',
    img1: "/CMS/b-tab5.1.webp",
    img2: ''
  },
  {
    icon1: <Polygon className='w-5 h-5 flex-shrink-0' />,
    icon2: <PolygonFill className='w-5 h-5 flex-shrink-0' />,
    title: 'Control Viewer Interaction',
    content: ' Enable or disable comments for your blog posts to manage viewer interaction according to your preferences.',
    img1: '/CMS/b-tab6.1.webp',
    img2: '/CMS/b-tab6.2.webp'
  },
  {
    icon1: <Polygon className='w-5 h-5 flex-shrink-0' />,
    icon2: <PolygonFill className='w-5 h-5 flex-shrink-0' />,
    title: 'Optimize for Search Engines',
    content: ' Set keywords for each blog to improve its search engine ranking. Boost your blog’s discoverability and attract more readers.',
    img1: '/CMS/b-tab7.1.webp',
    img2: "/CMS/b-tab7.2.webp"
  },
]


export const accessAndSecurityData = [
  {
    title: 'Admin',
    data: [
      {
        icon: <Check />,
        text: "Full access and control over the platform",
        opacity: false
      },
      {
        icon: <Check />,
        text: "Manage users and roles",
        opacity:false
      },
      {
        icon: <Minus />,
        text: "Write and draft blog posts",
        opacity: true
      },
      {
        icon: <Minus />,
        text: "Edit own drafts",
        opacity: true
      },
      {
        icon: <Minus />,
        text: "Review and edit blog posts",
        opacity: true
      },
      {
        icon: <Minus />,
        text: "Approve or reject posts",
        opacity: true
      },
    ]
  },
  {
    title:"Content Creator",
    data:[{
      icon: <Minus />,
      text:"Full access and control over the platform",
      opacity:true
    },
    {
      icon: <Minus />,
      text:"Manage users and roles",
      opacity:true,
    },
    {
      icon: <Check />,
      text:"Write and draft blog posts",
      opacity:false,
    },
    {
      icon: <Check />,
      text:"Edit own drafts",
      opacity:false,
    },
    {
      icon: <Minus />,
      text:"Review and edit blog posts",
      opacity:true,
    },
    {
      icon: <Minus />,
      text:"Approve or reject posts",
      opacity:true,
    },
  ]
  },
  {
    title:"Content Editor",
    data:[{
      icon: <Minus />,
      text:"Full access and control over the platform",
      opacity:true
    },
    {
      icon: <Minus />,
      text:"Manage users and roles",
      opacity:true,
    },
    {
      icon: <Minus />,
      text:"Write and draft blog posts",
      opacity:true,
    },
    {
      icon: <Minus />,
      text:"Edit own drafts",
      opacity:true,
    },
    {
      icon: <Check />,
      text:"Review and edit blog posts",
      opacity:false,
    },
    {
      icon: <Check />,
      text:"Approve or reject posts",
      opacity:false,
    },
  ]
  }
]



export const easyClientOnboardingData = [
  {
    img:'',
    title:'Client Information',
    content:"First, we'll gather your personal details to ensure smooth communication."
  },
  {
    img:'',
    title:'Service Information',
    content:"Next, we'll capture the specifics of your project or services needed, tailoring our approach to meet your unique needs."
  },
  {
    img:'',
    title:'Payment Information',
    content:"Finally, we'll set up your payment information for hassle-free transactions. Let’s embark on this exciting journey together!"
  },
]