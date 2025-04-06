import React, { useState } from 'react';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface UpdateProps {
  bug: any;
  onUpdate: (updatedBug: any) => void;
}

const Update: React.FC<UpdateProps> = ({ bug, onUpdate }) => {
  const [title, setTitle] = useState(bug.title);
  const [description, setDescription] = useState(bug.description);
  const [status, setStatus] = useState(bug.status);
  const [priority, setPriority] = useState(bug.priority);
  const [assignee, setAssignee] = useState(bug.assignee);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedBug = { id: bug.id, title, description, status, priority, assignee };
    onUpdate(updatedBug);
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
      <h3>Update Bug</h3>
      <form onSubmit={handleUpdate}>
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
        <Button type="submit" variant="contained" color="primary">Update Bug</Button>
      </form>
      <div style={{ color: getStatusColor(status), marginTop: '10px' }}>
        Status: {status}
      </div>
    </div>
  );
};

export default Update;