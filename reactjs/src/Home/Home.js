import "../stylesheets/Home/home.css"
import HomeAlertList from "./HomeAlertList";
import HomeDiv from "./HomeDiv"
import { useState } from "react";

const Home = ()=>{
    console.log("Home component rendered");

    const [str, setStr ] = useState("")

    return (
        <div className="home">
            <HomeDiv str={str} setStr={setStr}/>
            <HomeAlertList/>
        </div>
    )
}

export default Home