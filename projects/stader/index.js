const { fetchURL } = require("../helper/utils")
const { addHBarBalance } = require("../helper/hbar")

async function tvl() {
  const res = await fetchURL("https://staderverse.staderlabs.com/tvl")
  return {
    "terra-luna": res.data.totalStakedLuna / 1e6,
    //"terrausd": res.data.totalStakedLunaInUst / 1e6
  }
}

async function hbarTvl(timestamp) {
  return addHBarBalance({ timestamp, address: '0.0.834119' })
}

async function maticTvl() {
  const res = await fetchURL("https://staderverse.staderlabs.com/tvl")
  return {
    "matic-network": res.data.polygon.native
  }
}

async function ftmTvl() {
  const res = await fetchURL("https://staderverse.staderlabs.com/tvl")
  return {
    "fantom": res.data.fantom.native
  }
}

module.exports = {
  timetravel: false,
  methodology: 'We aggregated the luna staked across Stader stake-pools & liquid token and then converted to UST',
  terra: {
    tvl,
  },
  hedera: {
    tvl: hbarTvl,
  },
  polygon: {
    tvl: maticTvl
  },
  fantom: {
    tvl: ftmTvl
  }
}

