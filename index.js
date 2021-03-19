import eth from './chain/eth/index.js'

export const balance = (address, coin) => {
  if (!address) throw 'Please send an address to query balance for.'
  else if (coin === 'NGNT' || coin === 'USDC') return eth.balance(address, coin)
  else if (address.slice(0, 2) === '0x') return eth.balance(address, coin)
  else throw new Error('Invalid Coin Passed. Supported coins are NGNT and USDC.')
}
