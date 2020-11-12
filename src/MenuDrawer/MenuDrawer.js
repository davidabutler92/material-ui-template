import React from 'react';
import Drawer from '@material-ui/core/Drawer';

export default function MenuDrawer({ drawerOpen, setDrawerOpen }) {
  return (
    <Drawer anchor='left' open={drawerOpen} onClose={() => {setDrawerOpen(false)}}>
      <h1>DRAWER</h1>
    </Drawer>
  );

};