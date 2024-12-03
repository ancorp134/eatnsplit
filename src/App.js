import React from "react";
import "./App.css";

const Friends = [
  {
    Name: "Ankit Tyagi",
    imageUrl: "https://avatar.iran.liara.run/public",
    Balance: 20,
  },
  {
    Name: "Aakash Garg",
    imageUrl: "https://avatar.iran.liara.run/public",
    Balance: 10,
  },
  {
    Name: "Ayush Gwari",
    imageUrl: "https://avatar.iran.liara.run/public",
    Balance: -7,
  },
];

function App() {
  return (
    <>
      <div className="app">
        <FriendList></FriendList>
      </div>
      <div className="app2">
      <FormAddFreind></FormAddFreind>
      <Button>Add Friend</Button>
      </div>
    </>
  );
}

function FriendList() {
  return (
    <div>
      {Friends.map((item, index) => {
        return <Friend key={index} pro={item}></Friend>;
      })}
    </div>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function Friend(props) {
  const { Name, imageUrl, Balance } = props.pro;
  return (
    <div className="friend">
      <div className="friend-hero">
        <img src={imageUrl}></img>
        <div className="friend-data">
          <p>{Name}</p>
          {Balance > 0 && (
            <p className="green">you get amount Rs.{Math.abs(Balance)}</p>
          )}
          {Balance < 0 && (
            <p className="red">you owe amount Rs.{Math.abs(Balance)}</p>
          )}
          {Balance == 0 && <p>you are all settle up.</p>}
        </div>
      </div>
      <div>
        <Button>Select</Button>
      </div>
    </div>
  );
}

function FormAddFreind() {
  return (
    <div className="form">
      <div className="form-data">
        <div className="form-field">
          <label> 👯 Friend Name:</label>
          <input type="text"></input>
        </div>
          <Button>Submit</Button>
          <Button>Close</Button>
      </div>
    </div>
  );
}

export default App;
