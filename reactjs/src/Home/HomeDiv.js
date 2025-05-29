const HomeDiv = ({strState})=>{
    const [str, setStr] = strState

    console.log("HomeDiv component rendered");

    return (
        <div className="home-content-div">
            <input type="text" value={str} onChange={(e)=>setStr(e.target.value)}/>
        </div>
    )
}

export default HomeDiv;