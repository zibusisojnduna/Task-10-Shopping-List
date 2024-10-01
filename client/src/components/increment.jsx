function Increment(props){
    const increment = () => {
        props.setCounter(props.counter + 1)

        return(
            <button onClick={increment}>+</button>
        )
    }
}
export default Increment