import { useState } from 'react'
import BugCard from './bugCard';
import { Box, Divider, Typography, Button } from '@mui/material';
import Add from '../components/add'

function App() {
  return (
    <Box padding="32px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant='h3' marginBottom="16px">
          List of Current Bugs
        </Typography>
        <Button variant='contained' style={{maxHeight: '64px', borderRadius:'0.8em'}}>
          Add Bug
        </Button>
      </Box>
      <Divider />
      <Box marginTop="16px">
        <BugCard BugTitle="Sample Title" BugDescription="Sample Description" />
      </Box>
    </Box>
  )
}

export default App
