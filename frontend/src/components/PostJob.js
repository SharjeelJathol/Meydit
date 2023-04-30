import React from 'react'
import { Container, TextField, Button, FormGroup, FormControl, Input, FormHelperText } from '@mui/material';
import Navbar from './Navbar';

export default function PostJob() {
  return (
    <>
    <Navbar/>
    <Container maxWidth='sm'>
        <FormGroup>
          <FormControl className='MuiFormControl-marginNormal'>
            <TextField label="First Name" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField label="Second Name" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField label="Email Address" margin='dense' variant="outlined" />
            <FormHelperText>We'll never share your email with any third-party.</FormHelperText>
          </FormControl>
          <FormControl>
            <TextField label="State" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField label="Postal Code" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField label="Postal Address" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField label="Clothing Type" margin='dense' variant="outlined" />
          </FormControl>
          <FormControl>
          <TextField label="Description" multiline margin='dense' rows={4} placeholder='Description of your clothing requirements'/>
          </FormControl>
          <FormControl>
            <TextField label="Budget (Optional)" margin='dense'/>
          </FormControl>
          <FormControl>
            <FormHelperText>Sample Pictures</FormHelperText>
            <Input margin='dense' placeholder='Files' name='files' type='file'/>
          </FormControl>
          <FormControl margin='normal'></FormControl>
          <FormControl>
            <Button margin='dense' variant="contained">Post</Button>
          </FormControl>
          <FormControl margin='normal'></FormControl>
        </FormGroup>
        </Container>
    </>
  )
}
