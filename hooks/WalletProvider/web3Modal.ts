import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
};

let web3Modal: Web3Modal;

if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  });
}
export default web3Modal;
