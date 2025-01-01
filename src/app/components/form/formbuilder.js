'use client'
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Paper, Typography } from '@mui/material';
import Field from '@/app/components/fields/field';

const FormBuilder = ({ fields }) => {
  const { setNodeRef } = useDroppable({
    id: 'form-canvas',
  });

  return (
    <Paper
      elevation={3}
      ref={setNodeRef}
      style={{
        padding: '16px',
        backgroundColor: '#f9f9f9',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      {fields.length > 0 ? (
        fields.map((field, index) => (
          <Field key={`${field.id}-${index}`} type={field.type} label={field.label} />
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          Drag fields here to build your form.
        </Typography>
      )}
    </Paper>
  );
};

export default FormBuilder;
