import React from 'react'
import { Autocomplete, Stack, TextField } from '@mui/material'
import logo from '.././image.jpeg';
import logo2 from '.././logo.svg';
import JobCard from './JobCard';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

let jobs=[
    {id:'one', clothing:'Blouse', budget:100, sample:logo, quotaions:10},
    {id:'two', clothing:'Blouse', budget:100, sample:logo2, quotaions:10},
    {id:'three', clothing:'Blouse', budget:100, sample:logo, quotaions:10},
    {id:'four', clothing:'Blouse', budget:100, sample:logo2, quotaions:10},
    {id:'five', clothing:'Blouse', budget:100, sample:logo2, quotaions:10},
]

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
]
export default function JobsAvailable() {
  return (
    <>
    <Stack direction='row' sx={{flexWrap:'wrap', justifyContent:'center'}} spacing={5} useFlexGap={true}>
      <Autocomplete
        id="highlights-demo"
        sx={{ width: 300 }}
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="Highlights" margin="normal" />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.title, inputValue, { insideWords: true });
          const parts = parse(option.title, matches);

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
      />
      <Autocomplete
        id="highlights-demo"
        sx={{ width: 300 }}
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="Highlights" margin="normal" />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.title, inputValue, { insideWords: true });
          const parts = parse(option.title, matches);

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
      />

      </Stack>
        <Stack direction='row' sx={{flexWrap:'wrap', justifyContent:'center'}} spacing={5} useFlexGap={true}>
            {jobs.map((job)=>{
                return <JobCard key={job.id} id={job.id} clothing={job.clothing} budget={job.budget} logo={job.sample} quotaions={job.quotaions} />
            })}
        </Stack>
    </>
  )
}
