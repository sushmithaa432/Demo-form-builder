'use client';

import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Grid, Container, Typography } from '@mui/material';
import FormBuilder from '@/app/components/form/formbuilder'
import Sidebar from '@/app/components/sidebar/sidebar'

export default function Home() {
  const [fields, setFields] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over?.id === 'form-canvas') {
      const newField = {
        id: active.id,
        label: active.data.current.label,
        type: active.data.current.type,
      };
      setFields((prev) => [...prev, newField]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Container maxWidth="lg" style={{ height: '100vh', paddingTop: '32px' }}>
        <Grid container spacing={2} style={{ height: '100%' }}>
          {/* Sidebar */}
          <Grid item xs={3}>
            <Sidebar />
          </Grid>

          {/* Form Builder */}
          <Grid item xs={9}>
            <Typography variant="h5" gutterBottom>
              Form Builder
            </Typography>
            <FormBuilder fields={fields} />
          </Grid>
        </Grid>
      </Container>
    </DndContext>
  );
}
