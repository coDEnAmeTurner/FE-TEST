import "../stylesheets/Home/home.css"
import HomeList from "./HomeList"
import HomeDiv from "./HomeDiv"
import HomeAlertList from "./HomeAlertList"

const Home = ()=>{
    return (
        <div className="home">
            <HomeList />
            <HomeDiv />
            <HomeAlertList />
        </div>
    )
}

export default Home