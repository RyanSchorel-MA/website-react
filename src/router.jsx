import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import Dashboard from './routes/Dashboard';
import Contact from './routes/Contact';


/* Dit is geconnect met de navbar*/
export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/contact", element: <Contact /> },
  { path: ":slug", element: <Contact /> },

]);