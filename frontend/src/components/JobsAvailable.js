import React from 'react'
import { Autocomplete, Stack, TextField } from '@mui/material'
import JobCard from './JobCard';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import axios from 'axios';

const clothes = [
  { clothing: 'Dress'},
  { clothing: 'Ethnic Wear'},
  { clothing: 'Sari/Blouse'},
]
export default function JobsAvailable() {
  const [jobs, setJobs]=React.useState([]);
  // const [jobsAll, setJobsAll]=React.useState([]);
  // const [filter, setFilter]=React.useState();

  // React.useEffect(()=>{
  //   setJobs(jobsAll)
  // }, [filter])

  React.useEffect(() => {
    axios({
      method: "get",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: "/jobs",
    }).then(result=>{
      console.log(result.data)
      if(result.data.jobs)
        setJobs(result.data.jobs)
      console.log(jobs)
    }).catch(error=>console.log(error))
  }, [])
  
  return (
    <>
    <Stack direction='row' sx={{flexWrap:'wrap', justifyContent:'center'}} spacing={5} useFlexGap={true}>
      {/* <Autocomplete
        sx={{ width: 300 }}
        options={clothes}
        getOptionLabel={(option) => {console.log(option.clothing);  return option.clothing;}}
        renderInput={(params) => (
          <TextField  {...params} label="Cothing Type" margin="normal" />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.clothing, inputValue, { insideWords: true });
          const parts = parse(option.clothing, matches);
          // console.log('Target',option.clothing);
          setFilter('')
          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      /> */}
      {/* <Autocomplete
        sx={{ width: 300 }}
        options={clothes}
        getOptionLabel={(option) => option.clothing}
        renderInput={(params) => (
          <TextField {...params} label="Highlights" margin="normal" />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.clothing, inputValue, { insideWords: true });
          const parts = parse(option.clothing, matches);

          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      /> */}

      </Stack>
        <Stack direction='row' sx={{flexWrap:'wrap', justifyContent:'center'}} spacing={5} useFlexGap={true}>
            {jobs.map((job)=>{
                
                return <JobCard key={job.id} id={job.id} clothing={job.clothing} budget={job.budget} count={job.count} status={job.status} state={job.state} />
            })}
        </Stack>
    </>
  )
}
