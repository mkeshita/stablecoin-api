import ethers from 'ethers'
import ngnt from '../../coins/ngnt.js'
import usdc from '../../coins/usdc.js'

const provider = ethers.getDefaultProvider()
const ngntContract = new ethers.Contract(ngnt.contractAddress, ngnt.abi, provider)
const usdcContract = new ethers.Contract(usdc.contractAddress, usdc.abi, provider)

export default {
  async balance(address, coin) {
    if (!coin) throw 'Select either NGNT or USDC as your coin to query.'
    let contract = getContract(coin)

    try {
      let res = await contract.balanceOf(address)

      return res.toString()
    } catch (err) {
      console.log(err)
      return err
    }
  }
}

function getContract(coin) {
  if (coin === 'NGNT') return ngntContract
  else if (coin === 'USDC') return usdcContract
  else throw 'Invalid Coin Passed'
}
