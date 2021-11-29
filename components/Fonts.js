import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: 'TT Commons';
            src: url('/fonts/tt-commons/tt-commons-normal.otf');
            font-style: normal;
            font-weight: 400;
            font-display: swap;
        }
        @font-face {
            font-family: 'TT Commons';
            src: url('/fonts/tt-commons/tt-commons-medium.otf');
            font-style: medium;
            font-weight: 500;
            font-display: swap;
        }
        @font-face {
            font-family: 'TT Commons';
            src: url('/fonts/tt-commons/tt-commons-bold.otf');
            font-style: bold;
            font-weight: 700;
            font-display: swap;
        }
        @font-face {
            font-family: 'TT Commons';
            src: url('/fonts/tt-commons/tt-commons-black.otf');
            font-style: black;
            font-weight: 900;
            font-display: swap;
        }
      `}
  />
);

export default Fonts;
