import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';

const TreeNode = ({ label, children, onNodeClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNodeClick = () => {
    onNodeClick(label); // Callback function to handle node click
  };

  return (
    <div>
      <div onClick={toggleOpen}>
        {isOpen ? '▼ ' : '► '}
        {label}
      </div>
      {isOpen && <div style={{ marginLeft: '20px' }}>{children}</div>}
      {!isOpen && children && children.map((child, index) => (
        <TreeNode key={index} {...child} onNodeClick={onNodeClick} />
      ))}
      <Button variant="contained" onClick={handleNodeClick}>Open Modal</Button>
    </div>
  );
};

const DynamicTreeMenu = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedNode, setSelectedNode] = useState('');

  const handleNodeClick = (nodeLabel) => {
    setOpenModal(true);
    setSelectedNode(nodeLabel);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <TreeNode label="Root">
        <TreeNode label="Parent A" onNodeClick={handleNodeClick}>
          <TreeNode label="Child A1" onNodeClick={handleNodeClick} />
          <TreeNode label="Child Parent A2" onNodeClick={handleNodeClick}>
            <TreeNode label="Child A21" onNodeClick={handleNodeClick} />
            <TreeNode label="Child A22" onNodeClick={handleNodeClick} />
          </TreeNode>
        </TreeNode>
        <TreeNode label="Parent B" onNodeClick={handleNodeClick}>
          <TreeNode label="Child B1" onNodeClick={handleNodeClick} />
          <TreeNode label="Child B2" onNodeClick={handleNodeClick} />
          <TreeNode label="Child Parent B3" onNodeClick={handleNodeClick}>
            <TreeNode label="Child B31" onNodeClick={handleNodeClick} />
          </TreeNode>
        </TreeNode>
      </TreeNode>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px' }}>
          <h2 id="modal-title">Modal Title</h2>
          <p id="modal-description">Node clicked: {selectedNode}</p>
          <Button variant="contained" onClick={handleCloseModal}>Close Modal</Button>
        </div>
      </Modal>
    </div>
  );
};

export default DynamicTreeMenu;
