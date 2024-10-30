"use client"
import React from 'react'
import '../app/globals.css'
import s from '../style/sharedComponents.module.css';
import { CheckCircle } from './Icon';
import Image from 'next/legacy/image';

const SocialLinks = ({ style }) => {
  return (
    <div className="socialLinks">
      <ul className={`flex ${style?.gap ? style.gap : 'gap-6'}`}>
        <li>
          <a href="https://www.facebook.com/techforinggrowth" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={style?.width || "22"} height={style?.height || "22"} viewBox="0 0 22 22" fill="none">
              <path d="M11 0C4.94999 0 0 4.95884 0 11.0663C0 16.5884 4.02599 21.1717 9.28399 22V14.2691H6.48999V11.0663H9.28399V8.6255C9.28399 5.85342 10.923 4.32932 13.442 4.32932C14.641 4.32932 15.895 4.53916 15.895 4.53916V7.26707H14.509C13.145 7.26707 12.716 8.11747 12.716 8.98996V11.0663H15.774L15.279 14.2691H12.716V22C15.3081 21.589 17.6684 20.2611 19.3709 18.2561C21.0734 16.2511 22.0059 13.701 22 11.0663C22 4.95884 17.05 0 11 0Z" fill={style?.fill || "white"} />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/techforing-growth/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width={style?.width || "22"} height={style?.height || "22"} viewBox="0 0 22 22" fill="none">
              <path d="M11 0C4.92479 0 0 4.92479 0 11C0 17.0752 4.92479 22 11 22C17.0752 22 22 17.0752 22 11C22 4.92479 17.0752 0 11 0ZM8.30729 15.5593H6.07979V8.39094H8.30729V15.5593ZM7.17979 7.51094C6.47625 7.51094 6.02135 7.0125 6.02135 6.39604C6.02135 5.76698 6.49 5.28344 7.20844 5.28344C7.92688 5.28344 8.36687 5.76698 8.38062 6.39604C8.38062 7.0125 7.92687 7.51094 7.17979 7.51094ZM16.4427 15.5593H14.2152V11.5867C14.2152 10.662 13.8921 10.0341 13.0866 10.0341C12.4713 10.0341 12.1057 10.4592 11.9442 10.8682C11.8846 11.0138 11.8697 11.22 11.8697 11.4251V15.5581H9.64104V10.6769C9.64104 9.78198 9.6124 9.03375 9.5826 8.38979H11.5179L11.6199 9.38552H11.6646C11.9579 8.91802 12.6764 8.22823 13.8783 8.22823C15.3439 8.22823 16.4427 9.21021 16.4427 11.3208V15.5593Z" fill={style?.fill || "white"} />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://x.com/tf_growth" target="_blank" rel="noreferrer">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width={style?.width || "22"} height={style?.height || "22"} viewBox="0 0 22 22" fill="none">
              <path d="M11 0C17.0814 0 22 4.91857 22 11C22 17.0814 17.0814 22 11 22C4.91857 22 0 17.0814 0 11C0 4.91857 4.91857 0 11 0ZM8.98857 16.7986C13.86 16.7986 16.5314 12.76 16.5314 9.25571V8.91C17.05 8.53286 17.5057 8.06143 17.8514 7.52714C17.38 7.73143 16.8614 7.87286 16.3271 7.95143C16.8771 7.62143 17.3014 7.10286 17.49 6.49C16.9714 6.78857 16.4057 7.00857 15.8086 7.13429C15.3214 6.61571 14.63 6.30143 13.8757 6.30143C12.4143 6.30143 11.22 7.49571 11.22 8.95714C11.22 9.16143 11.2357 9.36571 11.2986 9.55429C9.09857 9.44429 7.13429 8.39143 5.83 6.78857C5.61 7.18143 5.46857 7.63714 5.46857 8.12429C5.46857 9.03571 5.94 9.85286 6.64714 10.3243C6.20714 10.3243 5.79857 10.1986 5.45286 9.99429V10.0257C5.45286 11.3143 6.36429 12.3829 7.57429 12.6343C7.35429 12.6971 7.11857 12.7286 6.88286 12.7286C6.71 12.7286 6.55286 12.7129 6.38 12.6814C6.71 13.7343 7.7 14.5043 8.84714 14.52C7.93571 15.2271 6.78857 15.6514 5.54714 15.6514C5.32714 15.6514 5.12286 15.6514 4.91857 15.62C6.08143 16.3743 7.48 16.8143 8.97286 16.8143" fill={style?.fill || "white"} />
            </svg> */}
            <svg width={style?.width || '22'} height={style?.height || '22'} viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.880022 87.2899C0.883905 75.8627 3.14283 64.5486 7.52735 53.996C11.9119 43.4434 18.3357 33.8598 26.4309 25.7944C34.526 17.729 44.1332 11.3404 54.7018 6.99475C65.2705 2.64909 76.5928 0.431809 88.02 0.469967C135.68 0.529967 174.69 39.65 174.68 87.38C174.68 135.38 135.53 174.59 87.68 174.45C76.252 174.446 64.9372 172.186 54.3844 167.8C43.8316 163.414 34.2484 156.988 26.1844 148.891C18.1203 140.793 11.734 131.184 7.39176 120.613C3.04947 110.042 0.836589 98.7178 0.880022 87.2899ZM74.24 92.2899L35.93 136.17C45.52 137.07 53.48 137.8 59.73 128.68C65.98 119.56 74.37 111.59 82.17 102.74C88.31 110.84 94.74 118.11 99.75 126.26C104.88 134.61 111.24 137.94 120.94 136.72C127.53 135.9 134.3 136.57 141.99 136.57C127.24 117.05 113.24 98.57 99.18 79.95L135.5 38.34C131.22 38.34 128.1 38.62 125.04 38.27C120.49 37.76 117.41 39.27 114.44 42.93C107.07 51.93 99.18 60.49 91.28 69.49C87.57 64.64 84.06 60.01 80.51 55.43C76.13 49.79 72.79 41.9999 67.02 39.1699C61.25 36.3399 53.02 38.3999 45.88 38.3499C42.04 38.3499 38.2 38.3499 33.42 38.3499L74.24 92.2899Z" fill={style?.fill || "white"} />
              <path d="M53.9502 48.8599C60.4902 46.7099 63.9502 49.5399 67.3702 54.1699C83.9102 76.4499 100.78 98.4899 117.53 120.62C118.82 122.31 120.07 124.04 121.39 125.82C114.32 127.71 113.29 127.42 109.22 122.07C91.5402 98.7366 73.8735 75.4266 56.2202 52.14C55.5002 51.12 54.7602 49.9999 53.9502 48.8599Z" fill={style?.fill || "white"} />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/techforinggrowth/" target="_blank" rel="noreferrer">
            <svg width={style?.width || "22"} height={style?.height || "22"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill={style?.fill || "white"} />
              <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill={style?.fill || "white"} />
              <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill={style?.fill || "white"} />
              <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill={style?.fill || "white"} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

const Divider = ({ style }) => {
  return (
    <div className={s.divider} style={style}></div>
  )
}

const Button = ({ style, text, link, className, onClick, variant }) => {
  return (
    <div className='cursor-pointer w-fit'>
      {
        link ?
          <a
            className={`${s.btn} ${variant === 'secondary' ? s.secondaryBtn : s.primaryBtn} ${className}`}
            href={link} target="_blank" rel="noreferrer"
          >
            <button style={style}>{text}</button>
          </a>
          :
          <div
            onClick={onClick && onClick}
            className={`${s.btn} ${variant === 'secondary' ? s.secondaryBtn : s.primaryBtn} ${className}`}
          >
            <button style={style}>{text}</button>
          </div>
      }
    </div>
  )
}

const TabSlideViewer = ({ tabList, content, reverse, style, className, title, animation }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const handleActive = (index) => {
    setActiveTab(index);
  }
  const cssStyles = `
  .${className} .${s.item}:hover {
    background: ${style.background};
  }
  .${className} .${s.item}.${s.active} {
    background: ${style.background};
  }
  .${className} .${s.title} {
    background: ${style.background};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .${className} .${s.subTitle} {
    width: ${style.subTitleWidth};
  }
  `
  return (
    <div className={`${s.tabSlideViewer} custom-container ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <h1 className={`${s.title} whitespace-pre-wrap`}>{title}</h1>
      <div className='w-fit m-auto mt-12'>
        <ul className='flex gap-4 relative z-20'>
          {
            tabList?.map((tab, index) => {
              return (
                <li
                  key={index}
                  className={`${s.item} cursor-pointer ${index === activeTab ? s.active : ''}`}
                  onClick={() => handleActive(index)}
                >
                  {tab.icon}
                  <span className='text-secondary-1 text-base'>{tab.name}</span>
                </li>
              )
            }
            )
          }
        </ul>
      </div>
      <div className={`flex items-start mt-16 ${reverse && 'flex-row-reverse'}`}>
        <div className={s.detailsArea}>
          <h3 className={s.subTitle}>{content[activeTab]?.subTitle}</h3>
          <p className={s.details}>{content[activeTab]?.details}</p>
          <div className="flex min-h-20 h-fit">
            {
              content[activeTab]?.tagList?.map((tag, index) => {
                return (
                  <React.Fragment key={index}>
                    <div key={index} className='flex flex-col gap-2 items-center w-36'>
                      {tag.icon}
                      <p className={s.tagName}>{tag.name}</p>
                    </div>
                    {index !== content[activeTab]?.tagList.length - 1 && <Divider />}
                  </React.Fragment>
                )
              }
              )
            }
          </div>
        </div>
        <div className={s.imgArea}>
          {animation}
        </div>
      </div>
    </div>
  )
}

const CTA = ({ style, title, subTitle, btnText, btnLink }) => {
  return (
    <div className={s.cta} style={style}>
      <div>
        <div className={s.title}>{title}</div>
        <p className={s.subTitle}>{subTitle}</p>
      </div>
      <Button text={btnText} link={btnLink} />
    </div>
  )
}

const DataSecurity = ({ style }) => {
  return (
    <>
      <div className="mt-24 lg:block hidden" style={{
        backgroundImage: `url(/dataSecurityBG.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="custom-container flex items-center h-[464px] px-16 rounded-lg" >
          <div className='flex flex-col items-center gap-2 w-4/12'>
            <h3 className='text-white text-center text-4xl font-bold leading-[48px] px-12'>Uncompromised Data Security</h3>
            <p className='text-[28px] text-primary font-medium'>Techforing Growth</p>
          </div>

          <div className='flex flex-col gap-3 w-8/12 ml-20'>
            <div className='flex items-center gap-4'>
              <CheckCircle width="36px" fill='var(--primary)' />
              <p className='text-lg font-medium text-white'>Protect stored data with advanced database security</p>
            </div>
            <div className='flex items-center gap-4'>
              <CheckCircle width="36px" fill='var(--primary)' />
              <p className='text-lg font-medium text-white'>Secure data transmission with state-of-the-art encryption protocols</p>
            </div>
            <div className='flex items-center gap-4'>
              <CheckCircle width="36px" fill='var(--primary)' />
              <p className='text-lg font-medium text-white'>Safeguard against emerging threats with regular security updates</p>
            </div>
            <div className='flex items-center gap-4'>
              <CheckCircle width="36px" fill='var(--primary)' />
              <p className='text-lg font-medium text-white'>Prevent data loss with automatic data backup and recovery</p>
            </div>
            <div className='flex items-center gap-4'>
              <CheckCircle width="36px" fill='var(--primary)' />
              <p className='text-lg font-medium text-white'>Compliance with data privacy regulations (GDPR & local privacy laws)</p>
            </div>
          </div>
        </div>
      </div>

      <div className='data_security lg:hidden block'>
        <h2 className='roboto font-bold text-[18px] leading-6 text-white text-center mb-2'>Uncompromised Data Security</h2>
        <p className='roboto text-[14px] font-medium text-center text-green'>TechForing Growth</p>

        <div className='mt-8'>
          <ul>
            <li className='mb-4'>
              <div className='flex items-center'>
                <img src="/Home/tic.webp" alt="" />
                <p className='roboto font-medium ml-4 text-[14px] text-white'>Protect stored data with advanced database security</p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='flex items-center'>
                <img src="/Home/tic.webp" alt="" />
                <p className='roboto font-medium ml-4 text-[14px] text-white'>Secure data transmission with state-of-the-art encryption protocols</p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='flex items-center'>
                <img src="/Home/tic.webp" alt="" />
                <p className='roboto font-medium ml-4 text-[14px] text-white'>Safeguard against emerging threats with regular security updates</p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='flex items-center'>
                <img src="/Home/tic.webp" alt="" />
                <p className='roboto font-medium ml-4 text-[14px] text-white'>Prevent data loss with automatic data backup and recovery</p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='flex items-center'>
                <img src="/Home/tic.webp" alt="" />
                <p className='roboto font-medium ml-4 text-[14px] text-white'>Compliance with data privacy regulations (GDPR & local privacy laws)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

const CustomImage = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} className='w-[200px] h-[200px]' />
    </div>
  )
}
export {
  SocialLinks,
  Divider,
  Button,
  TabSlideViewer,
  CTA,
  DataSecurity,
  CustomImage,
}