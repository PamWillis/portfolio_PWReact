import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Button, Typography, List, ListItem } from '@mui/material';

const ProjectCard = ({ title, description, items, imageUrl, deployLink, githubLink }) => {
  return (
    <Card style={{ 
      marginBottom: '1.5rem',
      maxWidth: '300px',
      margin: '.5rem',
      backgroundColor: 'rgb(50, 50, 50)',
      border: '1px solid rgb(90, 90, 90)'
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
        <Typography variant="h5" component="div" 
        style={{ fontSize: 16, fontWeight: 'bold', lineHeight: 1.2, backgroundColor: 'blue', margin: 0, color: 'white', padding: 6 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary"
        style={{color: 'white', margin: 5}}>
          {description}
        </Typography>
        <div>
          <List
          style={{ color: 'white', lineHeight: 1}}>
            {items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </div>
        <div style={{ marginTop: '.5rem' }}>
    <Button variant="outlined" color="primary" href={githubLink} target="_blank" rel="noopener noreferrer"
    style={{ backgroundColor: 'rgb(40, 40, 40)', color: 'lightBlue' }}>
      GitHub
    </Button>
    <Button variant="outlined" href={deployLink} target="_blank" rel="noopener noreferrer" 
    style={{ backgroundColor: 'rgb(40, 40, 40', color: 'lightBlue', marginLeft: '0.5rem' }}>
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