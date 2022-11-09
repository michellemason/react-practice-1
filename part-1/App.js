const App = () => {
    return (
    <div>
        <FirstComponent />
        <NamedComponent name="Michelle" />
        <NamedComponent />
    </div>
)}

ReactDOM.render(<App />, document.getElementById("root"));