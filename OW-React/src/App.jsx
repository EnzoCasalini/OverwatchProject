import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import MapsPage from "./MapsPage/MapsPage.jsx";
import HeaderWrapper from "./HeaderWrapper.jsx";
import PlayerPage from "./PlayersPage/PlayersPage.jsx";
import HeroesPage from "./HeroesPage/HeroesPage.jsx";
// import HeroesDetailsPage from "./HeroesPage/HeroesDetailsPage.jsx";
import languageContext from "./languageContext.jsx";

function HeroesDetailsPage() {
  return null;
}

function App() {
    const [language, setLanguage] = useState("en-us");
    const languageList = ["en-us", "fr-fr", "de-de", "es-es", "it-it", "ja-jp", "ko-kr", "pl-pl", "pt-br", "ru-ru", "zh-tw"];

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }

    const router = createBrowserRouter(

      createRoutesFromElements(
          <>
            <Route element={<HeaderWrapper/>}>
              <Route path="/" element={<PlayerPage/>}/>
              <Route path="/heroes" element={<HeroesPage/>}/>
              <Route path="/heroes/:heroKey" element={<HeroesDetailsPage/>}/>
              <Route path="/maps" element={<MapsPage/>}/>
              {/*<Route path="/maps/:mapKey" element={<MapsDetailsPage/>}/>*/}
              {/*<Route path="/gameModes" element={<div>gameModes</div>}/>*/}
            </Route>
          </>
      )
  );

  return (
      <>
          <languageContext.Provider value={{ language, changeLanguage, languageList }}>
              <RouterProvider router={router} />
          </languageContext.Provider>
      </>
  )
}

export default App
