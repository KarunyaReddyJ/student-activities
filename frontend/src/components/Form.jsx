// components/Form.js
import  { useState } from 'react';
import { Box, Button, Card, CardContent,  Typography } from '@mui/material';
import InputField from './InputField';


const Form = ({ fields, onSubmit, title, buttonText }) => {
  const [formData, setFormData] = useState(() => 
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Basic validation: Check for empty fields
    fields.forEach((field) => {
      if (!formData[field.name]) {
        validationErrors[field.name] = `${field.label} is required`;
      }
    });

    // Custom validation example for password matching
    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData); // Trigger the submit callback
    }
  };

  return (
    <Box container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Card elevation={3} style={{ padding: '2rem', maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                error={errors[field.name]}
                helperText={errors[field.name]}
              />
            ))}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ marginTop: '1rem' }}
            >
              {buttonText}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Form;