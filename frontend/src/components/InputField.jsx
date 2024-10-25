import { TextField } from '@mui/material';

// eslint-disable-next-line react/prop-types
const InputField = ({ label, name, value, onChange, type = 'text', error, helperText }) => (
  <TextField
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    type={type}
    fullWidth
    margin="normal"
    error={!!error}
    helperText={helperText}
  />
);

export default InputField;
