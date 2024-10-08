import { Link } from "react-router-dom"

function Landing(){
    return(
        <section style={{display:"flex", textAlign:"center" }}>
            <div style={{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                <h1>
                    Welcome to ListIt. Need to get things done, ListIt!
                </h1>

                <button style={{backgroundColor:"#99dae7"}}><Link to={"/login"} style={{color:"black"}}>Login</Link></button>
            </div>

            <div style={{backgroundImage:`url(${require("../assets/List.png")})`}}>
              
            </div>
        </section>
    )
}
export default Landing