import eth from './chain/eth/index.js'

/**
 *
 * @param {string} address
 * @param {string} coin
 * @param {Record<string, string>} apiKeys
 */
export const balance = (address, coin, apiKeys) => {
  if (!address) throw 'Please send an address to query balance for.'
  else if (coin === 'NGNT' || coin === 'USDC') return eth.balance(address, coin, apiKeys)
  else if (address.slice(0, 2) === '0x') return eth.balance(address, coin, apiKeys)
  else throw new Error('Invalid Coin Passed. Supported coins are NGNT and USDC.')
}
