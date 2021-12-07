import { useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Link,
  SimpleGrid,
  IconButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  VStack,
  Container,
  Divider,
  useColorModeValue,
  Input,
} from '@chakra-ui/react';
import { BiWalletAlt } from 'react-icons/bi';
import Layout from '../components/Layout';
import PoolTable from '../components/Staking/PoolTable';

const Stake = () => {
  const [isStaking, setIsStaking] = useState(false);
  const [amount, setAmount] = useState(null);

  return (
    <>
      <Head>
        <title>Stake - Gaia DAO</title>
        <meta name="description" content="Stake your $GAIA" />
      </Head>

      <Layout>
        <Box
          mb="4vw"
          border="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderRadius={4}
          p="4vw"
        >
          <Heading>Single Stake</Heading>
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
          <VStack justify="center" mt="10">
            <HStack justifyContent="center" spacing={10} mb="8">
              <Button onClick={() => setIsStaking(true)}>Stake</Button>
              <Button>Unstake</Button>
            </HStack>
            <HStack justifyContent="center" spacing={4} maxW="600px" pb="8">
              <Input placeholder="Amount" value={amount} borderRadius="full" />
              <Button colorScheme="green">Stake</Button>
            </HStack>

            <VStack spacing="8" my="12">
              <HStack spacing={10} justifyContent="center">
                <VStack>
                  <Text>
                    First time staking <b>GAIA</b>?
                  </Text>
                  <Text>Please approve GAIA DAO to stake your $GAIA.</Text>
                </VStack>
                <Button variantColor="blue" variant="outline" size="lg">
                  Approve
                </Button>
              </HStack>
              <Text textAlign="center" fontSize="sm">
                {`Note: The "Approve" transaction is only needed when
                        staking/unstaking for the first time; subsequent
                        staking/unstaking only requires you to perform the
                        "Stake" or "Unstake" transaction.`}
              </Text>
            </VStack>
            <Container>
              <HStack justifyContent="space-between" mb="4">
                <Text fontSize="xl">Unstaked Balance</Text>
                <Text fontSize="xl" fontWeight="bold">
                  0 GAIA
                </Text>
              </HStack>
              <HStack justifyContent="space-between" mb="4">
                <Text fontSize="xl">Staked Balance</Text>
                <Text fontSize="xl" fontWeight="bold">
                  0 sGAIA
                </Text>
              </HStack>
              <HStack justifyContent="space-between" mb="4">
                <Text opacity="0.6" ml="4">
                  Single Staking
                </Text>
                <Text opacity="0.6" fontWeight="bold">
                  0 GAIA
                </Text>
              </HStack>
              <HStack justifyContent="space-between" mb="4">
                <Text opacity="0.6" ml="4">
                  Wrapped Balance
                </Text>
                <Text opacity="0.6" fontWeight="bold">
                  0 wsGAIA
                </Text>
              </HStack>
              <Divider mb="4" />
              <HStack justifyContent="space-between" mb="4">
                <Text fontSize="xl">Next Reward Amount</Text>
                <Text fontSize="xl" fontWeight="bold">
                  0 sGAIA
                </Text>
              </HStack>
              <HStack justifyContent="space-between" mb="4">
                <Text fontSize="xl">Next Reward Yield</Text>
                <Text fontSize="xl" fontWeight="bold">
                  0.53432%
                </Text>
              </HStack>
              <HStack justifyContent="space-between" mb="4">
                <Text fontSize="xl">ROI (5-Day Rate)</Text>
                <Text fontSize="xl" fontWeight="bold">
                  9.0432%
                </Text>
              </HStack>
            </Container>
          </VStack>
        </Box>
        <Box
          border="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderRadius={4}
          p="4vw"
        >
          <Heading>Farm Pool</Heading>
          <Text mb="8">Farm your Gaia</Text>
          <PoolTable />
        </Box>
      </Layout>
    </>
  );
};

export default Stake;
