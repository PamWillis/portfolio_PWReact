import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Button, Typography, List, ListItem } from '@mui/material';

const ProjectCard = ({ title, description, items, imageUrl, link }) => {
  return (
    <Card style={{ 
      marginBottom: '1.5rem',
      maxWidth: '300px',
      margin: '.25rem',
       }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          style={{ width: '100%' }}
        />
        <Button variant="contained" color="primary">
          View Project
        </Button>
      </a>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <div>
          <List>
            {items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </div>
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;