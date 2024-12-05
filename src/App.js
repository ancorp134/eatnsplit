import React, { useState } from "react";
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

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [showFormAddFriend, setShowFormAddFriend] = useState(false);
  const [friends, setFriends] = useState(Friends);
  const [showSplitExpenseForm,setShowSplitExpenseForm] = useState(false)

  function handleShowFormAddFriend() {
    setShowFormAddFriend((flag) => !flag);
  }

  function handleShowSplitExpenseForm() {
    setShowSplitExpenseForm((flag) => !flag);
  }

  function handleAddFriend(newFriend) {
    console.log(newFriend);
    setFriends((friends) => [...friends, newFriend]);
  }

  return (
    <>
      <div className="main">
        <div>
          <div className="app">
            <FriendList friends={friends}></FriendList>
          </div>
          <div className="app2">
            {showFormAddFriend && (
              <FormAddFreind onAddFriend={handleAddFriend} />
            )}
            <Button onClick={handleShowFormAddFriend}>
              {" "}
              {showFormAddFriend ? "Close" : "Add a Friend"}
            </Button>
          </div>
        </div>

        {showSplitExpenseForm && 
        <div className="app3">
          
          <SplitExpenseForm />
        </div> }
      </div>
    </>
  );
}

function FriendList({ friends }) {
  return (
    <div>
      {friends.map((item, index) => {
        return <Friend key={index} pro={item}></Friend>;
      })}
    </div>
  );
}

function Friend(props) {
  const { Name, imageUrl, Balance } = props.pro;

  return (
    <div className="friend">
      <div className="friend-hero">
        <img src={imageUrl}></img>
        <div className="friend-data">
          <p> {Name}</p>
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
        <Button onClick={onClick}>Select</Button>
      </div>
    </div>
  );
}

function FormAddFreind({ onAddFriend }) {
  const [Name, setName] = useState("");
  console.log(Name);

  function handleFormSubmit(e) {
    e.preventDefault();

    const newFriend = {
      Name,
      imageUrl: "https://avatar.iran.liara.run/public",
      Balance: 0,
    };

    onAddFriend(newFriend);
    setName(" ");
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-data">
        <div className="form-field">
          <label> 👯 Friend Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
        </div>
        <Button>Submit</Button>
      </div>
    </form>
  );
}

function SplitExpenseForm() {
  return (
    <>
      <form className="form">
        <h4> 💰 SPLIT AN EXPENSE</h4>
        <div className="form-data">
        <div className="form-field">
            <label>🪙 Total Expense :</label>
            <input type="text"></input>
          </div>
          <div className="form-field">
            <label>🪙 Your Expense :</label>
            <input type="text"></input>
          </div>
          <div className="form-field">
            <label>🪙 Friend Expense :</label>
            <input type="text"></input>
          </div>
          <Button>SPLIT</Button>
        </div>
      </form>
    </>
  );
}

export default App;
