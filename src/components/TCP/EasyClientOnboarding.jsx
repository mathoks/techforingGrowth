import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const EasyClientOnboarding = () => {
  const [animationStage, setAnimationStage] = useState(0)
  const [progress1, setProgress1] = useState(0)
  const [progress2, setProgress2] = useState(0)
  const [progress3, setProgress3] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleObserver = (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true)
        const timer = setInterval(() => {
          setAnimationStage(prev => (prev >= 14 ? 14 : prev + 1))
        }, 500)

        return () => clearInterval(timer)
      }
    }

    const observer = new IntersectionObserver(handleObserver, { threshold: 0.5 })
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [hasAnimated])

  useEffect(() => {
    if (animationStage === 0) {
      setProgress1(0)
      setProgress2(0)
      setProgress3(0)
    }

    if (animationStage > 0 && animationStage <= 5 && progress1 < 100) {
      const interval = setInterval(() => {
        setProgress1(prev => Math.min(prev + 5, 100))
      }, 50)
      return () => clearInterval(interval)
    }
    if (animationStage > 5 && animationStage <= 10 && progress2 < 100) {
      const interval = setInterval(() => {
        setProgress2(prev => Math.min(prev + 5, 100))
      }, 50)
      return () => clearInterval(interval)
    }
    if (animationStage > 10 && progress3 < 100) {
      const interval = setInterval(() => {
        setProgress3(prev => Math.min(prev + 5, 100))
      }, 50)
      return () => clearInterval(interval)
    }
  }, [animationStage, progress1, progress2, progress3])


  return (
    <section ref={containerRef} className='container mx-auto pb-12 px-4 lg:px-0'>
      <h2 className='text-[#256CBC] text-xl lg:text-4xl font-bold leading-[52px] text-center mt-[52px]'>Easy Client On-Boarding</h2>
      <p className='font-light p-6 text-center text-[#494949]'>Welcome to our seamless on-boarding experience!</p>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-9 mt-12 lg:mt-8'>

        {/* Step 1 */}
        <div className={`flex flex-col gap-4 items-center justify-center transition-all duration-[500ms] -mt-6 ease-in-out
          ${animationStage >= 0 && animationStage <= 5 ? 'opacity-100' : 'opacity-100'}`}>
          <div className='flex items-center justify-center lg:justify-end lg:ml-28 gap-2'>
            <div className='relative max-w-[150px] max-h-[150px] min-w-[100px] min-h-[100px] lg:w-full lg:h-full flex items-center justify-center'>
              <CircularProgressbar
                counterClockwise
                value={progress1}
                strokeWidth={6}
                styles={buildStyles({
                  pathColor: '#346ab6',
                  trailColor: 'transparent',
                  rotation: .5, // Starts progress from the bottom
                })}
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <Image
                  src='/TCP/client/client.svg'
                  alt='Client Information'
                  width={90}
                  height={90}
                  className={`rounded-none p-4 transition-all duration-[500ms] ease-in-out
                  ${animationStage > 1 ? 'opacity-100 scale-100 mt-0' : 'opacity-0 scale-50 mt-28'}`}
                />
                {animationStage >= 1 && (
                  <>
                    <Image src={'/TCP/client/client2.svg'} alt='svg' width={30} height={30} className={`absolute  duration-[1000ms] top-[35%] ${animationStage > 2 ? 'top-[35%] left-[17%]' : 'top-[35%] left-[28%] opacity-0'}`} />
                    <Image src={'/TCP/client/client3.svg'} alt='svg' width={30} height={30} className={`absolute top-[40%]  duration-[1000ms] ${animationStage > 2 ? 'right-[16%] lg:right-[18%]' : 'right-[25%] lg:right-[27%] opacity-0'}`} />
                  </>
                )}
              </div>
            </div>

            {/* steps images */}
            <div className=' hidden lg:flex h-full items-center -space-x-8 ml-1 -mr-28'>
              <div className={`w-full h-[125px] transition-all duration-[500ms] ease-in-out
              ${animationStage > 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <Image
                  src='/TCP/client/step1.svg'
                  alt='Step 1'
                  width={1000}
                  height={1000}
                  className='h-full w-full'
                />
              </div>
              <div className={`w-full h-[125px] transition-all duration-[500ms] ease-in-out
              ${animationStage > 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <Image
                  src='/TCP/client/step2.svg'
                  alt='Step 2'
                  width={1000}
                  height={1000}
                  className='h-full w-full'
                />
              </div>
              <div className={`w-full h-[125px] transition-all duration-[500ms] ease-in-out
              ${animationStage > 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <Image
                  src='/TCP/client/step3.svg'
                  alt='Step 3'
                  width={1000}
                  height={1000}
                  className='h-full w-full'
                />
              </div>
            </div>
          </div>
          <h3 className='text-lg font-bold text-[#2a5ba0]'>Client Information</h3>
          <p className='text-center text-[#494949] font-light'>
            First, we'll gather your personal details to ensure smooth communication. 
          </p>
        </div>

        {/* Step 2 */}
        <div className={`flex flex-col gap-4 items-center justify-center transition-all duration-[500ms] ease-in-out
          ${animationStage > 5 && animationStage <= 10 ? 'opacity-100' : 'opacity-100'}`}>
          <div className='flex items-center justify-center lg:justify-end lg:ml-28 gap-2'>
            <div className='relative max-w-[150px] max-h-[150px] min-w-[100px] min-h-[100px] lg:w-full lg:h-full flex items-center justify-center'>
              <CircularProgressbar
                counterClockwise
                value={progress2}
                strokeWidth={6}
                styles={buildStyles({
                  pathColor: '#346ab6',
                  trailColor: 'transparent',
                  rotation: .5, // Starts progress from the bottom
                })}
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <Image
                  src='/TCP/client/computer.svg'
                  alt='Client Information'
                  width={90}
                  height={90}
                  className={`rounded-none p-4 transition-all duration-[500ms] ease-in-out z-40
                  ${animationStage > 6 ? 'opacity-100 scale-100 mt-0' : 'opacity-0 scale-50 mt-28'}`}
                />
                {animationStage >= 6 && (
                  <>
                    <Image src={'/TCP/client/settings.svg'} alt='svg' width={30} height={30} className={`absolute top-[40%] animate-spin duration-[700ms] ${animationStage > 7 ? 'opacity-100 scale-100 left-[20%]' : 'opacity-0 scale-50 left-[30%]'}`} />
                    <Image src={'/TCP/client/settings.svg'} alt='svg' width={30} height={30} className={`absolute top-[40%]  animate-spin duration-[800ms] ${animationStage > 7 ? 'opacity-100 scale-100 animate-spin right-[16%]' : 'opacity-0 scale-50 right-[26%]'}`} />
                    <Image src={'/TCP/client/i.svg'} alt='svg' width={3} height={3} className={`absolute top-[45%] right-1/2 duration-[800ms] z-40 ${animationStage > 7 ? 'opacity-100 scale-125' : 'scale-0'}`} />
                  </>
                )}
              </div>
            </div>
            {/* steps images */}
            <div className='hidden lg:flex h-full items-center -space-x-8 ml-1 -mr-28'>
              <div className={`w-full h-[125px] transition-all duration-[500ms] ease-in-out
              ${animationStage > 6 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <Image
                  src='/TCP/client/step1.svg'
                  alt='Step 1'
                  width={1000}
                  height={1000}
                  className='h-full w-full'
                />
              </div>
              <div className={`w-full h-[125px] transition-all duration-[500ms] ease-in-out
              ${animationStage > 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <Image
                  src='/TCP/client/step2.svg'
                  alt='Step 2'
                  width={1000}
                  height={1000}
                  className='h-full w-full'
                />
              </div>
              <div className={`w-full h-[125px] transition-all duration-[500ms] ease-in-out
              ${animationStage > 8 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <Image
                  src='/TCP/client/step3.svg'
                  alt='Step 3'
                  width={1000}
                  height={1000}
                  className='h-full w-full'
                />
              </div>
            </div>
          </div>
          <h3 className='text-lg font-bold text-[#2a5ba0]'>Service Information</h3>
          <p className='text-center text-[#494949] font-light'>
            Next, we'll capture the specifics of your project or services needed, tailoring our approach to meet your unique needs. 
          </p>
        </div>

        {/* Step 3 */}
        <div className={`flex flex-col gap-4 items-center justify-center transition-all duration-[500ms] ease-in-out
          ${animationStage > 10 ? 'opacity-100' : 'opacity-100'}`}>
          <div className='flex items-center justify-center'>
            <div className='relative max-w-[150px] max-h-[150px] min-w-[100px] min-h-[100px] lg:w-full lg:h-full flex items-center justify-center overflow-hidden'>
              <CircularProgressbar
                counterClockwise={true}
                value={progress3}
                strokeWidth={6}
                styles={buildStyles({
                  pathColor: '#346ab6',
                  trailColor: 'transparent',
                  rotation: .5, // Starts progress from the bottom
                })}
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <Image
                  src='/TCP/client/wallet.svg'
                  alt='Client Information'
                  width={90}
                  height={90}
                  className={`rounded-none p-4 transition-all duration-[500ms] ease-in-out z-40
                  ${animationStage > 11 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                />
                {animationStage >= 11 && (
                  <>
                    <Image src={'/TCP/client/card.svg'} alt='svg' width={50} height={40} className={`absolute top-[35%]  duration-[700ms] ${animationStage > 12 ? 'opacity-100 scale-100 left-[35%] top-[28%]' : 'opacity-0 scale-50 top-[35%]'}`} />
                    <Image src={'/TCP/client/card.svg'} alt='svg' width={50} height={40} className={`absolute  duration-[800ms] ${animationStage > 13 ? 'opacity-100 scale-100  top-[25%] z-0' : 'opacity-0 scale-50 top-[30%]'}`} />
                  </>
                )}
              </div>
            </div>
          </div>
          <h3 className='text-lg font-bold text-[#2a5ba0]'>Payment Information</h3>
          <p className='text-center text-[#494949] font-light'>
            Finally, we'll set up your payment information for hassle-free transactions. Let's embark on this exciting journey together! 
          </p>
        </div>

      </div>
    </section>
  )
}

export default EasyClientOnboarding