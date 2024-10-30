import Software_details_content from '@/components/Software_details_content/Software_details_content'

const AdvantageVsDisadvantage = ({ details, imgSrc, className, shadowRight, shadowLeft, shadowRightBL, height }) => {
  return (
    <section className={`px-4 overflow-hidden ${height ? height : 'lg:min-h-[550px]'} relative flex items-center`}>
      <div className={`${className} main_container flex_container gap-6`}>
        <div className='lg:w-[50%] w-full'>
          <Software_details_content imgSrc={typeof imgSrc !== 'string' && imgSrc} details={details} />
        </div>
        <div className={`lg:flex hidden relative z-10 lg:w-[50%] w-full justify-center`}>
          {typeof imgSrc === 'string' ?
            <img src={imgSrc} alt={imgSrc?.split('/').pop().split('.')[0]} className='h-full' /> :
            imgSrc
          }
        </div>
      </div>
      {
        shadowLeft ?
          <div className='absolute top-[50%] left-0 w-[40%] h-full bg-[#EAEAEA] translate-x-[-100px] translate-y-[-50%] border_top_right_radius lg:block hidden'></div>
          :
          shadowRight ?
            <div className='absolute w-6/12 bg-[#EAEAEA] rounded-bl-[17rem] right-0 top-0 h-full lg:block hidden'></div>
            :
            shadowRightBL &&
            <div className='absolute w-6/12 bg-[#EAEAEA] rounded-tl-[17rem] right-0 top-0 translate-x-24 h-full lg:block hidden'></div>
      }
    </section>
  )
}

export default AdvantageVsDisadvantage