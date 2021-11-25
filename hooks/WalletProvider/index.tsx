import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { Actions, ActionType, StateType } from './types';
import { providers } from 'ethers';
import web3Modal from './web3Modal';

interface IWallet extends StateType {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}
const WalletContext = createContext<IWallet | undefined>(undefined);

const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
  connected: false,
};

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case Actions.SET_WEB3_PROVIDER:
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
        connected: Boolean(action.address),
      };
    case Actions.SET_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    case Actions.SET_CHAIN_ID:
      return {
        ...state,
        chainId: action.chainId,
      };
    case Actions.RESET_WEB3_PROVIDER:
      return initialState;
    default:
      throw new Error();
  }
}

const initializeWalletStore = (): IWallet => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { provider } = state;

  const connect = useCallback(async () => {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect();

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider);

    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();

    const network = await web3Provider.getNetwork();

    dispatch({
      type: Actions.SET_WEB3_PROVIDER,
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    });
  }, []);

  const disconnect = useCallback(async () => {
    web3Modal.clearCachedProvider();
    if (provider?.disconnect && typeof provider.disconnect === 'function') {
      await provider.disconnect();
    }
    dispatch({
      type: Actions.RESET_WEB3_PROVIDER,
    });
  }, [provider]);

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts);
        dispatch({
          type: Actions.SET_ADDRESS,
          address: accounts[0],
        });
      };

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload();
      };

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error);
        disconnect();
      };

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged);
          provider.removeListener('chainChanged', handleChainChanged);
          provider.removeListener('disconnect', handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);
  return { ...state, connect, disconnect };
};

export const WalletProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const value = initializeWalletStore();
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};

export const useWalletProvider = (): IWallet => {
  const globalStore = useContext(WalletContext);
  if (!globalStore) {
    throw new Error(
      'useWalletProvider init error, you may have tried to use context outside of a provider'
    );
  }
  return globalStore;
};
