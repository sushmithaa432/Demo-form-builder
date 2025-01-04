'use client';
import Sidebar from './components/sidebar/sidebar'; // Correct Sidebar path
import FormBuilder from './components/form/formbuilder'; // Correct FormBuilder path
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box } from '@mui/material';

const Page = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ display: 'flex', flexGrow: 1, minHeight: '100vh' }}>
        {/* Sidebar with fixed width */}
        <Sidebar sx={{ width: '30%' }} />

        {/* FormBuilder with increased width */}
        <Box sx={{ flex: 1, width: '70%' }}>
          <FormBuilder />
        </Box>
      </Box>
    </DndProvider>
  );
};

export default Page;