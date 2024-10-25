import Form from '../components/Form';
import axios from 'axios'
const SignUp = () => {
  const signupDetails = [
    { label: 'UserId', name: 'username', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
    { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
  ];

  const handleSignup = async (formData) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_ROOT}/auth/signup`, formData);
      console.log('Signup Success:', response);
    } catch (error) {
      console.error('Signup Failed:', error.response ? error.response.data : error.message);
    }
  };

  return <Form fields={signupDetails} onSubmit={handleSignup} title="SignUp" buttonText="SignUp" />;
};

export default SignUp;
