import React from 'react';
import { Button } from '@mui/material';

const Delete = ({ bugId, onDelete }: any) => {
  const handleDelete = () => {
    onDelete(bugId); 
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleDelete}>
        Delete Bug
      </Button>
    </div>
  );
};

export default Delete;
