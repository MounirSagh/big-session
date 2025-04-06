import React, { useState } from 'react';
import { Box, Divider, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import BugCard from './bugCard';
import Add from '../components/add';

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box padding="32px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" marginBottom="16px">List of Current Bugs</Typography>
        <Button 
          variant="contained" 
          style={{ maxHeight: '64px', borderRadius: '0.8em' }}
          onClick={handleOpenModal} // Open modal when clicked
        >
          Add Bug
        </Button>
      </Box>
      <Divider />
      <Box marginTop="16px">
        <BugCard BugTitle="Sample Title" BugDescription="Sample Description" />
      </Box>

      {/* Modal for adding a new bug */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Add Bug</DialogTitle>
        <DialogContent>
          <Add onAdd={(newBug: any) => {
            console.log(newBug); // Handle the new bug
            handleCloseModal(); // Close modal after adding
          }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseModal} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default App;