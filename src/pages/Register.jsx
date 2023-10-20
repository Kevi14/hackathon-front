import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    termsAccepted: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === 'checkbox' ? setFormData({ ...formData, [name]: checked }) : setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        variant="outlined"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Password"
        variant="outlined"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
      />

      <FormControlLabel
        control={
          <Checkbox
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
          />
        }
        label={
          <>
            I accept the <Link href="#">Terms and Conditions</Link>
          </>
        }
      />

      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Register;
