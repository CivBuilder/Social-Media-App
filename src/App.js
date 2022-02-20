import React, {useState} from "react";
import Tweet from "./tweet";

function App(){

  // const [likesGoyle, setLikesGoyles]= useState(0);
  
  // const incrementGoyle = () => {
  //   setLikesGoyles(likesGoyle + 1);  // in use of like button
  // }

  const [users, setUsers] = useState([
    { name: "goyle", message:"here's a hidden doc I found", likes:"likes: 4" },
    { name: "Ian", message:"checkout this tiktok tinyurl.malware", likes:"likes: 12" },
    { name: "Snowden", message:"in russia", likes:"likes: 134" },
    { name: "rubik", message:"what do the numbers mean?", likes:"likes: 0" },
    { name: "Vonnegut", message:"If this isn't nice, I don't know what is.", likes:"likes: 789" }
  ]);
  

  return (
    <div className = "app">
      <h1>hidden truth</h1>
      {/* <button onClick={incrementGoyle}>like</button> */}
      {users.map(user => (  // traverse array of users
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  );
}

export default App;