import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Card, CardActionArea, CardContent, Divider, FormControl, FormGroup, Grid, InputAdornment, InputLabel, OutlinedInput, Stack, TextField } from '@mui/material';
import axios from 'axios'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function JobDetails() {
  const theme = useTheme();
  const [details, setDetails]=React.useState()
  const [description, set_description]=React.useState();
  const [quote, set_quote]=React.useState();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps=React.useRef();
  const job=window.location.pathname.split('/')[2]
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  let quotaion=async ()=>{
    let data=new FormData()
    data.append('quote', quote)
    data.append('description', description)
    axios({
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: `/maker/quote/${job}`,
      data
    }).then(res=>{
      console.log(res.data)
    }).catch(error=>console.log(error))
  }
  React.useEffect(()=>{
    axios({
      method: "get",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: `/jobs/${job}`,
    }).then(res=>{
      console.log(res.data)
      setDetails(res.data)
      maxSteps.current=details.samples.length
    }).catch(error=>console.log(error))
  }, [])
  return (
    <>
    <Stack direction='row' sx={{flexWrap:'wrap', justifyContent:'center', mt:4}} spacing={5} useFlexGap={true}>
    <Box sx={{ maxWidth: 500, flexGrow: 1, flexWrap:'wrap' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {details!==undefined?details.samples.map((sample, index) => (
          <div key={sample.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  maxHeight: 500,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={`http://127.0.0.1:3333/jobs/image/${sample.file}`}
                alt={'Sample'}
              />
            ) : null}
          </div>
        )):null}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps.current}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps.current - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>


    <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details?details.job.clothing:null}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details?details.job.description:null}
            </Typography>
          </CardContent>
        </CardActionArea>
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
                    {details?details.job.budget:null}
                    </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="body1" component="div">
                    Status
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="body1" component="div">
                    {details?details.job.status:null}
                    </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="body1" component="div">
                    Quotations
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="body1" component="div">
                    {details?details.job.count:null}
                    </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="body1" component="div">
                    State
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="body1" component="div">
                    {details?details.job.state:null}
                    </Typography>
                </Grid>
              </Grid>
              <FormGroup>
              <FormControl>
                <TextField onChange={(e)=>set_description(e.target.value)} label="Description" multiline margin='dense' rows={4} placeholder='Description of your clothing requirements'/>
              </FormControl>
              <Box sx={{ m: 2 , justifyContent:'space-between'}}>
              <Grid container alignItems="center">
                <Grid item xs>
                  
              <FormControl margin='dense'>
                <InputLabel htmlFor="budget-label">Quote</InputLabel>
                <OutlinedInput
                  onChange={(e)=>set_quote(e.target.value)}
                  id="budget-label"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  label="Quote"
                  />
              </FormControl>
                  </Grid>
                  <Grid>
              <FormControl>
                <Button onClick={quotaion} margin='dense' variant="contained">Quote</Button>
              </FormControl>
                  </Grid>
                  </Grid>
                  </Box>
              </FormGroup>
            </Box>
            </Card>
    </Box>
    </Stack>
    </>
  );
}