import React from 'react'

const StyledCTA = ({ content, reverse, imgSrc, imgTransform, gap, bgHeight }) => {
  return (
    <section className='relative'>
      <div className={`main_container h-full flex gap-4 lg:gap-[80px] items-center justify-center relative z-[1] ${reverse && 'flex-row-reverse'} ${gap}`}>
        <div className='relative h-fit w-[50%]'>
          <img src='/whiteShade.webp' alt='' className='h-full' />
          <img src={imgSrc} alt={imgSrc?.slice('/')[0]} className={`absolute top-1/2 left-1/2 ${imgTransform ? imgTransform : '-translate-x-[50%]'} -translate-y-[58%]`} />
        </div>
        <div className='h-fit w-[50%]'>
          {content && content}
        </div>
      </div>
      <div className={`bg-white absolute top-1/2 -translate-y-1/2 left-0 w-full styledCTABg ${bgHeight ? bgHeight : 'h-[156px] lg:h-[420px]'}`}></div>
    </section>
  )
}

export default StyledCTA;