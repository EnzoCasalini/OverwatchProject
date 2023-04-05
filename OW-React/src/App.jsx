import './App.css'
import HeroesPage from "./HeroesPage/HeroesPage.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HeaderWrapper from "./HeaderWrapper.jsx";
import PlayerPage from "./PlayersPage/PlayersPage.jsx";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route element={<HeaderWrapper/>}>
                    <Route path="/" element={<div>Test</div>}/>
                    <Route path="/heroes" element={<HeroesPage />}/>
                    <Route path="/maps" element={<div>maps</div>}/>
                    <Route path="/gameModes" element={<div>gameModes</div>}/>
                    <Route path="/profile" element={<PlayerPage/>}/>
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
