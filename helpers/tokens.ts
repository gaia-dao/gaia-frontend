import GaiaIcon from '../images/tokens/gaia.svg';
import DaiEIcon from '../images/tokens/dai.png';
import UsdcEIcon from '../images/tokens/usdc.png';
import UsdtEIcon from '../images/tokens/usdt.png';
import WethEIcon from '../images/tokens/weth.png';

export interface IToken {
  name: string;
  address: string;
  img: string;
  isAvax?: boolean;
  decimals: number;
}

const gaia: IToken = {
  name: 'GAIA',
  address: '0x00000...',
  img: GaiaIcon,
  decimals: 18,
};

const weth: IToken = {
  name: 'WETH',
  address: '0x00000...',
  img: WethEIcon,
  decimals: 18,
};

const dai: IToken = {
  name: 'DAI',
  address: '0x00000...',
  img: DaiEIcon,
  decimals: 18,
};

const usdc: IToken = {
  name: 'USDC',
  address: '0x00000...',
  img: UsdcEIcon,
  decimals: 6,
};

const usdt: IToken = {
  name: 'USDT',
  address: '0x00000...',
  img: UsdtEIcon,
  decimals: 6,
};

const Tokens = [gaia, weth, dai, usdc, usdt];

export default Tokens;
