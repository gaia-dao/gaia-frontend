import Head from 'next/head';
import { Box, Heading, Text, Flex, Button, Link } from '@chakra-ui/react';
import Layout from '../components/Layout';

const Stake = () => {
  return (
    <>
      <Head>
        <title>Stake - Gaia DAO</title>
        <meta name="description" content="Stake your $GAIA" />
      </Head>

      <Layout>
        <Heading>Gaia DAO Staking</Heading>
        <Box p={100}></Box>
      </Layout>
    </>
  );
};

export default Stake;
