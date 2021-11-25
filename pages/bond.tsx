import Head from 'next/head';
import { Box, Heading, Text, Flex, Button, Link } from '@chakra-ui/react';
import Layout from '../components/Layout';

const Bond = () => {
  return (
    <>
      <Head>
        <title>Bond - Gaia DAO</title>
        <meta name="description" content="Bond Your $GAIA" />
      </Head>

      <Layout>
        <Heading>Gaia DAO Bonding</Heading>
      </Layout>
    </>
  );
};

export default Bond;
