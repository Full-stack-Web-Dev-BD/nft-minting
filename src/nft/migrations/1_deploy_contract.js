const X07Kiddos = artifacts.require("X07Kiddos");

module.exports = async function (deployer, accounts) {
  console.log("===================Account is : ", accounts)
  deployer.deploy(
    X07Kiddos,
    "X07Kiddos NFT",
    "X07Kiddos",
    "baseuri",
    "0x910dac733e0e8717E36345Ad005d0Be614486168"
  );
};
