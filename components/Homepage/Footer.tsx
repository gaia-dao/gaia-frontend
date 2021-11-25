import { Box, HStack } from '@chakra-ui/layout';
import React from 'react';
import { SiDiscord, SiTwitter, SiGithub } from 'react-icons/si';

interface Props {}

export const Footer = () => {
  return (
    <Box
      backgroundColor="brand.primary"
      color="brand.secondary"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="30px"
      pt="35px"
      pb="25px"
      position="absolute"
      bottom="0"
      width="100%"
    >
      <HStack spacing="24px">
        <SiDiscord size="25px" />
        <SiTwitter size="25px" />
        <SiGithub size="25px" />
      </HStack>
    </Box>
  );
};
