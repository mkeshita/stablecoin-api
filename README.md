# stablecoin-api

Node module for checking stablecoin balances. Fork of [stablecoin-api](https://github.com/richwednesday/stablecoin-api)

## Install

```
$ npm install talentlessguy/stablecoin-api
```

## API

#### Balance

```js
import stablecoin from 'stablecoin-api'

const balance = await stablecoin.balance('bnb13lrs4k2utmlp46v7m72mt738n9yqs3cx56yvgz', 'ABCD')
// balance => 0.50000000
```

#### Dependencies

- [Ethers.js](https://github.com/ethers-io/ethers.js)

#### Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request
