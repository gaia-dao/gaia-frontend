import Head from 'next/head';
import { Box, Heading, Text, Flex, Button, Link } from '@chakra-ui/react';

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Gaia DAO</title>
        {/* TODO Fix Desc */}
        <meta name="description" content="Reclaming Mother Earth through bonded crypto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <Heading>Gaia DAO</Heading>
      </Box>
    </>
  );
};

export default Homepage;
