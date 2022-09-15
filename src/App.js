import "./App.css";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { redirect } from "@remix-run/router";
//import { Link } from "react-router-dom"

function App() {
  const [web3, setWeb3] = useState();
  const [accountMetamask, setAccountMetamask] = useState("");
  const connectApp = () =>{
     webToApp();
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
      } catch (err) {
          console.log(err);
      }
    }
  }, []);

  const connectMetamask = async () => {
  let accountsForMeta = await window.ethereum.request({
     method: "eth_requestAccounts",
  });
     setAccountMetamask(accountsForMeta[0]);
  };

  function webToApp() {
    const url = "https://metamask.app.link/dapp/eth-android";
    window.location.href = url;
  };

  // HTML5
  return (
      <div className="App">
        <button className="metaConnect" onClick={() => { connectApp(); connectMetamask()}}>
          Connect with Metamask
        </button>
        <div className="userInfo">Metamask: { accountMetamask }</div>
      </div>
  );
}

export default App;
