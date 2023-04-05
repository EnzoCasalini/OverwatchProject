import './App.css'
import HeroesPage from "./HeroesPage/HeroesPage.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HeaderWrapper from "./HeaderWrapper.jsx";
import PlayerPage from "./PlayersPage/PlayersPage.jsx";
import HeroesDetailsPage from "./HeroesDetailsPage/HeroesDetailsPage.jsx";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route element={<HeaderWrapper/>}>
                    <Route path="/" element={<PlayerPage/>}/>
                    <Route path="/heroes" element={<HeroesPage/>}/>
                    <Route path="/heroes/:heroKey" element={<HeroesDetailsPage/>}/>
                    <Route path="/maps" element={<div>maps</div>}/>
                    <Route path="/gameModes" element={<div>gameModes</div>}/>
                </Route>
            </>
        )
    );

  return (
      <>
          <RouterProvider router={router} />
      </>
  )
}

export default App
