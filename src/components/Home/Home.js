import React, {useState} from 'react';
import ClassGraphQL from "../Class/ClassGraphQL";
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
                <label>Add a favorite class here: </label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">Add class!</button>
            </form>
            <div>
                {favoriteClasses.map((favClass) =>
                    <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>
                )}
            </div>
        </div>
    )
}

export default Home;