import React, { useState } from 'react';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface AddProps {
  onAdd: (newBug: any) => void;
}

const Add: React.FC<AddProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open');
  const [priority, setPriority] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBug = { id: Math.random(), title, description, status, priority, assignee };
    onAdd(newBug);
    setTitle('');
    setDescription('');
    setStatus('open');
    setPriority('');
    setAssignee('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'green';
      case 'in progress': return 'orange';
      case 'closed': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div>
      <h3>Add Bug</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          multiline
          rows={4}
          fullWidth
        />
        <FormControl fullWidth required>
          <InputLabel>Status</InputLabel>
          <Select value={status} onChange={(e) => setStatus(e.target.value)} label="Status">
            <MenuItem value="open">Open</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="closed">Closed</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          fullWidth
        />
        <TextField
          label="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">Add Bug</Button>
      </form>
      <div style={{ color: getStatusColor(status), marginTop: '10px' }}>
        Status: {status}
      </div>
    </div>
  );
};

export default Add;