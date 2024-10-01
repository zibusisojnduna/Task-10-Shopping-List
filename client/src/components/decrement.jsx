function Decrement(props){
    const decrement = () => {
        props.setCounter(props.counter - 1)
    }

    return(
        <button onClick={decrement}>-</button>
    )
}
export default Decrement