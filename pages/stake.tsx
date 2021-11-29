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
        <Box mb="10vw">
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
          <Flex justify="center" mt="10">
            <Tabs w="100%">
              <TabList>
                <Tab>Stake</Tab>
                <Tab>Unstake</Tab>
              </TabList>

              <TabPanels w="100%">
                <TabPanel>
                  <HStack spacing={10} mb="8">
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
                      <Text fontSize="xl">ROI(5-Day Rate)</Text>
                      <Text fontSize="xl" fontWeight="bold">
                        9.0432%
                      </Text>
                    </HStack>
                  </Container>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Box>
        <Box>
          <Heading>Farm Pool</Heading>
          <Text mb="8">Farm your Gaia</Text>
          <TableContent />
        </Box>
      </Layout>
    </>
  );
};

export default Stake;
