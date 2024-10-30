import "./Software_details_content2.css"

const Software_details_content2 = ({ details2 }) => {
    const { headTitle, content01, content02, ScreenShot } = details2;

    return (
        <>
            <h2 className='text_gradient inter lg:text-[36px] text-[18px] font-bold lg:mb-10 mb-[30px] lg:mr-[60px] mr-0'>{headTitle}</h2>
            <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
                <img src="/HRMS/icons/stroke_like.webp" alt="" />
                <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>{content01}</p>
            </div>

            <div className="h-[250px] items-center relative z-[1] mb-10 lg:hidden block ">
                <div className="bg-light-white res_bg_shape2"></div>
                <img src={ScreenShot} alt="" className="lg:w-[300px] w-full h-full mx-auto object-cover" />
            </div>

            <div className='content_div'>
                <span className='content_div_sub'></span>
                <div className='para_div'>
                    <img src="/HRMS/icons/color_like.webp" alt="" />
                    <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>{content02}</p>
                </div>
            </div>
        </>
    );
};

export default Software_details_content2;