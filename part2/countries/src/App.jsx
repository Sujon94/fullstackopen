import {useEffect, useState} from "react";
import axios from "axios";

const App = ()=>{
    const [country, setCountries] = useState({});
    const [value, setValue] = useState('');

    useEffect(()=>{
        if (value){
            axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${value}`)
                .then(res=>{
                    setCountries(res.data.name.common)
                })
        }
    }, [value])

    const handleChange = (event)=>{
        setValue(event.target.value);
    }

    return(
        <div>
            <form>
                find countries<input value={value} onChange={handleChange}/>
            </form>
            {JSON.stringify(country,'',2)}
        </div>
    )
};

export default App;