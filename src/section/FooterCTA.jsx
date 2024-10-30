const FooterCTA = ({ imgSrc, title, button }) => {
  return (
    <div className='relative h-[110px] lg:h-[281px]'>
      <img className='h-full w-full object-cover' src={imgSrc} alt={imgSrc?.split('/').pop().split('.')[0]} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center lg:gap-7 gap-2 w-full justify-center lg:flex-row flex-col">
        <h2 className="lg:text-start text-center inter lg:text-[28px] text-[15px] text-light-white2 font-normal  max-w-[80%]">
          {title}
        </h2>
        {button && button}
      </div>
    </div>
  )
}

export default FooterCTA