import React, { useEffect, useRef, useState } from 'react'
import Web3 from 'web3';
var provider = new Web3.providers.HttpProvider("http://localhost:7545");
var contract = require("@truffle/contract");
const contractJson = require('./nft/build/contracts/X07Kiddos.json')

const App = () => {
  const contractInstance = useRef(null)
  const [acc, setAcc] = useState(null)
  useEffect(async () => {
    setAcc(await window.ethereum.enable())
    var MyContract = contract(contractJson)
    MyContract.setProvider(provider);
    contractInstance.current = await MyContract.deployed()
    console.log("contract", contractInstance.current)
  }, [])
  async function mint() {
    console.log('instance', contractInstance.current)
    var balance = await contractInstance.current.mint(acc[0], 1, { from: acc[0] })
    console.log('balance', balance)
  }
  async function disableWL() {
    var res = await contractInstance.current.activateWhitelist(false, { from: acc[0] })
    console.log('result', res)
  }
  return (
    <div>
      <button onClick={e => disableWL()}  > Disable whitelist Only</button>
      <button onClick={e => mint()} >mint</button>
    </div>
  )
}

export default App
