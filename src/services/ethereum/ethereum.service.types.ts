type NewBlockCallback = (block: any) => void;

export type InitParams = {
  newBlockCallback: NewBlockCallback;
};
