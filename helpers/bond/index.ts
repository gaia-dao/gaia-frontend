import { Networks } from '../../constants/blockchain';
import { LPBond, CustomLPBond } from './lp-bond';
import { StableBond, CustomBond } from './stable-bond';

import GaiaIcon from '../../assets/tokens/gaia.svg';

import {
  StableBondContract,
  LpBondContract,
  StableReserveContract,
  LpReserveContract,
} from '../../abi';

export const gaia = new StableBond({
  name: 'gaia',
  displayName: 'GAIA',
  bondToken: 'GAIA',
  bondIconSvg: GaiaIcon,
  bondContractABI: StableBondContract,
  reserveContractAbi: StableReserveContract,
  networkAddrs: {
    [Networks.ARBITRUM]: {
      bondAddress: '0x0000000000000000000000000000000000000000',
      reserveAddress: '0x0000000000000000000000000000000000000000',
    },
  },
  tokensInStrategy: '0000000000000000000000000000000000000000',
});

export const gaiaDai = new CustomLPBond({
  name: 'gaia_dai',
  displayName: 'GAIA/DAI',
  bondToken: 'ARBITRUM',
  bondIconSvg: GaiaIcon,
  bondContractABI: LpBondContract,
  reserveContractAbi: LpReserveContract,
  networkAddrs: {
    [Networks.ARBITRUM]: {
      bondAddress: '0x0000000000000000000000000000000000000000',
      reserveAddress: '0x0000000000000000000000000000000000000000',
    },
  },
  lpUrl: 'https://uniswap.org/lp/gaia-dai',
});

const bonds = [gaia, gaiaDai];

export default bonds;
