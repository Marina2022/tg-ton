import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const NotesCard = ({note}) => {
  return (
      <Card sx={{}} elevation={3}>
        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }            
            title={note.title}
            subheader={note.category}
        />       
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {note.details}
          </Typography>
        </CardContent>       
      </Card>
  );
};

export default NotesCard