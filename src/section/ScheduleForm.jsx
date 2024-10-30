'use client';
import { Modal, Box } from '@mui/material';
import Cross from './Cross';
import React from 'react'
import { useGlobalContext } from '@/context/globalContext';

const ScheduleForm = () => {
  const { openScheduleForm, setOpenScheduleForm } = useGlobalContext();
  return (
    <div className='block lg:w-fit w-full'>
      <Modal
        sx={{
          display: !openScheduleForm ? 'none' : 'block',
        }}
        open={true}
        onClose={() => setOpenScheduleForm(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className='customModalContainer'
        >
          {/* <!-- Form inline widget begin --> */}
          <iframe
            srcDoc="
                <!DOCTYPE html>
                <html lang='en'>
                <head>
                  <meta charset='UTF-8'>
                  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                  <title>Bitrix24 Form</title>
                </head>
                <body>
                  <!-- Bitrix24 Form Script -->
                  <script data-b24-form='inline/446/u6b0wx' data-skip-moving='true'>
                    (function(w,d,u){
                      var s=d.createElement('script');
                      s.async=true;
                      s.src=u+'?'+(Date.now()/180000|0);
                      var h=d.getElementsByTagName('script')[0];
                      h.parentNode.insertBefore(s,h);
                    })(window,document,'https://cdn.bitrix24.com/b15773863/crm/form/loader_446.js');
                  </script>
                </body>
                </html>"
            width="100%"
            height="760"
          ></iframe>
          {/* <!-- form inline widget end --> */}
          <Cross
            onClick={() => setOpenScheduleForm(false)}
            className='cursor-pointer absolute top-3 right-3 w-5 h-5 md:w-8 md:h-8 z-[9999]'
          />
        </Box>
      </Modal>
    </div>
  )
}

export default ScheduleForm