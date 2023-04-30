import React from 'react'
import { Stack } from '@mui/material'
import logo from '.././image.jpeg';
import logo2 from '.././logo.svg';
import JobCard from './JobCard';
let jobs=[
    {id:'one', clothing:'Blouse', budget:100, sample:logo, quotaions:10},
    {id:'two', clothing:'Blouse', budget:100, sample:logo2, quotaions:10},
    {id:'three', clothing:'Blouse', budget:100, sample:logo, quotaions:10},
    {id:'four', clothing:'Blouse', budget:100, sample:logo2, quotaions:10},
    {id:'five', clothing:'Blouse', budget:100, sample:logo2, quotaions:10},
]
export default function JobsAvailable() {
  return (
    <>
        <Stack direction='row' sx={{flexWrap:'wrap', justifyContent:'center'}} spacing={5} useFlexGap={true}>
            {jobs.map((job)=>{
                return <JobCard key={job.id} id={job.id} clothing={job.clothing} budget={job.budget} logo={job.sample} quotaions={job.quotaions} />
            })}
        </Stack>
    </>
  )
}
