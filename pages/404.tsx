import { Box, Button, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import Layout from '../components/Layout';

const Custom404 = () => (
  <Layout>
    <Box as="section">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
          Sorry this page does not exist
        </Heading>
        <Text mt="4" fontSize="lg">
          Head back to the Dashboard
        </Text>
      </Box>
    </Box>
  </Layout>
);

export default Custom404;
