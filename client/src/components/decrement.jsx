function Decrement(props){
    const decrement = () => {
        props.setCounter(props.counter - 1)
    }

    return(
        <button onClick={decrement} style={{backgroundColor:"#a8bfe6", margin:"1%"}}>-</button>
    )
}
export default Decrement