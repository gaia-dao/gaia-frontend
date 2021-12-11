import { Networks } from './blockchain';

const ARBITRUM_MAINNET = {
  DAO_ADDRESS: '0x0000',
  GAIA_ADDRESS: '0x0000',
  WGAIA_ADDRESS: '0x0000',
  STAKING_ADDRESS: '0x0000',
  STAKING_HELPER_ADDRESS: '0x0000',
  GAIA_BONDING_CALC_ADDRESS: '0x0000',
  TREASURY_ADDRESS: '0x0000',
};

export const getAddresses = (networkID: number) => {
  if (networkID === Networks.ARBITRUM) return ARBITRUM_MAINNET;

  throw Error("Network don't support");
};
