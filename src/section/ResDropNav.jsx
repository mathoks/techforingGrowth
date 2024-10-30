import Link from 'next/link'
import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

const ResDropNav = ({ active }) => {
  const list = [
    {
      name: "Talent",
      path: "/techforing-talent/"
    },
    {
      name: "Human",
      path: "/techforing-human/"
    },
    {
      name: "Cent",
      path: "/techforing-cent/"
    },
    {
      name: "Customer",
      path: "/techforing-customer/"
    },
    {
      name: "CMS",
      path: "/techforing-cms/"
    },
    {
      name: "Employee",
      path: "/employee/"
    }
  ]
  return (
    <div>
      {
        list.filter((item) => item.path !== active).map((item, index) => (
          <Link key={index} href={item?.path} className='bg-[#FFF]'>
            <div className='w-full angular_gradient relative py-[10px] px-3'>
              <span className='text-[#FFF] font-medium text_gradient'>{item?.name}</span>
              <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#1B2F53] text-[12px]' />
            </div>
          </Link>
        ))}
    </div>
  )
}

export default ResDropNav