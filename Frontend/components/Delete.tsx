import React from 'react';
import { Button } from '@mui/material';

const Delete = ({ onDelete, bugId }: { onDelete: (id: string) => void, bugId: string }) => {
  const handleDelete = () => {
    onDelete(bugId);
  };

  return (
    <div>
      <Button
        onClick={handleDelete}
        variant="contained"
        color="secondary"
      >
        Delete Bug
      </Button>
    </div>
  );
};

export default Delete;
