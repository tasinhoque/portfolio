import React from 'react'
import {
  Grid,
  Typography,
  CssBaseline,
  makeStyles,
  Box,
  Container,
  Slider,
} from '@material-ui/core'

import classical from './classical.png'
import muiTemplates from './mui-templates.jpg'
import myPic from './myPic.jpg'

import ProjectCard from './ProjectCard'

const skills = [
  { name: 'HTML', percentage: '70' },
  { name: 'CSS', percentage: '40' },
  { name: 'JavaScript', percentage: '90' },
  { name: 'TypeScript', percentage: '40' },
  { name: 'React', percentage: '90' },
  { name: 'Material UI', percentage: '70' },
  { name: 'Node', percentage: '40' },
  { name: 'Express', percentage: '70' },
  { name: 'MongoDB', percentage: '60' },
  { name: 'Git & GitHub', percentage: '60' },
]

const projects = [
  {
    img: classical,
    demo: 'https://classical-music-recommender.vercel.app/',
    code: 'https://github.com/tasinhoque/classical-music-recommender',
    title: 'Classical Music Recommender',
    technology: 'React, YouTube API V3 and Material UI',
    description:
      'This web app suggests random piano or violin pieces. It starts playing the suggested music from YouTube immediately.',
  },
  {
    img: muiTemplates,
    demo: 'https://website-clones.vercel.app/mui-templates',
    code: 'https://github.com/tasinhoque/website-clones',
    title: 'Website Clones',
    technology: 'React, React Router and Material UI',
    description:
      'For now, there is clone of eight Material UI templates. This project was created in order to familiarize myself with basic webpage design.',
  },
]

const useStyles = makeStyles(theme => ({
  profilePic: {
    justifySelf: 'center',
    borderRadius: '50%',
  },
}))

const imgSize = 200

function App() {
  const classes = useStyles()

  return (
    <Container>
      <CssBaseline />
      <Box margin={5}>
        <center>
          <img
            src={myPic}
            height={imgSize}
            width={imgSize}
            alt='profile'
            className={classes.profilePic}
          />
        </center>
        <Box mt={3}>
          <Typography variant='h4' align='center'>
            Hi, I'm Tasin Hoque
          </Typography>
          <Typography align='center' color='textSecondary'>
            I'm a web-development enthusiast. I want to be a freelancer in the
            future.
          </Typography>
        </Box>
      </Box>
      <Box mb={3}>
        <Typography variant='h6'>
          <b>My Skills:</b>
        </Typography>
      </Box>
      {skills.map(skill => (
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item>{skill.name}</Grid>
            <Grid item xs>
              <Slider defaultValue={skill.percentage} disabled />
            </Grid>
            <Grid item>
              <b>{skill.percentage}%</b>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Box mt={10} mb={3}>
        <Typography variant='h6'>
          <b>My Projects:</b>
        </Typography>
      </Box>
      <Grid container justify='space-between' spacing={8}>
        {projects.map(project => (
          <ProjectCard project={project} />
        ))}
      </Grid>
      <Box m={6} />
    </Container>
  )
}

export default App
