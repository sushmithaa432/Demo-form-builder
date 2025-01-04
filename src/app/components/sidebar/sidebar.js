'use client';
import React from 'react';
import { useDrag } from 'react-dnd';
import { Box, Typography } from '@mui/material';

const DraggableField = ({ fieldName }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FIELD',
    item: { fieldName },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      sx={{
        padding: 2,
        backgroundColor: isDragging ? '#d3d3d3' : '#e0e0e0',
        marginBottom: 2,
        borderRadius: 1,
        cursor: 'grab',
      }}
    >
      {fieldName}
    </Box>
  );
};

const Sidebar = () => {
  const additionalFields = ['Date of Birth', 'Gender', 'Marital Status', 'Emergency Contact', 'Nationality'];

  return (
    <Box
      sx={{
        width: '30%',
        padding: 3,
        backgroundColor: '#f5f5f5',
        borderRight: '1px solid #ddd',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Additional Fields
      </Typography>
      {additionalFields.map((field, index) => (
        <DraggableField key={index} fieldName={field} />
      ))}
    </Box>
  );
};

export default Sidebar;