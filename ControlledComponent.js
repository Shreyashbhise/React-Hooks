

const MyComponent = () => { 
    const [name,setname] = useState("");
    const [pswd,setPswd] = useState("")
    function handleChange(e) {
        console.log(e.target.value)
        const capName = (e.target.value).toUpperCase();
        setname(e.target.value)
    }
    function handlePassword(e) {
        console.log(e.target.value)
        setPswd(e.target.value)
    }
   
    return ( 
        <>
            <form>
            <label >First name:</label><br/>
            <input type="text"  value={name} onChange={handleChange} /><br />
            <label >Password:</label><br/>
            <input type='text' value={pswd} onChange={handlePassword} ></input>
            </form>

            </>

        
    )
}

export default MyComponent;
