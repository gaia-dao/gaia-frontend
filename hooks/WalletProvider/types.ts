export type StateType = {
  provider?: any;
  web3Provider?: any;
  address?: string;
  chainId?: number;
  connected: boolean;
};

export const enum Actions {
  SET_WEB3_PROVIDER = 'SET_WEB3_PROVIDER',
  SET_ADDRESS = 'SET_ADDRESS',
  SET_CHAIN_ID = 'SET_CHAIN_ID',
  RESET_WEB3_PROVIDER = 'RESET_WEB3_PROVIDER',
}

export type ActionType =
  | {
      type: Actions.SET_WEB3_PROVIDER;
      provider?: StateType['provider'];
      web3Provider?: StateType['web3Provider'];
      address?: StateType['address'];
      chainId?: StateType['chainId'];
    }
  | {
      type: Actions.SET_ADDRESS;
      address?: StateType['address'];
    }
  | {
      type: Actions.SET_CHAIN_ID;
      chainId?: StateType['chainId'];
    }
  | {
      type: Actions.RESET_WEB3_PROVIDER;
    };
