import './App.css'
import HeroesPage from "./HeroesPage/HeroesPage.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HeaderWrapper from "./HeaderWrapper.jsx";
import PlayerPage from "./PlayersPage/PlayersPage.jsx";
import HeroesDetailsPage from "./HeroesDetailsPage/HeroesDetailsPage.jsx";
import languageContext from "./languageContext.jsx";
import {useState} from "react";
import MapsPage from "./MapsPage/MapsPage.jsx";
import {createTheme, ThemeProvider} from "@mui/material";

function App() {
    const [language, setLanguage] = useState("en-us");
    const languageList = ["en-us", "fr-fr", "de-de", "es-es", "it-it", "ja-jp", "ko-kr", "pl-pl", "pt-br", "ru-ru", "zh-tw"];

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#f3f4ff',
            },
            secondary: {
                main: '#2B4348',
            }
        },
    });

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route element={<HeaderWrapper/>}>
                    <Route path="/" element={<PlayerPage/>}/>
                    <Route path="/heroes" element={<HeroesPage/>}/>
                    <Route path="/heroes/:heroKey" element={<HeroesDetailsPage/>}/>
                    <Route path="/maps" element={<MapsPage/>}/>
                    <Route path="/gameModes" element={<div>gameModes</div>}/>
                </Route>
            </>
        )
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <languageContext.Provider value={{ language, changeLanguage, languageList }}>
                    <RouterProvider router={router} />
                </languageContext.Provider>
            </ThemeProvider>
        </>
    )
}

export default App