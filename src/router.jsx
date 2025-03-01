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
import Nachoschotel from './routes/Nachoschotel.jsx';
import Shaksuka from './routes/Shaksuka.jsx';
import TurksePizza from './routes/TurksePizza.jsx';
import AardappelAnders from './routes/AardappelAnders.jsx';
import BeefShanghai from './routes/BeefShanghai.jsx';
import BeefTonight from './routes/BeefTonight.jsx';
import Macaroni from './routes/Macaroni.jsx';

import WrapsRecept from './routes/WrapsRecept.jsx';
import BamiRecept from './routes/BamiRecept.jsx';



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
  { path: "/schnitzel", element: <Schnitzel /> },
  { path: "/nachoschotel", element: <Nachoschotel /> },
  { path: "/shaksuka", element: <Shaksuka /> },
  { path: "/turksepizza", element: <TurksePizza /> },
  { path: "/aardappelanders", element: <AardappelAnders /> },
  { path: "/beefshanghai", element: <BeefShanghai /> },
  { path: "/beeftonight", element: <BeefTonight /> },
  { path: "/macaroni", element: <Macaroni /> },

  // Hier ga ik alle recepten neer zetten
  { path: "/spinazierecept", element: <SpinazieRecept /> },
  { path: "/wrapsrecept", element: <WrapsRecept /> },
  { path: "/bamirecept", element: <BamiRecept /> },





  
  { path: ":slug", element: <Contact /> },
  
]);

//beef shanhei
//shaksuka
//beef tonight
//Aardappel Anders
//Nachoschotel
//Bami