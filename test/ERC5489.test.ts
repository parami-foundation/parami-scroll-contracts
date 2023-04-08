import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract} from "ethers"

describe("ERC5489", function () {
    let account1: any, account2: any, account3: any;
    let erc5489:Contract;
    let ad3:Contract;
    let auctionAndMicroPayment:Contract;

    beforeEach(async function () {
        [account1, account2, account3] = await ethers.getSigners();

        const ERC5489 = await ethers.getContractFactory("ERC5489");
        erc5489 = await ERC5489.deploy();
        await erc5489.deployed();

        const AD3 = await ethers.getContractFactory("AD3");
        ad3 = await AD3.deploy();
        await ad3.deployed();

        const AuctionAndMicroPayment = await ethers.getContractFactory("AuctionAndMicroPayment");
        auctionAndMicroPayment = await AuctionAndMicroPayment.deploy();
        await auctionAndMicroPayment.deployed();
    })

    describe("Minting", () => {
        it("mint function", async function () {
            await erc5489.connect(account1).mint("aaaa");
            expect(await erc5489.ownerOf(1)).to.equal(account1.address);
        })
    })

    describe("Approve", () => {
        it('approve function', async function () {
            await erc5489.connect(account1).setApprovalForAll(auctionAndMicroPayment.address, true);
            expect(await erc5489.isApprovedForAll(account1.address, auctionAndMicroPayment.address)).to.equal(true);
        });
    })
})
