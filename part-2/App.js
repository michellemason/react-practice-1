const App = () => {
    return (
        <div>
            <Tweet 
                username="mich"
                name="Michelle"
                date="Jan 11 1995"
                message="yooo wassup guys"
            />
            <Tweet 
                username="walnut"
                name="Walnut"
                date="Dec 1 2021"
                message="hi i like shmackos"
            />
            <Tweet 
                username="jake"
                name="Jacob"
                date="Jan 11 1992"
                message="hello there goodbye"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));

