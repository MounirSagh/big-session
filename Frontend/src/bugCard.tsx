import React, { JSX } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

interface BugCardProps {
  BugTitle: string;
  BugDescription: string;
}

const BugCard: React.FC<BugCardProps> = ({ BugTitle, BugDescription }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {BugTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {BugDescription}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">Edit</Button>
      <Button size="small" color="primary">Close & Remove</Button>
    </CardActions>
  </Card>
);

export default BugCard;