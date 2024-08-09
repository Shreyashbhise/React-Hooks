const MyComponent = () => {
    const [add,setAdd] = useState(0);
    const [minus,setMinus] = useState(100)
    const multiplication =  useMemo(function multiply() { 
        console.log("************")
        return add*10;
    },[add])

    return (
        <div className='app'>
            <h1>useMemo Hook</h1>
            {multiplication} <br/>
            <button onClick={()=>setAdd(add + 1)}>Addition</button>
            <span>{add}</span> <br/>

            <button onClick={()=>setMinus(minus - 1)}>Substration</button>
            <span>{minus}</span>
        </div>
    )
}
    


export default MyComponent;
