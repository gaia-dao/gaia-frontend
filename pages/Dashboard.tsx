import Head from 'next/head';
import { Box, Heading, Text, Flex, Button, Link } from '@chakra-ui/react';
import Layout from '../components/Layout';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Gaia DAO</title>
        <meta name="description" content="Your Gaia Dashboard" />
      </Head>

      <Layout>
        <Heading>Gaia DAO Dashboard</Heading>
      </Layout>
    </>
  );
};

export default Dashboard;
