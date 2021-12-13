import { ethers } from "ethers";
import { INFURA_API_KEY } from "_/__config";
import { InitParams } from "./ethereum.service.types";

export class EthereumService {
  private provider: InstanceType<typeof ethers.providers.InfuraProvider>;
  constructor() {
    this.provider = new ethers.providers.InfuraProvider(
      "goerli",
      INFURA_API_KEY
    );
  }

  listen({ newBlockCallback }: InitParams) {
    this.provider.on("block", async (blockNum) => {
      const { hash, parentHash, timestamp, difficulty, transactions } =
        await this.provider.getBlock(blockNum);
      newBlockCallback({
        hash,
        parentHash,
        timestamp,
        difficulty,
        transactionCount: transactions.length,
      });
    });
  }
}

export default new EthereumService();
