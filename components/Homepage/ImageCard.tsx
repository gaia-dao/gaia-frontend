import { Box, Text, Image, Button, Container, HStack } from '@chakra-ui/react';
import { CSSObject } from '@chakra-ui/system';
import React, { FC } from 'react';

interface ICard {
  src: string;
  heading: string;
  subheading: string;
  sx?: CSSObject;
}

export const ImageCard: FC<ICard> = ({ src, heading, subheading, sx }) => {
  return (
    <>
      <Image
        style={{ transition: 'box-shadow .3s' }}
        borderRadius="20px"
        _hover={{ boxShadow: '0px 0px 30px rgba(33,33,33,.9)' }}
        src={src}
        alt={subheading}
      />
      <Box fontWeight="medium" mt="20px">
        <Text fontSize="small">{subheading}</Text>
        <Text fontSize="2xl">{heading}</Text>
      </Box>
    </>
  );
};
