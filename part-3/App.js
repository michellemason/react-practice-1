const App = () => {
    return (
        <div>
            <Person 
                name="michelle"
                age={28}
                hobbies={["cooking", "hiking", "eating"]}
            />
            <Person 
                name="jake"
                age={30}
                hobbies={["math", "reddit", "party"]}
            />
            <Person 
                name="walnut masinko"
                age={2}
                hobbies={["sleeping", "walkies", "schmakos"]}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));