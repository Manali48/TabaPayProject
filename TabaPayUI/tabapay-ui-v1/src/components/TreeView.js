import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

const TreeView = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleTextClick = () => {
    setOpenModal(true); // Set openModal state to true to open the modal
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Set openModal state to false to close the modal
  };
  const TreeNode = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <div onClick={toggleOpen}>
        {isOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}
        {label}
      </div>
        {isOpen && <div style={{ marginLeft: '20px' }}>{children}</div>}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p onClick={handleTextClick}>Click here to open modal</p>
      <div>
      <TreeNode label="Root">
        <TreeNode label="Parent A">
          <TreeNode label="Child A1" onClick={handleTextClick} />
          <TreeNode label="Child Parent A2">
            <TreeNode label="Child A21" />
            <TreeNode label="Child A22" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="Parent B">
          <TreeNode label="Child B1" />
          <TreeNode label="Child B2" />
          <TreeNode label="Child Parent B3" />
        </TreeNode>
      </TreeNode>
    </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div style={{ backgroundColor: '#fff', padding: '20px', width: '300px' }}>
          <h2 id="modal-title">Modal Title</h2>
          <p id="modal-description">This is a modal content.</p>
          <Button variant="contained" onClick={handleCloseModal}>Close Modal</Button>
        </div>
      </Modal>
    </div>
  );
};

export default TreeView;