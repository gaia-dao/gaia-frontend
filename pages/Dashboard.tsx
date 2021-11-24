import Head from 'next/head';
import { Box, Heading, Text, Flex, Button, Link } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Gaia DAO</title>
        <meta name="description" content="Your Gaia Dashboard" />
      </Head>

      <Box as="main">
        <Heading>Gaia DAO Dashboard</Heading>
      </Box>
    </>
  );
};

export default Dashboard;
