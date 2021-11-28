import Head from 'next/head';
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import { BiWalletAlt } from 'react-icons/bi';
import Layout from '../components/Layout';
import { TableContent } from '../components/Staking/TableContent';

const Stake = () => {
  return (
    <>
      <Head>
        <title>Stake - Gaia DAO</title>
        <meta name="description" content="Stake your $GAIA" />
      </Head>

      <Layout>
        <Box
          p={10}
          style={{ backdropFilter: 'blur(5px)' }}
          border="2px solid black"
          borderRadius="lg"
          mb={20}
        >
          <Heading>Single Spawn (Staking with Gaia)</Heading>
          <Text mb="8">
            <b>7 hrs, 10 min</b> until next rebase
          </Text>
          <SimpleGrid columns={[1, 1, 3]} spacing={10} textAlign="center">
            <Box>
              <Text fontSize="lg">Current APY</Text>
              <Text fontSize="xl">
                <b>12,433,234,332</b>
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">Total Value Deposited</Text>
              <Text fontSize="xl">
                <b>12,433,234,332</b>
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">Current Index</Text>
              <Text fontSize="xl">
                <b>12,433,234,332</b>
              </Text>
            </Box>
          </SimpleGrid>
          <Flex justify="center" mt="10">
            <Button bg="brand.light" color="brand.dark" icon={<BiWalletAlt />}>
              Connect Wallet
            </Button>
          </Flex>
        </Box>
        <Box
          p={10}
          style={{ backdropFilter: 'blur(5px)' }}
          border="2px solid black"
          borderRadius="lg"
        >
          <Heading>Spawn Pools(Farm)</Heading>
          <Text mb="8">Farm your Gaia</Text>
          <TableContent />
        </Box>
      </Layout>
    </>
  );
};

export default Stake;
