import { Networks } from './blockchain';

const ARBITRUM_MAINNET = {
  DAO_ADDRESS: '0x0000',
  MEMO_ADDRESS: '0x0000',
  TIME_ADDRESS: '0x0000',
  MIM_ADDRESS: '0x0000',
  STAKING_ADDRESS: '0x0000',
  STAKING_HELPER_ADDRESS: '0x0000',
  TIME_BONDING_CALC_ADDRESS: '0x0000',
  TREASURY_ADDRESS: '0x0000',
  ZAPIN_ADDRESS: '0x0000', //"0xb98007C04f475022bE681a890512518052CE6104",
  WMEMO_ADDRESS: '0x0000',
};

export const getAddresses = (networkID: number) => {
  if (networkID === Networks.ARBITRUM) return ARBITRUM_MAINNET;

  throw Error("Network don't support");
};
