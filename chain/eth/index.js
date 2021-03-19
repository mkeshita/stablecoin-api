import * as ethers from 'ethers'
import ngnt from '../../coins/ngnt.js'
import usdc from '../../coins/usdc.js'

export default {
  async balance(address, coin, apiKeys) {
    const provider = ethers.getDefaultProvider(
      'homestead',
      apiKeys
        ? {
            etherscan: apiKeys.etherscan,
            infura: apiKeys.infura,
            alchemy: apiKeys.alchemy,
            pocket: apiKeys.pocket
          }
        : undefined
    )
    const ngntContract = new ethers.Contract(ngnt.contractAddress, ngnt.abi, provider)
    const usdcContract = new ethers.Contract(usdc.contractAddress, usdc.abi, provider)

    function getContract(coin) {
      if (coin === 'NGNT') return ngntContract
      else if (coin === 'USDC') return usdcContract
      else throw 'Invalid Coin Passed'
    }

    if (!coin) throw 'Select either NGNT or USDC as your coin to query.'
    let contract = getContract(coin)

    let res = await contract.balanceOf(address)

    return res.toString()
  }
}
