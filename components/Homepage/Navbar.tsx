import { Box, Button, HStack, Link, Text } from '@chakra-ui/react';
import router from 'next/router';
import React from 'react';

interface Props {}

export const Navbar = () => {
  return (
    <Box
      color="brand.white"
      display="flex"
      alignItems="center"
      position="absolute"
      width="100%"
      justifyContent={['center', null, 'normal']}
      px="30px"
      pt="20px"
      pb="20px"
      zIndex="1"
    >
      <Box display={['none', null, 'block']} flexGrow="1">
        <Button
          colorScheme="black"
          variant="outline"
          onClick={() => window.open('https://discord.gg/Rws4KzGy')}
        >
          <Text fontSize="xs"> JOIN THE DISCORD</Text>
        </Button>
      </Box>
      <HStack
        spacing="24px"
        fontWeight="bold"
        textTransform="uppercase"
        fontSize={14}
      >
        <Link href="/bond">
          <Text>Bond</Text>
        </Link>
        <Link href="/stake">
          <Text>Stake</Text>
        </Link>
        <Text>Learn more</Text>
        <Button
          display={['none', null, 'block']}
          p="14px 18px 10px 18px"
          borderRadius="100px"
          backgroundColor="brand.white"
          color="brand.black"
          onClick={() => router.push('/dashboard')}
        >
          <Text fontSize="16px"> ENTER APP</Text>
        </Button>
      </HStack>
    </Box>
  );
};
