function Landing(){
    return(
        <section style={{display:"flex"}}>
            <div>
                <h1>
                    Welcome to ListIt. Need to get things done, ListIt!
                </h1>
            </div>

            <div style={{backgroundImage:`url(${require("../assets/List.png")})`}}>
              
            </div>
        </section>
    )
}
export default Landing