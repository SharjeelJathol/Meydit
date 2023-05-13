import React from 'react'
import { Container, TextField, Button, FormGroup, FormControl, Input, FormHelperText, Select, InputLabel, MenuItem, InputAdornment, OutlinedInput } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router';

export default function PostJob() {
  const [first_name, set_first_name]=React.useState();
  const [last_name, set_last_name]=React.useState();
  const [phone_number, set_phone_number]=React.useState();
  const [email, set_email]=React.useState();
  const [postal_code, set_postal_code]=React.useState();
  const [state, set_state]=React.useState();
  const [address, set_address]=React.useState();
  const [budget, set_budget]=React.useState();
  const [clothing, set_clothing]=React.useState();
  const [description, set_description]=React.useState();
  const [samples, set_samples]=React.useState();
  const navigate=useNavigate();

  const post= async ()=>{
    let data=new FormData()
    data.append('first_name',first_name);
    data.append('last_name',last_name);
    data.append('phone_number',phone_number);
    data.append('email',email);
    data.append('postal_code',postal_code);
    data.append('state',state);
    data.append('address',address);
    data.append('budget',budget);
    data.append('clothing',clothing);
    data.append('description',description);
    for(let i=0; i<samples.length; i++)
      data.append('samples', samples[i])
    const res=await axios({
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: "/consumer",
      data
    })
    console.log(res)
    if(res.status===200)
      navigate('/')
    }
  return (
    <>
    {/* <Navbar/> */}
    <Container maxWidth='sm'>
        <FormGroup>
          <FormControl className='MuiFormControl-marginNormal'>
            <TextField onChange={(e)=>set_first_name(e.target.value)} label="First Name" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField onChange={(e)=>set_last_name(e.target.value)} label="Second Name" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField onChange={(e)=>set_phone_number(e.target.value)} label="Phone Number" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField onChange={(e)=>set_email(e.target.value)} label="Email Address" margin='dense' variant="outlined" />
            <FormHelperText>We'll never share your email with any third-party.</FormHelperText>
          </FormControl>
          <FormControl>
            <TextField onChange={(e)=>set_state(e.target.value)} label="State" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField onChange={(e)=>set_postal_code(e.target.value)} label="Postal Code" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField onChange={(e)=>set_address(e.target.value)} label="Postal Address" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl margin='dense'>
          <InputLabel>Clothing Type</InputLabel>
          <Select
            // labelId="clothing-label"
            label="Clothing Type" margin='dense' variant="outlined" 
            onChange={(e)=>set_clothing(e.target.value)}
          >
            {/* Clothing Type */}
            <MenuItem value={'Dress'}>Dress</MenuItem>
            <MenuItem value={'Ethnic Wear'}>Ethnic Wear</MenuItem>
            <MenuItem value={'Sari/Blouse'}>Sari/Blouse</MenuItem>
          </Select>
            {/* <TextField onChange={(e)=>set_clothing(e.target.value)} label="Clothing Type" margin='dense' variant="outlined" /> */}
          </FormControl>
          <FormControl>
          <TextField onChange={(e)=>set_description(e.target.value)} label="Description" multiline margin='dense' rows={4} placeholder='Description of your clothing requirements'/>
          </FormControl>
          <FormControl margin='dense'>
            <InputLabel htmlFor="budget-label">Budget (Optional)</InputLabel>
            <OutlinedInput
              onChange={(e)=>set_budget(e.target.value)}
              id="budget-label"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Budget (Optional)"
            />
            {/* <TextField onChange={(e)=>set_budget(e.target.value)} label="Budget (Optional)" margin='dense'/> */}
          </FormControl>
          <FormControl>
            {/* <FormHelperText>Sample Pictures</FormHelperText> */}
            {/* <InputLabel id="samples-label">Clothing Type</InputLabel> */}
            <Input label='Samples' inputProps={{ multiple: true }} onChange={(e)=>{set_samples(e.target.files)}} margin='dense' name='files' type='file'/>
          </FormControl>
          <FormControl margin='normal'></FormControl>
          <FormControl>
            <Button onClick={post} margin='dense' variant="contained">Post</Button>
          </FormControl>
          <FormControl margin='normal'></FormControl>
        </FormGroup>
        </Container>
    </>
  )
}
