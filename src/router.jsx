import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Dashboard from './routes/Dashboard';
import Contact from './routes/Contact';
import Spinazie from "./routes/Spinazie.jsx";
import Wraps from './routes/Wraps.jsx';  
import Andijvie from './routes/Andijvie.jsx';  
import Bami from './routes/Bami.jsx';




export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/contact", element: <Contact /> },
  { path: "/spinazie", element: <Spinazie /> },
  { path: "/wraps", element: <Wraps /> },  
  { path: "/andijvie", element: <Andijvie /> },  
  { path: "/bami", element: <Bami /> },  

  { path: ":slug", element: <Contact /> },
]);
