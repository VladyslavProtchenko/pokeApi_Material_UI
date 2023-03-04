import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/components/Layout';
import Pokemons from './pages/Pokemons';
import Account from './pages/Account';
import Pokemon from './pages/Pokemon';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='pokemons' element={<Pokemons/>}/>
    <Route path='info' element={<Account/>}/>
    <Route path='pokemon' element={<Pokemon/>}/>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;