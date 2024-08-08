const Child = (props) => { 
    const [name, setname] = useState();
    function handleChange(e) {
        setname(e.target.value)
    } 
    function handleSubmit(e) {
        e.preventDefault();
        props.getdata(name)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
        </div>
    )
        
}

export default Child;


const Parent = () => {
  function getdata(data) {
    console.log(data)
  }
  return (
      <div> 
        <Child getdata={getdata}/>

      </div>
  )
}

export default Parent;
