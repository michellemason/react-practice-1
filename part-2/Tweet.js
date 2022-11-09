const Tweet = (props) => {
    return (
        <div>
            <h3>Username: {props.username}</h3>
            <p>Name: {props.name}</p>
            <p>Date: {props.date}</p>
            <p>Message: {props.message}</p>
        </div>
    )
}




// Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

// Create an App component that renders at least three tweets.