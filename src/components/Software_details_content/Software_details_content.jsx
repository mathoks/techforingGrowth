import "./Software_details_content.css"

const Software_details_content = ({ details, shadow, imgSrc }) => {
    const { headTitle, content01, content02, ScreenShot } = details;
    return (
        <section>
            <h2 className='text_gradient inter lg:text-[36px] text-[18px] font-bold lg:mb-10 mb-[30px]'>{headTitle}</h2>
            <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
                <img src="/HRMS/icons/stroke_like.webp" alt="" />
                <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>{content01}</p>
            </div>
            <div className="grid grid-cols-1 items-center relative z-[1] mb-10 lg:hidden">
                {
                    imgSrc ? imgSrc :
                        <img src={ScreenShot} alt="" className="lg:w-[300px] w-3/5 mx-auto object-cover" />
                }
            </div>
            <div className='content_div'>
                <span className='content_div_sub'></span>
                <div className='para_div'>
                    <img src="/HRMS/icons/color_like.webp" alt="" />
                    <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-6 leading-[22px] text-light-gray font-light lg:text-justify text-left'>{content02}</p>
                </div>
            </div>
        </section>
    );
};

export default Software_details_content;