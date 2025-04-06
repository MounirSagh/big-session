import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Add = ({ onAdd }: { onAdd: (bug: any) => void }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    const newBug = {
      title,
      description,
      status,
      priority,
      assignee,
    };

    onAdd(newBug);

    setTitle('');
    setDescription('');
    setStatus('');
    setPriority('');
    setAssignee('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        required
      />
      <TextField
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        variant="outlined"
        required
      />
      <TextField
        label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        variant="outlined"
        required
      />
      <TextField
        label="Assignee"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        variant="outlined"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add Bug
      </Button>
    </form>
  );
};

export default Add;
