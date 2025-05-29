import "../stylesheets/Home/home.css"
import HomeAlertList from "./HomeAlertList";
import { useState } from "react";
import HomeAlertListNoMemo from "./HomeAlertListNoMemo";
import Surrounder from "./Surrounder";

const Home = ()=>{
    console.log("Home component rendered");

    const [str, setStr ] = useState("")

    return (
        <div className="home">
            <Surrounder strState={[str,setStr]}/>
            {/* <HomeAlertList/>
            <HomeAlertListNoMemo/> */}
        </div>
    )
}

export default Home