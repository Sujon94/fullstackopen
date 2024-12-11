import axios from 'axios';
import {useState, useEffect} from 'react';

const App = () => {
    const [value, setValue] = useState('');
    const [rates, setRates] = useState({});
    const [currency, setCurrency] = useState(null);

    useEffect(() =>{
        console.log('effect run, currency is now', currency);

        //skip if currency is not defined
        if (currency){
            console.log('fetching exchange rates...');
            axios
                .get(`https://open.er-api.com/v6/latest/${currency}`)
                .then(res => {
                    setRates(res.data.rates);
                })
        }
    }, [currency]);

    const handleChange = (event) =>{
        setValue(event.target.value);
    };

    const onSearch = (event) => {
        event.preventDefault();
        setCurrency(value);
        /* API request can also be performed inside here
        axios
            .get(`https://open.er-api.com/v6/latest/${value}`)
            .then(response => {
                setRates(response.data.rates)
            })*/
    };

    return (
        <div>
            <form onSubmit={onSearch}>
                currency: <input value={value} onChange={handleChange}/>
                <button type="submit">exchange rate</button>
            </form>
            <pre>
          {JSON.stringify(rates, null, 2)}
        </pre>
        </div>
    );

}


export default App;
