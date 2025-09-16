import { KiteConnect } from "kiteconnect";

const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET
console.log(apiKey, apiSecret);
const requestToken = process.env.REQUEST_TOKEN;
let accessToken = process.env.ACCESS_TOKEN;

const kc = new KiteConnect({ api_key: apiKey });

console.log(kc.getLoginURL());

async function init() {
  try {
    kc.setAccessToken(accessToken);
    await getProfile();
  } catch (err) {
    console.error(err);
  }
}



async function getProfile() {
  try {
    const profile = await kc.placeOrder("regular",{
        exchange: "NSE",
        tradingsymbol: "HDFCBANK",
        transaction_type: "BUY",
        quantity: 1,
        product: "CNC",
        order_type: "MARKET"
    });
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls
init();