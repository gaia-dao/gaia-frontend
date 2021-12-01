import Head from 'next/head';
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Link,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import BondingTable from '../components/Bonding/BondingTable';

const Calculator = () => {
  return (
    <>
      <Head>
        <title>Bond - Gaia DAO</title>
        <meta name="description" content="Bond Your $GAIA" />
      </Head>

      <Layout>
        <Box
          border="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderRadius={4}
          p="4vw"
        >
          <Heading mb="8">Calculator</Heading>
        </Box>
      </Layout>
    </>
  );
};

export default Calculator;
