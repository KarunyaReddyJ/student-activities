import Form from '../components/Form';
import axios from 'axios'

const Login = () => {
  const loginFields = [
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
  ];

  const handleLogin =async (formData) => {
    try {
      const response = await axios.post(`localhost:5000/auth/login`, formData);
      console.log('Login Success:', response);
    } catch (error) {
      console.error('Login Failed:', error.response ? error.response.data : error.message);
    }
  };

  return <Form fields={loginFields} onSubmit={handleLogin} title="Login" buttonText="Login" />;
};

export default Login;
