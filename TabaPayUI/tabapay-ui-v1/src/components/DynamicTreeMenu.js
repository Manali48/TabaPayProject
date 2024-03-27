import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './TreeMenu.css'; 

const TreeNode = ({ label, children, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tree-node">
      <div className="tree-node-label" onClick={toggleOpen}>
        <div className="tree-node-icon">
          {isOpen ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}
        </div>
        {label}
      </div>
      {isOpen && <div className="tree-node-content">{children}</div>}
      {onClick && (
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className="modal-container"
          BackdropProps={{ invisible: true }}
        >
          <div className="modal-content">
            <h2 id="modal-title">Modal Title</h2>
            <p id="modal-description">This is a modal content</p>
            <Button variant="contained" onClick={() => setIsOpen(false)}>Close Modal</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

const DynamicTreeMenu = () => {
  return (
    <div>
      <TreeNode label="Root">
        <TreeNode label="Parent A">
          <TreeNode label="Child A1" onClick={true} />
          <TreeNode label="Child Parent A2">
            <TreeNode label="Child A21" onClick={true} />
            <TreeNode label="Child A22" />
          </TreeNode>
        </TreeNode>
        <TreeNode label="Parent B">
          <TreeNode label="Child B1" />
          <TreeNode label="Child B2" onClick={true} />
          <TreeNode label="Child Parent B3" />
        </TreeNode>
      </TreeNode>
    </div>
  );
};

export default DynamicTreeMenu;
