import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const NavList = () => {
  const navList = [
    { id: 1, name: 'Notes', icon: <LightbulbOutlinedIcon />, to: "/" },
    { id: 2, name: 'Archive', icon: <ArchiveOutlinedIcon />, to: "/archive" },
    { id: 3, name: 'Trash', icon: <DeleteOutlinedIcon />, to: "/trash" },
  ];

  const location = useLocation();

  return (
    <List>
      {navList.map((list) => (
        <Link
          to={list.to}
          key={list.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >

          {/* //differ the Active state */}
          <ListItemButton
            sx={{
              backgroundColor: location.pathname === list.to ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
              borderRadius: '8px',
            }}
          >
            <ListItemIcon>{list.icon}</ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  );
};

export default NavList;
