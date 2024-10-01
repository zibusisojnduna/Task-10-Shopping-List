function Increment(props){
    const increment = () => {
        props.setCounter(props.counter + 1)

        
    }
    return(
        <button onClick={increment} style={{backgroundColor:"#acb6e5", margin:"1%"}}>+</button>
    )
}
export default Increment