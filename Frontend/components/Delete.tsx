import React from 'react';
import { Button } from '@mui/material';

interface DeleteProps {
  bugId: string;
  onDelete: (id: string) => void;
}

const Delete: React.FC<DeleteProps> = ({ bugId, onDelete }) => {
  const handleDelete = () => {
    onDelete(bugId);
  };

  return (
    <Button variant="contained" color="error" onClick={handleDelete}>
      Delete Bug
    </Button>
  );
};

export default Delete;