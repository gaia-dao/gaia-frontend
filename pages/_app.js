// import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    // heading: 'Dela Gothic One',
    // body: 'Syne',
  },
  colors: {
    transparent: 'transparent',
    // black: '#000',
    // white: '#FAE9D1',
    // whiteAlpha: {
    //   900: '#FAE9D1',
    // },
    // gray: {
    //   700: '#1c1c1c',
    //   800: '#000',
    // },
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
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default GaiaApp;
