'use client';
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Box, TextField, Typography, Button } from '@mui/material';

const FormBuilder = () => {
  const initialFields = [
    { label: 'Name', name: 'name' },
    { label: 'Email', name: 'email' },
    { label: 'Role', name: 'role' },
    { label: 'Age', name: 'age' },
    { label: 'Department', name: 'department' },
    { label: 'Salary', name: 'salary' },
    { label: 'Phone Number', name: 'phone' },
    { label: 'Joining Date', name: 'joining_date' },
    { label: 'Address', name: 'address' },
  ];

  const [formFields, setFormFields] = useState(initialFields);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'FIELD',
    drop: (item) => handleFieldDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleFieldDrop = (item) => {
    const fieldExists = formFields.some(
      (field) => field.label === item.fieldName
    );
    if (!fieldExists) {
      setFormFields((prevFields) => [
        ...prevFields,
        { label: item.fieldName, name: item.fieldName.toLowerCase().replace(/\s+/g, '_') },
      ]);
    }
  };

  return (
    <Box
      ref={drop}
      sx={{
        flex: 1,
        width: '100%', // Adjust to use full available space
        padding: 4,
        backgroundColor: isOver ? '#f0f8ff' : '#f9f9f9',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Employee Form
      </Typography>
      <form>
        {formFields.map((field, index) => (
          <TextField
            key={index}
            fullWidth
            label={field.label}
            name={field.name}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            margin="normal"
            variant="outlined"
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormBuilder;