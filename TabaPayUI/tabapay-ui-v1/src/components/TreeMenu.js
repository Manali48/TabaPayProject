import React from "react";
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";

const ShowTreeComponent = (props) => {
  const { children, activeTree, selectedTree } = props;
  return (
    <div hidden={activeTree !== selectedTree}>
      {activeTree === selectedTree && <Box mx={2}>{children}</Box>}
    </div>
  );
};
const TreeMenu = () => {
  const [activeTree, setActiveTree] = useState();
  const treeHeading = ["Slider", "Portal", "Stepper", "Modal"];
  const treeSubHeading = [
    "Slider One",
    "Portal One",
    "Stepper One",
    "Modal One",
  ];
  const handleSelect = (event, selectedTree) => {
    setActiveTree(selectedTree);
  };
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI TreeView Example
      </Typography>
      <Stack spacing={3} direction="row">
        <Box width="20%">
          <TreeView
            defaultExpandIcon={<ExpandMoreIcon />}
            defaultCollapseIcon={<ChevronRightIcon />}
            onNodeSelect={handleSelect}
          >
            {treeHeading.map((treeItem, index) => (
              <TreeItem nodeId={index} label={treeItem}>
                <TreeItem
                  nodeId={treeSubHeading[index]}
                  label={treeSubHeading[index]}
                />
              </TreeItem>
            ))}
          </TreeView>
        </Box>
        <Box width="80%">
          <ShowTreeComponent activeTree={activeTree} selectedTree="Slider One">
            <MuiSlider />
          </ShowTreeComponent>
          <ShowTreeComponent activeTree={activeTree} selectedTree="Portal One">
            <MuiPortal />
          </ShowTreeComponent>
          <ShowTreeComponent activeTree={activeTree} selectedTree="Stepper One">
            <MuiStepper />
          </ShowTreeComponent>
          <ShowTreeComponent activeTree={activeTree} selectedTree="Modal One">
            <MuiModal />
          </ShowTreeComponent>
        </Box>
      </Stack>
    </Box>
  );
};

export default TreeMenu;