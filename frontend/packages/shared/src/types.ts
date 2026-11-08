export type CallbackFunction = (...args: any[]) => void;

export type SimpleObject = {
  [key: string]: any;
};

export type ConvertedArrayToObject = {
  code: string;
  value: any;
}[];
