import React from 'react';
import ProjectCard from '../ProjectCard/projectCard';
import { Container, Typography } from '@mui/material';
import Recipe from '../../assets/Recipe.png';
import PWA from '../../assets/PAWtextEditor.png';
import eventcenter from '../../assets/eventcenter.png';


const projects = [
    {
        title: 'Event Center',
        description: 'React Built Site',
        items: ['React', 'MongoDB', 'Tailwinds', 'Vite bundling package'],
        imageUrl: eventcenter,
        deployLink: 'https://eventcenter.onrender.com/',
        githubLink: 'https://github.com/PamWillis/EventCenter'
    },
    {
        title: 'Recipe Box',
        description: 'Interactive Full-Stack Group Project',
        items: ['NodeJS', 'Handlebars', 'Bootstrap', 'MySQL and Sequilize ORM for database'],
        imageUrl: Recipe,
        deployLink: 'https://thawing-sea-00451-374dc9c94032.herokuapp.com/',
        githubLink: 'https://github.com/PamWillis/RecipeProject'
    },
    {
        title: 'Project Web Application',
        description: 'Text Editor',
        items: ['PWA', 'IndexedDB', 'Idb', 'Webpack bundling package'],
        imageUrl: PWA,
        deployLink: 'https://progressivewebapp-display.onrender.com/',
        githubLink: 'https://github.com/PamWillis/ProgressiveWebApp'
    }

    // Add more projects as needed
];

const ProjectList = () => {
    return (
        <section id='projectList'>
            <Container
                sx={{
                    margin: '0 auto',
                    minHeight: 'calc(100vh - 4rem)',
                    width: '100vw',
                    maxWidth: '60rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '0 1rem',
                }}
            >
                <Typography
                    variant="h1"
                    align="center"
                    sx={{
                        display: 'block',
                        fontSize: '3em',
                        margin: '4rem 0 1rem',
                        fontWeight: 'bold',
                        letterSpacing: '0.01em',
                        '@media (max-width: 600px)': {
                            fontSize: '2rem',
                            margin: '1.6rem 0 .3rem',
                        },
                    }}
                >
                    Portfolio
                </Typography>
                <Typography
                    align="center"
                    sx={{
                        display: 'block',
                        fontSize: '1.1em',
                        fontWeight: '300',
                        maxWidth: '45rem',
                        '@media (max-width: 780px)': {
                            fontSize: '1.1rem',
                            maxWidth: '35rem',
                        },
                    }}
                >
                    I am excited to bring my skills and graphic experience to help businesses achieve their goals and create a strong online presence.
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: '1rem'
                    }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project}
                            style={{
                                maxWidth: '300px',
                                margin: '3rem', // Adjust the margin as needed
                            }}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ProjectList;