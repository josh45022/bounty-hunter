import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import BountyCard from "./components/BountyCard.js"
import Form from "./components/Form.js"
const axios = require("axios")

function App() {
  const [bounties, setBounties] = useState([])

  const getBounties = () => {
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  const addBounty = (newBounty) => {
    axios.post("/bounties", newBounty)
      .then(res => setBounties(prevBounties => [...prevBounties, res.data]))
      .catch(err => console.log(err))
  }

  const deleteBounty = (bountyId) => {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId)))
      .catch(err => console.log(err))
  }
  const editBounty = (updates, bountyId) => {
    axios.put(`/bounties/${bountyId}`, updates)
      .then(res => setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId? bounty: res.data)))
      .catch(err => console.log(err))
  }
  useEffect(getBounties,[])
  
  return (
    <div className="App">
          <Form 
            submit={addBounty} 
            buttonText={"Add person"}
          />
            {bounties.map(bounty => <BountyCard {...bounty} 
            deleteBounty={deleteBounty} 
            editBounty={editBounty}
            key={Math.random()} 
          />
        )}
    </div>
  );
}

export default App;
