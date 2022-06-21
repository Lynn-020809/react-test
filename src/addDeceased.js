import {Container, CssBaseline, Grid, Typography} from '@mui/material';


import * as React from 'react';
import {useRef, useState} from 'react';
import axios from 'axios'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

import {SERVER_URL} from './App.js'

const SEX_ITEMS = ['Male', 'Female']
const HAIR_COLOR_ITEMS = ['Black', 'Blonde', 'Brown', 'Red']
const HAIR_LENGTH_ITEMS = ['Long', 'Medium', 'Short']
const SKIN_COLOR_ITEMS = ['Dark', 'Medium', 'Light']

const Input = styled('input')({
  display: 'none',
});


const theme = createTheme();


function AddDeceased(){
  const [field, setField] = useState({
    user_id: 1,
    name: '',
    date_of_birth: '',
    gender: '',
    date_found: '',
    hair_color: '',
    hair_length: '',
    skin_color: '',
    location: '',
    description: '',
    image_ids: []
  })
  const fileRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(field)
    console.log(fileRef.current)
    axios.post(SERVER_URL + '/deceased_posts', field)
      .then(r => console.log(r))
      .catch(r => console.log(r))
  }

  function handleFieldChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    setField({...field, [name]: value})
  }

  function handleImageUpload(e) {
    const uploadOne = file => {
      const formData = new FormData()
      formData.append('file', file)
      axios.post(SERVER_URL + '/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(r => {
        const fieldCopy = {...field}
        fieldCopy.image_ids.push(r.data.id)
        setField(fieldCopy)
      }).catch(r => console.log(r))
      console.log(SERVER_URL + '/images')
      console.log(e.target.files)
      console.log(field)
    }

    [...e.target.files].forEach(file => uploadOne(file))
  }

  return (<ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <Box sx={{marginTop: 1, display: 'flex', flexDirection: 'column'}}>
        <div>
          <AccountCircleIcon style={{fontSize: 50, position: 'left'}}/>
        </div>
        <Divider/>
        <div>
          <Typography component="h1" variant="h5" align="center" gutterBottom marginTop={2}>
            Missing Person
          </Typography>
        </div>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 5}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="name" fullWidth id="Name" label="Name" autoFocus onChange={handleFieldChange}
                         value={field.name}/>
            </Grid>
            <Grid item xs={8} sm={8}>
              <TextField fullWidth id="DOB" label="Date of Birth" name="date_of_birth" onChange={handleFieldChange}
                         value={field.date_of_birth}/>
            </Grid>
            <FormSelect required sx={{m: 2, minWidth: 100}} name="gender" fieldId="sex" label="Sex"
                        items={SEX_ITEMS} onChage={handleFieldChange} value={field.gender}/>
            <Grid item xs={12}>
              <TextField required fullWidth id="date" label="Date Found" name="date_found" onChange={handleFieldChange}
                         value={field.date_found}/>
            </Grid>
            <FormSelect fieldId="hairColor" name="hair_color" required sx={{m: 2, minWidth: 200}} label="Hair Color"
                        items={HAIR_COLOR_ITEMS} onChage={handleFieldChange} value={field.hair_color}/>
            <FormSelect fieldId="hairLength" name="hair_length" required sx={{m: 2, minWidth: 200}} label="Hair Length"
                        items={HAIR_LENGTH_ITEMS} onChage={handleFieldChange} value={field.hair_length}/>
            <FormSelect fieldId="skinColor" name="skin_color" required sx={{m: 2, minWidth: 200}} label="Skin Color"
                        items={SKIN_COLOR_ITEMS} onChage={handleFieldChange} value={field.skin_color}/>

            <Grid item xs={7} sm={7}>
              <TextField required fullWidth name="location" label="Location" id="location"/>
            </Grid>
            <Grid item xs={5} sm={5}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                label="Current Location"
                fontSize='12'
              />
            </Grid>
            <Grid item xs={7} sm={7}>
              <TextField required fullWidth name="city" label="City" id="city"/>
            </Grid>
            <Grid item xs={5} sm={5}>
              <TextField required fullWidth name="apt" label="Apt, Bldg, Suitd" id="apt"/>
            </Grid>
          </Grid>
          <Typography component="h5" variant="subtitle1" align="left" gutterBottom marginTop={2}>
            Description *
          </Typography>
          <Grid item xs={12} sm={12} marginBottom={5}>
            <TextField required fullWidth multiline
                       rows={4}
                       name="description"
                       label="Any notable observation to help identify the body"
                       id="description"
                       onChange={handleFieldChange}
                       value={field.description}
            />
          </Grid>
          <Typography component="subtitle1" variant="h8" align="left" marginTop={2}>
            Photos (ID, Body, Location etc)
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            {/*<label htmlFor="contained-button-file">*/}
            {/*  <Input accept="image/*" id="contained-button-file" type="file" multiple inputProps={{ multiple: true }} required ref={fileRef}/>*/}
            {/*  <Button variant="outlined" component="span" required>*/}
            {/*    Upload*/}
            {/*  </Button>*/}
            {/*</label>*/}
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" multiple type="file" ref={fileRef}
                     onChange={handleImageUpload}/>
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera/>
              </IconButton>
            </label>
          </Stack>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
            marginBottom='10'>
            Post
          </Button>

        </Box>
      </Box>

    </Container>
  </ThemeProvider>);


}

function FormSelect(props) {
  return <FormControl sx={props.sx}>
    <InputLabel htmlFor={props.fieldId}>{props.label}</InputLabel>
    <Select id={props.fieldId} label={props.label} defaultValue=''>
      <MenuItem value={-1}>
        <em>None</em>
      </MenuItem>
      {props.items.map((item, index) => <MenuItem value={index} key={index.toString()}>{item}</MenuItem>)}
    </Select>
  </FormControl>
}

export default AddDeceased