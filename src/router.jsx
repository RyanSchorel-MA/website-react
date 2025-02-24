import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Dashboard from './routes/Dashboard';
import Contact from './routes/Contact';
import Spinazie from "./routes/Spinazie.jsx";
import Wraps from './routes/Wraps.jsx';  


export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/contact", element: <Contact /> },
  { path: "/spinazie", element: <Spinazie /> },
  { path: "/wraps", element: <Wraps /> },  
  { path: ":slug", element: <Contact /> },
]);
