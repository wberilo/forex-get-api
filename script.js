const fetch = require('node-fetch')



const grab = async () => {
  const rates = await fetch('https://api.ratesapi.io/api/latest')
  .then((r)=>r.json())
  return rates
}




console.log(grab())
grab().then((r)=>console.log(r))