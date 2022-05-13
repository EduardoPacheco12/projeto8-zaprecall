import MainScreen from "./MainScreen";
import HomeScreen from "./HomeScreen";
import React from 'react';
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
    //lógica
    const [init, setInit] = React.useState(false);

    //UI
    return (
        <>
            { !init ? <HomeScreen setInit={setInit}/> : <MainScreen />}
        </>  
    );
}