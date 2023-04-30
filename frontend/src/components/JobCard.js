import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { CardMedia, Divider, Grid } from '@mui/material';

export default function JobCard(props) {
  const navigate=useNavigate()
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4" component="div">
                            {props.clothing}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <CardMedia sx={{height:200, width:200}}>
              <img  alt='Samples' src={props.logo}/>

            </CardMedia>
            <Divider variant="middle" />
            <Box sx={{ m: 2 , justifyContent:'space-between'}}>
            <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="body1" component="div">
                        Budget
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="body1" component="div">
                        {props.budget}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider variant="middle" />
      </CardContent>
      <CardActions sx={{justifyContent:'center'}}>
        <Button onClick={()=>{navigate(`/job/${props.id}`)}}>See Details</Button>
      </CardActions>
    </Card>
  );
}