import { ethers } from "ethers";

export default async function connectWallet() {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("請先安裝 MetaMask");
      return;
    }

    // Change network to ropsten
    await ethereum.enable();
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${Number(80001).toString(16)}` }],
    });

    console.log("Connected", accounts[0]);
    localStorage.setItem("walletAddress", accounts[0]);
  } catch (error) {
    console.log(error);
  }
}
