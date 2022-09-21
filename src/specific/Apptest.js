import "./App.css";
import Web3 from "web3";

const androidMetamask = "https://metamask.app.link/dapp/eth-android";
const web3 = new Web3(androidMetamask);

function appForMetamask() {
    if (typeof window.ethereum !== "undefined") {
        try {
            const web = new Web3(window.ethereum);
            
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}