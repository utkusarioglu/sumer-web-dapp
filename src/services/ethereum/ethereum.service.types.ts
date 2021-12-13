import type { Block } from "_types/block.types";

type NewBlockCallback = (newBlock: Block) => void;

export type InitParams = {
  newBlockCallback: NewBlockCallback;
};
