import { Box, Modal } from '@mui/material';
import React from 'react';

const Portal = ({ handlePortalClose, closePortal }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%', // Use percentage for responsive width
    maxWidth: '800px', // Set a max width for larger screens
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px', // Optional rounded corners
    overflow: 'hidden', // Prevent content overflow
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
              top: '15px',
              right: '15px',
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
              <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center lg:text-left tracking-tighter">
                  Under Development
                </h2>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Portal;
