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
import RotiRecept from './routes/RotiRecept.jsx';
import DurumRecept from './routes/DurumRecept.jsx';
import NachoschotelRecept from './routes/NachoschotelRecept.jsx';
import ShaksukaRecept from './routes/ShaksukaRecept.jsx';
import TurksePizzaRecept from './routes/TurksePizzaRecept.jsx';
import AardappelAndersRecept from './routes/AardappelAndersReccept.jsx';
import BeefShanghaiRecept from './routes/BeefShanghaiRecept.jsx';
import BeefTonightRecept from './routes/BeefTonightRecept.jsx';

import GeenRecept from './routes/GeenRecept.jsx';


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


  { path: "/geenrecept", element: <GeenRecept /> },
  { path: "/wrapsrecept", element: <WrapsRecept /> },
  { path: "/bamirecept", element: <BamiRecept /> },
  { path: "/rotirecept", element: <RotiRecept /> },
  { path: "/durumrecept", element: <DurumRecept /> },
  { path: "/nachoschotelrecept", element: <NachoschotelRecept /> },
  { path: "/shaksukarecept", element: <ShaksukaRecept /> },
  { path: "/turksepizzarecept", element: <TurksePizzaRecept /> },
  { path: "/aardappelandersrecept", element: <AardappelAndersRecept /> },
  { path: "/beefshanghairecept", element: <BeefShanghaiRecept /> },
  { path: "/beeftonightrecept", element: <BeefTonightRecept /> },
  
  { path: ":slug", element: <Contact /> },
]);
