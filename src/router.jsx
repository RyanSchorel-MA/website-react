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

import SpinazieRecept from './routes/SpinazieRecept.jsx';
import Schnitzel from './routes/Schnitzel.jsx';
import Kussentjes from './routes/Kussentjes.jsx';
import Shaksuka from './routes/Shaksuka.jsx';
import TurksePizza from './routes/TurksePizza.jsx';
import AardappelAnders from './routes/AardappelAnders.jsx';
import BeefShanghai from './routes/BeefShanghai.jsx';


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
  { path: "/pizza", element: <Pizza /> }, 
  { path: "/patat", element: <Patat /> }, 
  { path: "/kibbeling", element: <Kibbeling /> },  

  { path: "/spinazierecept", element: <SpinazieRecept /> },
  

  { path: "/schnitzel", element: <Schnitzel /> },
  { path: "/kussentjes", element: <Kussentjes /> },
  { path: "/shaksuka", element: <Shaksuka /> },
  { path: "/turksepizza", element: <TurksePizza /> },
  { path: "/aardappelanders", element: <AardappelAnders /> },
  { path: "/beefshanghai", element: <BeefShanghai /> },
  
  { path: ":slug", element: <Contact /> },
  
]);
