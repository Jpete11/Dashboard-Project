import { useEffect, useState } from "react";
import SystemCard from "./components/SystemCard";

function App() {
    const [systems, setSystems] = useState(null);

    useEffect(() => {
        fetch("http://backend:8000/system")
        .then(res => res.json())
        .then(data => setSystems(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ padding: "2rem", fontfamily: "sans-serif" }}>
            <h1>Personal API Dashboard</h1>
            {systems ? <SystemCard data={systems} /> : <p>Loading systems...</p>}
        </div>
    );
}

export default App;