function Systemcard({ data}) {
    return (
        <div
            style={{
                marginTop: "1rem",
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                maxWidth: "300px",
            }}
            >
            <h3> System Stats</h3>
            <p> CPU Usage: {data.cpu}% </p>
            <p> Memory Usage: {data.memory}% </p>
            <p> Disk Usage: {data.disk}% </p>
        </div>
    );
}

export default Systemcard;