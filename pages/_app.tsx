import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { WalletProvider } from '../hooks/WalletProvider';
import { Chakra } from '../components/Chakra';

function GaiaApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}
export default GaiaApp;

export { getServerSideProps } from '../components/Chakra';
