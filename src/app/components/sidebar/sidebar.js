'use client'
import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Paper, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  const draggableItems = [
    { id: 'text', label: 'Text Input', type: 'text' },
    { id: 'checkbox', label: 'Checkbox', type: 'checkbox' },
  ];

  return (
    <Paper elevation={3} style={{ padding: '16px', height: '100%' }}>
      <h3 style={{ marginBottom: '16px' }}>Drag Fields</h3>
      <List>
        {draggableItems.map((item) => (
          <DraggableItem key={item.id} id={item.id} label={item.label} type={item.type} />
        ))}
      </List>
    </Paper>
  );
};

const DraggableItem = ({ id, label, type }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
    data: { label, type },
  });

  return (
    <ListItem
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '8px',
        marginBottom: '8px',
        cursor: 'grab',
      }}
    >
      <ListItemText primary={label} />
    </ListItem>
  );
};

export default Sidebar;
