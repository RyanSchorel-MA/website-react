import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Dashboard from './routes/Dashboard';
import Contact from './routes/Contact';
import Spinazie from "./routes/Spinazie.jsx";
import Wraps from './routes/Wraps.jsx';  
import Andijvie from './routes/Andijvie.jsx';  
import Bami from './routes/Bami.jsx';
import Roti from './routes/Roti.jsx';
import Durum from './routes/Durum.jsx';
import Pizza from './routes/Pizza.jsx';
import Patat from './routes/Patat.jsx';

import Kibbeling from './routes/Kibbeling.jsx';

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/contact", element: <Contact /> },
  { path: "/spinazie", element: <Spinazie /> },
  { path: "/wraps", element: <Wraps /> },  
  { path: "/andijvie", element: <Andijvie /> },  
  { path: "/bami", element: <Bami /> },  
  { path: "/roti", element: <Roti /> },  
  { path: "/durum", element: <Durum /> },  
  { path: "/pizza", element: <Pizza/> }, 
  { path: "/patat", element: <Patat/> }, 
  { path: "/kibbeling", element: <Kibbeling/> },  

  { path: ":slug", element: <Contact /> },
]);


