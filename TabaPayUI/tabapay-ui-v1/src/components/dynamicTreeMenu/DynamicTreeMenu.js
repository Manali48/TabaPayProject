import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './TreeMenu.css';
import treeData from './treeData.json';

const TreeNode = ({ path, label, children, isOpen, onToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const [clickedLabel, setClickedLabel] = useState('');

  const handleClick = () => {
    if (children) {
      onToggle(isOpen ? '' : path); // Toggle based on current state and path
    } else {
      setClickedLabel(label);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="tree-node">
      <div className="tree-node-label" onClick={handleClick}>
        <div className="tree-node-icon">
          {children ? (
            isOpen ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />
          ) : (
            <FontAwesomeIcon icon={faCheckCircle} />
          )}
        </div>
        {label}
      </div>
      {isOpen && <div className="tree-node-content">{children}</div>}
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="modal-container"
        BackdropProps={{ invisible: true }}
      >
        <div className="modal-content">
          <h2 id="modal-title">{clickedLabel}</h2>
          <p id="modal-description">Description </p>
          <div class="modal-button"><Button variant="contained" onClick={handleCloseModal}>Close</Button></div></div>
      </Modal>
    </div>
  );
};

const DynamicTreeMenu = () => {
  const [openPath, setOpenPath] = useState('');

  const handleToggle = (newPath) => {
    setOpenPath(openPath === newPath ? '' : newPath);
  };

  // Check if the current path should be open based on the openPath state
  const isOpen = (path) => {
    return openPath.startsWith(path);
  };

  const renderTreeNodes = (data, path) => {
    return Object.entries(data).map(([key, value]) => {
      const nodePath = path ? `${path}/${key}` : key;
      return (
        <TreeNode
          key={nodePath}
          path={nodePath}
          label={value.label}
          isOpen={isOpen(nodePath)}
          onToggle={handleToggle}
        >
          {value.children && renderTreeNodes(value.children, nodePath)}
        </TreeNode>
      );
    });
  };

  return (
    <div>
      {renderTreeNodes(treeData, '')}
    </div>
  );
};

export default DynamicTreeMenu;
