import { Box, HStack, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import { SiDiscord, SiTwitter, SiGithub } from 'react-icons/si';

interface Props {}

export const Footer = () => {
  return (
    <Box
      backgroundColor="brand.black"
      color="brand.secondary"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="30px"
      py="50px"
      bottom="0"
      width="100%"
    >
      <Text>Powered By Arbitrum</Text>
    </Box>
  );
};
