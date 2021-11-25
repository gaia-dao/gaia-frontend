import { Box, Text } from '@chakra-ui/layout';
import { CSSObject } from '@chakra-ui/system';
import React, { FC } from 'react';

interface ICard {
  heading: string;
  subheading: string;
  style?: CSSObject;
}

export const Card: FC<ICard> = ({ heading, subheading, style }) => {
  return (
    <Box
      sx={{
        boxShadow: '2xl',
        backgroundColor: 'brand.primary',
        width: '100%',
        height: '100%',
        px: '12',
        borderRadius: '20px',
        py: '8',
        wordWrap: 'break-word',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        ...style,
      }}
    >
      <Text fontSize="4xl">{heading}</Text>
      <Text fontSize="l">{subheading}</Text>
    </Box>
  );
};
