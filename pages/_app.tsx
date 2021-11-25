import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { WalletProvider } from '../hooks/WalletProvider';

const theme = extendTheme({
  fonts: {
    // heading: 'Dela Gothic One',
    // body: 'Syne',
  },
  colors: {
    transparent: 'transparent',
    brand: {
      primary: '#262727',
      secondary: '#FFFFFF',
      tertiary: '#93855B',
      lightBrown: '#BBAD88',
      accentBrown: '#E4E3D8',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
});

// const theme = extendTheme({ colors, config })

function GaiaApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </ChakraProvider>
  );
}
export default GaiaApp;
