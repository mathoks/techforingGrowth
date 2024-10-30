import React from 'react'
import p from '../style/sharedComponents.module.css';
import Image from 'next/legacy/image';
import { TechForingDragon } from './Icon';
const PageCommonBanner = ({ bgTagImg, title }) => {
  return (
    <div className={p.pageCommonBanner}>
      <div className={p.content}>
        <TechForingDragon />
        <h1 className='text-primary text-4xl font-bold text-center mt-3'>{title}</h1>
        <img src='/dropShadow.webp' alt='shadow' className='w-[730px] h-[92px]' />
      </div>
      <div className={p.blurShade}></div>
      {
        bgTagImg?.map((item, index) =>
          // make a unique class for each item
          <div key={index} className={p.bgTagImg}>
            {item}
          </div>
        )
      }
    </div>
  )
}

export default PageCommonBanner