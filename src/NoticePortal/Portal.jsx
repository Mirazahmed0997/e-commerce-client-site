import { Box, Modal, Typography } from '@mui/material';
import React from 'react';

const Portal = ({ handlePortalClose, closePortal }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    position: 'relative', // Ensure relative positioning for children
  };


  return (
    <div>
      <Modal
        open={closePortal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Close Button */}
          <button
            onClick={handlePortalClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
            aria-label="Close"
          >
            &times;
          </button>

          {/* Modal Content */}
          <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-6xl tracking-tighter font-bold">Under Construction
                  <br className="sm:hidden" />
                </h2>
                {/* <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                  <br className="sm:hidden" />50% Off
                </h2> */}
                {/* <div className="space-x-2 text-center py-2 lg:py-0">
                  <span>Plus free shipping! Use code:</span>
                  <span className="font-bold text-lg">MAMBA</span>
                </div> */}
               
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Portal;