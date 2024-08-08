# Handling multiple input filed with controlled component 

const MyComponent = () => { 
    const [name,setname] = useState("");
    const [pswd,setPswd] = useState("")
    function handleChange(e){
        
        if(e.target.name == "firstname" ) {
            const cpaName = (e.target.value).toUpperCase();
            setname(cpaName);
        }
        else{
            setPswd(e.target.value)
        }
    }
    
   
    return ( 
        <>
            <form>
            <label >First name:</label><br/>
            <input type="text" name='firstname' value={name} onChange={handleChange} /><br />
            <label >Password:</label><br/>
            <input type='text' name='password' value={pswd} onChange={handleChange} ></input>
            </form>

            </>

        
    )
}

export default MyComponent;
