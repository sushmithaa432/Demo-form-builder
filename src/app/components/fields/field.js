'use client'
import React from 'react';
import { Card, CardContent, Typography, TextField, Checkbox } from '@mui/material';

const Field = ({ type, label }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '16px' }}>
      <CardContent>
        <Typography variant="subtitle2" style={{ marginBottom: '8px' }}>
          {label}
        </Typography>
        {type === 'text' && <TextField fullWidth placeholder={label} />}
        {type === 'checkbox' && <Checkbox />}
      </CardContent>
    </Card>
  );
};

export default Field;
