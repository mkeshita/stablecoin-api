const eth = require("./chain/eth/index")

let invalid_coin_error = "Invalid Coin Passed. Supported coins are ABCD, NGNT, USDC and BUSD."

module.exports = {
  coins() {
    return [
      { name: "African Stable Coin", symbol: "ABCD" },
      { name: "Nigerian Naira Token", symbol: "NGNT" },
      { name: "USD Coin", symbol: "USDC" }
    ]
  },

  createAddress(coin) {
    if (coin === "NGNT" || coin === "USDC") return eth.createAddress()
    else
      throw invalid_coin_error;
  },

  balance(address, coin) {
    if (!address)
      throw "Please send an address to query balance for."

    else if (coin === "NGNT" || coin === "USDC") return eth.balance(address, coin)
    else if (address.slice(0, 2) === "0x") return eth.balance(address, coin)

    else
      throw invalid_coin_error;
  },

  transfer(coin, to, amount, privateKey, from, memo) {
    if (coin === "NGNT" || coin === "USDC") return eth.transfer(to, amount, privateKey, coin);
    else
      throw invalid_coin_error;
  }
}
