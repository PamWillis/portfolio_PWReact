import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Button, Typography, List, ListItem } from '@mui/material';

const ProjectCard = ({ title, description, items, imageUrl, deployLink, githubLink }) => {
  return (
    <Card style={{ 
      marginBottom: '1.5rem',
      maxWidth: '300px',
      margin: '.25rem',
       }}>
      <a href={deployLink} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          style={{ width: '100%' }}
        />
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
        <div style={{ marginTop: '1rem' }}>
    <Button variant="outlined" color="primary" href={githubLink} target="_blank" rel="noopener noreferrer">
      GitHub
    </Button>
    <Button variant="outlined" color="secondary" href={deployLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem' }}>
      Deployed Site
    </Button>
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
  deployLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectCard;