import { Box, Text } from '@chakra-ui/layout';
import { CSSObject } from '@chakra-ui/system';
import React, { FC } from 'react';

interface ICard {
  heading: string;
  subheading: string;
  sx?: CSSObject;
}

export const Card: FC<ICard> = ({ heading, subheading, sx }) => {
  return (
    <Box
      borderRadius="20px"
      borderColor="brand.white"
      border="2px solid"
      textAlign="start"
      padding="22px 20px 20px 20px"
      width={['100%', null, '295px']}
      mb="10px"
      sx={{ ...sx }}
    >
      <Text fontSize="xs">{heading}</Text>
      <Text fontSize="2xl"> {subheading}</Text>
    </Box>
  );
};
