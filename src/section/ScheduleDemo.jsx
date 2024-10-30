'use client';
import { Modal, Box } from '@mui/material';
import Cross from './Cross';
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '@/context/globalContext';

const ScheduleDemo = () => {
  const { openScheduleDemo, setOpenScheduleDemo } = useGlobalContext();
  const [active, setActive] = useState('techforing-growth');
  const tabList = [
    'techforing-growth',
    'techforing-human',
    'techforing-talent',
    'techforing-cent',
  ]
  useEffect(() => {
    const calendlyArea = document.querySelector('.calendlyArea');
    if (calendlyArea) {
      calendlyArea.innerHTML = '';
      const calendlyInlineWidget = document.createElement('div');
      calendlyInlineWidget.setAttribute('class', 'calendly-inline-widget');
      calendlyInlineWidget.setAttribute('data-url', `https://calendly.com/techforing/${active}`);
      calendlyInlineWidget.setAttribute('style', 'min-width: 320px; height: 100%;');
      calendlyArea.appendChild(calendlyInlineWidget);
      const calendlyScript = document.createElement('script');
      calendlyScript.setAttribute('type', 'text/javascript');
      calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
      calendlyScript.setAttribute('async', '');
      calendlyArea.appendChild(calendlyScript);
    }

  }, [active, openScheduleDemo])
  return (
    <div className='block lg:w-fit w-full'>
      <Modal
        sx={{
          display: !openScheduleDemo ? 'none' : 'block',
        }}
        open={true}
        onClose={() => setOpenScheduleDemo(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className='customModalContainer'
        >
          <div className='mt-10 mb-2'>
            <ul className='flex justify-center items-center gap-2 md:gap-4 flex-wrap'>
              {
                tabList.map((tab, index) => (
                  <li key={index} className={`${tab === active ? "text-white bg-primary" : "text-secondary-1"} text-xs md:text-base flex items-center justify-center gap-4 py-2 md:py-3 px-2 shadow-shadow6.5x rounded-md md:rounded-lg cursor-pointer active:scale-95 transition-all duration-200`} onClick={() => setActive(tab)}>
                    <p className='roboto'>{
                      tab.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                    }</p>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="calendlyArea" style={{ minWidth: '320px', height: '100%' }}></div>
          <Cross
            onClick={() => setOpenScheduleDemo(false)}
            className='cursor-pointer absolute top-3 right-3 w-5 h-5 md:w-8 md:h-8 z-[9999]'
          />
        </Box>
      </Modal>
    </div>
  )
}

export default ScheduleDemo