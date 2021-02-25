import './App.scss';
//esto se importa de un paquete exterior que sirve para manejar las rutas y redirecccionamientos
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
//importaciones de los componentes que se renderizan
import CRUDBasic from './pages/CRUDBasic';
import Calculator from './pages/Calculator';

function App() {
  return (
    <div className="App">
      {/* para que las rutas funcionen se envuelven en el Router */}
     <Router>
       <div>
         {/* Barra de navegacion que contiene las opciones para navegar dentro de la app */}
         <nav className="navbar">
           <ul>
             <li>
              {/* Para ridereccionar a una ruta usamos el Link y dentro de to="" ponemos el numbre de la ruta 
              a la culpa apuntaremos */}
               <Link to='/crud'>Basic Crud</Link>
             </li>
             <li>
             <Link to='/calculator'>Calculator</Link>
             </li>
           </ul>
         </nav>
       </div>
       {/* El Switch evaluara cada una de las rutas y renderizara el componente que se especifique */}
     <Switch>
      {/* Con el Route definimos el nombre de la ruta y dentro el componente que renderiza*/}
       <Route path='/crud'>
        <CRUDBasic />
       </Route>
       <Route path='/calculator'>
         <Calculator/>
       </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
