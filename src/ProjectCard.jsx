import React from 'react'
import {
  Grid,
  Typography,
  Link,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

const ProjectCard = ({ project }) => {
  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardHeader
          title={<Typography variant='h5'>{project.title}</Typography>}
          action={
            <Link href={project.code}>
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
          }
        />
        <CardActionArea>
          <Link href={project.demo}>
            <img src={project.img} height='auto' width='100%' alt='project' />
          </Link>
        </CardActionArea>
        <CardContent>
          <Typography>
            <b>Technology: </b>
            {project.technology}
          </Typography>
          <Typography>
            <b>Description: </b>
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ProjectCard
