import './App.css';
import React, {useState, useEffect} from "react";

function App() {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch("/timetable_json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);

                console.log(data);
            });
    }, []);

    return (
        <div id="timetable">
            {typeof data === "undefined" ? (
                <p>Loading ...</p>
            ) : (
                // data.forEach((position) => <p>{position[0]}</p>)
                // <p>{data[0][0]}</p>
                data.map((position, i) =>
                    <p key={i}>{position[0]} {position[1]} {position[2]}</p>)
            )}
        </div>
    );

}

export default App;
