"use client"
import { ChevronUpIcon , CircleAlert, Minus, Check} from 'lucide-react'
import React, { forwardRef, useEffect, useState } from 'react'
// import CheveronUp from "../../../public/ChevronUpOutline.svg"

const PackegeTableScrollPreview = forwardRef(({productData, singleProduct = null ,currentIndex, setSingleProduct, availableProduct, tabId, dynamicURL, setIsLoading, scrollToDiv}, ref) => {
    
  const [showDiv, setCollapseAcordion] = useState(true)
 

  const handleAccordion = ()=>{
  setCollapseAcordion((prev)=> !prev)
 }

    useEffect(() => {
        const fetchData = async () => {
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
          try {
            const res = await fetch(
              `${baseUrl}/blog/products-pricing/products-packages-with-features-update?${dynamicURL}=${tabId}`
            );
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
    
            const data = await res.json();
            console.log(data)
            setSingleProduct(data);
            
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            setIsLoading(false); // Set loading to false after fetching
          }
        };
        
        if(tabId && dynamicURL){
          fetchData()
        }
       
      }, [tabId, dynamicURL]);

    const Images = Array.isArray(productData) && productData.length > 0 ? productData.map(({images})=>images[0]) : ""
    const [Name, StyleName] = productData?.length > 0 ? productData[currentIndex]?.name.split(" ") : ["", " "]
  return (
    typeof singleProduct !== 'undefined'  ? (
    <div ref={ref} className='mt-10'>
      <div>
        <div  className='flex justify-start mx-4 items-center overflow-x-auto sticky top-[42px] z-40 border-b-[0.5px] border-[#0F93B1] bg-white '>
           { Array.isArray(Images) ? Images.map((src)=> <div className='cursor-pointer px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex-shrink-0 ' style={{borderTop: "0.5px solid rgb(15, 147, 177)", borderRight: "0.5px solid rgb(15, 147, 177)", borderBottom: "none", borderLeft: "0.5px solid rgb(15, 147, 177)" , borderImage: "initial", borderRadius: "20px 20px 0px 0px" , background: "transparent", minWidth: "fit-content", marginRight: "-1px"}}>
                <img onClick={()=>console.log("yes")} src={src} className='w-[60px] sm:w-[80px] lg:w-[112px] h-[18px] sm:h-[24px] lg:h-[32px] object-contain' alt='Tab 0'/>
            </div>)
           : ""}
        </div>
        <div className=' px-2'>
            <div className='bg-[#EEF4FD] p-1 flex items-center justify-between mx-2 pt-2 sticky top-[78px] z-30 '>
                <div>
                    <div className='flex items-center gap-2 px-3'>
                        <img className='w-5 h-5' src={productData[currentIndex].images[productData[currentIndex]?.images?.length - 1]}/>
                        <h2 className='text-base font-medium text-[#0F93B1]'>{Name} <span className='text-primary capitalize'>{StyleName}</span></h2>
                    </div>
                    <h2 className=' text-xs md:text-lg  my-3 px-3'>{productData[currentIndex]?.short_description}</h2>
                </div>
                <button> <ChevronUpIcon  style={{transform : showDiv ? "rotate(180deg)" : "rotate(-360deg)",  transition: "transform 0.3s ease-in-out"  } } onClick={handleAccordion} className='text-[#0F93B1] text-xl'/></button>
            </div>
            { showDiv && ( <table className='w-full border-separate border-spacing-y-4 table-fixed '>
                <thead className='sticky top-[150px] z-20 bg-white'>
                <tr>
                  { singleProduct?.product_packages?.map(({package:pack_})=> 
                        <th className='p-2 text-center'>
                            <div className='flex flex-col items-center border-[0.8px] border-[#0F93B1] rounded-sm p-2 h-40 '>
                                <div className='transform -rotate-90 h-full flex flex-col justify-center '>
                                    <h2 className='text-lg font-medium text-[#0F93B1] whitespace-nowrap w-auto'>{pack_}</h2>
                                    <p className='text-[12px] md:text-base font-medium text-[#0F93B1] whitespace-nowrap w-auto'>100</p>
                                </div>
                                <div className='bg-primary text-white px-3 py-1.5 rounded-md mt-2 text-xs w-auto'>Buy</div>
                            </div>
                        </th>
                    )
                  }
                  </tr>
                </thead>
                <tbody>
                   {singleProduct?.features?.map(({feature, value, product, product_packages})=><> <tr>
                        <th colSpan={2} className=' px-2 mt-2 text-left'>
                            <div className='flex items-center overflow-hidden gap-[6px]'>
                                <span className='text-secondary-1 font-medium'>{feature}</span>
                                <div className=' -mt-2 relative group z-10'>
                                   <CircleAlert className='text-[#0F93B1] w-[12px] h-[13px]'/> 
                                    <span className='absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-[#EEF4FD] p-4 text-dark-text-3 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ' style={{width: "11ch"}}>{value}</span>
                                </div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td className='px-2 text-left'>
                            <div className='flex items-center justify-center border border-gray-[#0F93B1]  p-4 h-10 w-full  bg-[#EEF4FD]'>
                                <span className='text-2xl'> {product_packages.find(({product}) => product === product) ? <Minus className='h-[1em] w-[1em] text-gray-400 text-2xl'/> : <Check className='text-primary h-[1em] w-[1em]'/> }</span>
                            </div>
                            
                        </td>
                        <td className='px-2 text-left'>
                        <div className='flex items-center justify-center border border-gray-[#0F93B1]  p-4 h-10 w-full  bg-[#EEF4FD]'>
                                <span className='text-gray-400 text-2xl'><Minus className='h-[1em] w-[1em]'/></span>
                            </div>
                        </td>
                    </tr></> )}
                </tbody>
            </table>
            )}
        </div>
      </div>
    </div>) : <div>Loading..</div>
  )
})

export default PackegeTableScrollPreview
