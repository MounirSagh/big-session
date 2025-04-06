import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const Update = ({ onUpdate, bug }: { onUpdate: (updatedBug: any) => void, bug: any }) => {

  const [title, setTitle] = useState(bug.title);
  const [description, setDescription] = useState(bug.description);
  const [status, setStatus] = useState(bug.status);
  const [priority, setPriority] = useState(bug.priority);
  const [assignee, setAssignee] = useState(bug.assignee);


  useEffect(() => {
    setTitle(bug.title);
    setDescription(bug.description);
    setStatus(bug.status);
    setPriority(bug.priority);
    setAssignee(bug.assignee);
  }, [bug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedBug = { title, description, status, priority, assignee };

    onUpdate(updatedBug);
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
        Update Bug
      </Button>
    </form>
  );
};

export default Update;
