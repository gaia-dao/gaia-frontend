import Head from 'next/head';
import { useContext } from 'react';
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
import Layout, { BondingContext } from '../../components/Layout';
import BondingTable from '../../components/Bonding/BondingTable';
import InfoPopover from '../../components/InfoPopover';

const Bond = () => {
  const bonds = useContext(BondingContext);
  console.log(bonds);

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
          <Heading mb="8">Bond</Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={10} textAlign="center">
            <Box>
              <Text fontSize="lg">Treasury Balance</Text>
              <Text fontSize="xl">
                <b>12,433,234,332</b>
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">
                GAIA Price{' '}
                <InfoPopover
                  header="Gaia Price"
                  content="This is the current price of Gaia"
                />
              </Text>
              <Text fontSize="xl">
                <b>12,433,234,332</b>
              </Text>
            </Box>
          </SimpleGrid>
          <BondingTable data={bonds} />
        </Box>
      </Layout>
    </>
  );
};

export default Bond;
