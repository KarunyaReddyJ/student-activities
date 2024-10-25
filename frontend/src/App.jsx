import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
function App() {
  const [login, setLogin] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: login ? <div>hello</div> : <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
