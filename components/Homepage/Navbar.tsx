import { Box, Button, HStack, Link, Text } from '@chakra-ui/react';
import router from 'next/router';
import React from 'react';
interface Props {}

export const Navbar = () => {
  return (
    <Box
      backgroundColor="brand.primary"
      color="brand.secondary"
      display="flex"
      alignItems="center"
      justifyContent={['space-around', 'normal']}
      px="30px"
      pt="20px"
      pb="20px"
    >
      <Link display={['none', 'block']} flexGrow="1" href="/">
        <Text fontSize="xl" fontWeight="black">
          GAIA DAO
        </Text>
      </Link>
      <HStack spacing="24px" fontWeight="bold">
        <Link href="/bond">
          <Text>Bond</Text>
        </Link>
        <Link href="/stake">
          <Text>Stake</Text>
        </Link>
        <Text>Learn more</Text>
        <Button
          backgroundColor="brand.accentBrown"
          color="brand.primary"
          onClick={() => router.push('/dashboard')}
        >
          Enter App
        </Button>
      </HStack>
    </Box>
  );
};
