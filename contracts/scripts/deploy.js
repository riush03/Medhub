
const hre = require("hardhat");

async function main() {

   const medHub = await hre.ethers.getContractFactory("Medhub");
   const medHubContract = await medHub.deploy();
    console.log("Medhub deployed to address: ", medHubContract.target);

    if (hre.network.name === "hardhat") {
        return;
    }
    console.info("Waiting For Explorer to Sync Contract (10s)...")
    await wait(10)

    try {
        await hre.run("verify:verify", {
            address: medHubContract.target,
            contract: "contracts/Medhub.sol:Medhub",
            constructorArguments: [],
        });
    } catch (error) {
        console.log("Verification Failed.: ", error);
    }

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function wait(timeInSeconds) {
    await new Promise((r) => setTimeout(r, timeInSeconds * 1000));
}
