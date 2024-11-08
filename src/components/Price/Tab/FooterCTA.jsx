"use client"
import { useFooterCTA } from '@/utils/price'
import React, { memo } from 'react'

const FooterCTA = memo(({dynamicURL, tabId}) => {

  const {data} = useFooterCTA(dynamicURL, tabId)
  console.log(data)
  // useEffect(()=>{
    
  //   if(dynamicURL && tabId)console.log(data);
    
  // }, [tabId, dynamicURL, currentIndex])
  
  return (
    <div>FooterCTA</div>
  )
})

export default FooterCTA