import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  extendTheme,
} from '@chakra-ui/react';

import '@fontsource/inter/variable-full.css'; // This contains ALL variable axes. Font files are larger.
// import '@fontsource/inter/variable-full-italic.css'; // Italic variant.

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'full', // <-- border radius is same for all variants and sizes
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      // borderColor: 'primary.500',
      // color: 'primary.500',
    },
    solid: {
      // bg: 'primary.500',
      // color: 'white',
    },
  },
  // The default size and variant values
  // defaultProps: {
  //   size: 'md',
  //   variant: 'outline',
  // },
};

const theme = extendTheme({
  components: {
    Button,
  },
  fonts: {
    heading: 'InterVariable',
    body: 'InterVariable',
  },
  colors: {
    transparent: 'transparent',
    primary: {
      50: '#e6ffe0',
      100: '#c4f9b6',
      200: '#a0f389',
      300: '#7bee5c',
      400: '#57ea2f',
      500: '#3ed015',
      600: '#2ea20e',
      700: '#1f7407',
      800: '#104602',
      900: '#001900',
    },
    gray: {
      50: '#f8f0f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#120b0d',
    },
    brand: {
      primary: '#3DCE15',
      // secondary: '#FFFFFF',
      // light: '#E4E3D8',
      // dark: '#1D1D1D',
      // tertiary: '#93855B',
      // lightBrown: '#BBAD88',
      // accentBrown: '#E4E3D8',
      black: '#222222',
      green: '#3DCE15',
      white: '#FFFFFF',
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
