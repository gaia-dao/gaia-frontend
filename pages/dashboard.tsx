import Head from 'next/head';
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Link,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import Layout from '../components/Layout';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Gaia DAO</title>
        <meta name="description" content="Your Gaia Dashboard" />
      </Head>

      <Layout>
        <Box
          mb="4vw"
          border="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderRadius={4}
          p="4vw"
        >
          <SimpleGrid columns={[1, 1, 3]} spacing={10} textAlign="center">
            <Box>
              <Text fontSize="lg">Market Cap</Text>
              <Text fontSize="2xl" fontWeight="bold">
                $12,433,234,332
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">GAIA Price</Text>
              <Text fontSize="2xl" fontWeight="bold">
                $2,032
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">wsGAIA Price</Text>
              <Text fontSize="2xl" fontWeight="bold">
                $42,943
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">Circulating Supply (total)</Text>
              <Text fontSize="2xl" fontWeight="bold">
                54334/2345344
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">Backings per GAIA</Text>
              <Text fontSize="2xl" fontWeight="bold">
                $1532.43
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">Current Index</Text>
              <Text fontSize="2xl" fontWeight="bold">
                22.43 sGAIA
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">APY</Text>
              <Text fontSize="2xl" fontWeight="bold">
                54,432.432%
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">Portfolio</Text>
              <Text fontSize="2xl" fontWeight="bold">
                $0
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">Daily Profit</Text>
              <Text fontSize="2xl" fontWeight="bold">
                $453.43
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Layout>
    </>
  );
};

export default Dashboard;
