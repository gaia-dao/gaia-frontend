import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    // heading: 'Dela Gothic One',
    // body: 'Syne',
  },
  colors: {
    transparent: 'transparent',
    brand: {
      primary: '#1D1D1D',
      secondary: '#FFFFFF',
      light: '#E4E3D8',
      dark: '#1D1D1D',
      tertiary: '#93855B',
      lightBrown: '#BBAD88',
      accentBrown: '#E4E3D8',
    },
  },
  config: {
    initialColorMode: 'dark',
    // useSystemColorMode: true,
  },
});

export function Chakra({ cookies, children }) {
  // b) Pass `colorModeManager` prop
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

// also export a reusable function getServerSideProps
export function getServerSideProps({ req }) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  };
}
