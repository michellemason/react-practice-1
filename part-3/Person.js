const Person = (props) => {
    let vote = props.age >= 18 ? "Go vote!" : "Too young to vote.";
    let hobbies = props.hobbies.map(h => 
        (<li>{h}</li>));
    return (
        <div>
            <p>Learn some information about this person.</p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
            </ul>
            <ul>
                Hobbies: 
                {hobbies}
            </ul>
            <p>{vote}</p>
        </div>
    )
}



// let reply;
//     if(props.age < 18) {
//         reply = "Sorry kid, you can't come in."
//     } else if (props.age < 21) {
//         reply = "You can come in, but no drinking."
//     } else {
//         reply = <p>Come in, you CAN drink!
//             <img src="https://media.giphy.com/media/l4Ho093DlYsQeWgSs/giphy.gif" width="50px" />
//         </p>
//     }


//     If the person’s name is longer than 8 characters, only display the first six characters of their name.

// Add a property called hobbies to your Person component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an li.

// Add an App component that renders at least three copies of the Person component on the page.