import { PropTypes } from 'prop-types'
const BusinessTeamCTA = ({ title, subTitle, button, imgSrc, reverse, className }) => {
  return (
    <section className={`${className} bg-[#FAFAFA] shadow-shadow1x text-[#FAFAFA] px-4 lg:px-0 lg:h-[385px] h-[120px] overflow-y-hidden`}>
      <div className={`main_container flex items-center lg:gap-16 gap-2 h-full ${reverse && 'flex-row-reverse'}`}>
        {
          typeof imgSrc === 'string' ?
            <img src={imgSrc} alt="" className='h-full' />
            :
            imgSrc
        }
        <div>
          <h3 className="inter font-light lg:text-[36px] text-[12px] lg:mb-3 mb:2 text-left lg:leading-[48px] leading-[18px]">{title}</h3>
          <div className="text-secondary-1 font-light lg:text-[18px] text-[9px] lg:leading-[28px] leading-[14px]">
            {subTitle}
          </div>
          <div className="lg:mt-10 mt-2 text-left">
            {button}
          </div>
        </div>
      </div>
    </section >
  )
}

export default BusinessTeamCTA
BusinessTeamCTA.prototype = {
  title: PropTypes.string | PropTypes.node,
  subTitle: PropTypes.string | PropTypes.node,
  button: PropTypes.string | PropTypes.node,
  imgSrc: PropTypes.string,
}