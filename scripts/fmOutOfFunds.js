
const Xdc3 = require("xdc3");

var rpc = 'https://erpc.xinfin.network'
var oracle = 

async function main(oracle) {
    const xdc3 = new Xdc3(
        new Xdc3.providers.HttpProvider(rpc)
    );

    const deployed_private_key = process.env.PRIVATEKEY
}