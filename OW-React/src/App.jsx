import './App.css'
import HeroesPage from "./HeroesPage/HeroesPage.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HeaderWrapper from "./HeaderWrapper.jsx";
import PlayerPage from "./PlayersPage/PlayersPage.jsx";
import HeroesDetailsPage from "./HeroesDetailsPage/HeroesDetailsPage.jsx";
import languageContext from "./languageContext.jsx";
import {useState} from "react";

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
                    <Route path="/maps" element={<div>maps</div>}/>
                    <Route path="/gameModes" element={<div>gameModes</div>}/>
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
