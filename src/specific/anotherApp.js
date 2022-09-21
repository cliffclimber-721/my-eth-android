import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import "./anotherApp.css";


function anotherApp(){
    const [walletAddr, setWalletAddr] = useState("");
    async function reqAccount() {
        //const url = "https://metamask.app.link/dapp/eth-android";
        //window.location.href = url;

        if (window.ethereum) {
          try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
        });
        setWalletAddr(accounts[0]);
        } catch(err){
            console.log(err);
        } 
        } else {
            alert("Metamask not detected!");
        }
    }
    // ethers.js -> findings
    async function connectWallet() {
        if(typeof window.ethereum !== "undefined") {
            await reqAccount();
            const provider = new ethers.providers.Web3Provider(window.ethereum); 
        }
    }

// React
    return (
        <div className="anotherApp">
            <button className="metamask" onClick={() => {reqAccount(); connectWallet()}}>
                Connect to Metamask
            </button>
            <h4>Wallet Address: {walletAddr}</h4>
        </div>
    )
    
}

export default anotherApp;