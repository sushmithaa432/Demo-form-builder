'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMicClick = () => {
    console.log('Mic icon clicked! Add functionality here.');
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#8B4513', // Set the navbar color to brown
        color: '#FFFFFF', // White text for better contrast
        padding: '1rem 2rem', // Increased height (padding)
        width: '100%', // Full width
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Add a shadow for emphasis
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Add FormBuilder title */}
        <Typography
          variant="h4" // Increased font size
          component="div"
          sx={{ fontWeight: 'bold', mr: 3 }}
        >
          FormBuilder
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 3 }}>
          <Button color="inherit" href="#home" sx={{ fontSize: '1.1rem' }}>Home</Button>
          <Button color="inherit" href="#forms" sx={{ fontSize: '1.1rem' }}>Forms</Button>
          <Button color="inherit" href="#contact" sx={{ fontSize: '1.1rem' }}>Contact</Button>
          <Button color="inherit" href="#about" sx={{ fontSize: '1.1rem' }}>About</Button>
        </Box>

        {/* Right-side Icons and Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit" sx={{ fontSize: '1.5rem' }}>
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleMicClick} sx={{ fontSize: '1.5rem' }}>
            <MicIcon />
          </IconButton>
          <Button
            color="inherit"
            onClick={handleMenuClick}
            sx={{ fontSize: '1.1rem' }}
          >
            Dashboard
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;