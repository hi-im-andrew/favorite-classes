import React, {useState} from 'react';
import Class from "../Class/Class";
import "./Home.css";

function Home(props) {

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favoriteClasses.includes(value)) {
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }
        console.log(favoriteClasses);
    }

    return (
        <div>
            <h1>deez nuts</h1>
            <form onSubmit={handleSubmit}>
                <label>Display something here</label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">Add something!</button>
            </form>
            <div>
                {favoriteClasses.map((favClass) =>
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>
        </div>
    )
}

export default Home;