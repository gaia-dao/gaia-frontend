import Head from 'next/head';
import {
  Box,
  Text,
  Image,
  Stack,
  HStack,
  Icon,
  Divider,
  Button,
} from '@chakra-ui/react';
import { Navbar } from '../components/Homepage/Navbar';
import { Footer } from '../components/Homepage/Footer';
import { Card } from '../components/Homepage/Card';
import React from 'react';
import { BiTimeFive } from 'react-icons/bi';

const Homepage = () => {
  return (
    <Box display="flex" minH="100vh" flexDir="column">
      <Head>
        <title>Gaia DAO</title>
        <meta name="description" content="Mother Earth’s Olympus Fork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box
        backgroundColor="brand.accentBrown"
        position="relative"
        overflowX="hidden"
        flex="1"
      >
        <Box display="inline-flex" pt="50" justifyContent="space-between">
          <Box
            px={['10px', '6']}
            py={[null, '6']}
            maxWidth={[null, null, null, '450px', '600px']}
            my={['25px', null, null, '100px']}
            ml={['5px', '25px', null, null, '100px']}
            zIndex="1"
          >
            <Text
              fontSize="6xl"
              mb="20px"
              fontWeight="black"
              color="brand.primary"
            >
              Gaia
            </Text>
            <Text fontSize="3xl" color="brand.primary" mb="4">
              Mother Earth’s Olympus Fork
            </Text>
            <HStack fontSize="2xl" mb="4">
              <BiTimeFive />
              <Text>Bond your assets to earn $GAIA</Text>
            </HStack>
            <HStack fontSize="2xl" mb="4">
              <BiTimeFive />
              <Text>Stake your $GAIA for rewards</Text>
            </HStack>
            <HStack fontSize="2xl" mb="4">
              <BiTimeFive />
              <Text>Direct treasury funds to save the planetA</Text>
            </HStack>
            <HStack>
              <Button>Enter the App</Button>
              <Button>Join the Discord</Button>
            </HStack>
          </Box>
          <Box>
            <Text>Current APY</Text>
            <Text>54,343%</Text>
            <Divider mb="4" />
            <Text>Reclamed Land</Text>
            <Text>15,000 acres</Text>
          </Box>
        </Box>
        <Stack
          direction={['column', null, 'row']}
          spacing={['24px', null, '40px']}
          display={['flex']}
          flexDirection={['column', null, 'row']}
          position={['relative', null, 'absolute']}
          width="100%"
          justifyContent="center"
        >
          {[
            { heading: '99.0%', subheading: 'Total $GAIA Staked' },
            { heading: '$534,343,322.44', subheading: 'Treasury Balance' },
            { heading: '$4,353,322.22', subheading: 'Total Value Locked' },
          ].map((item, idx) => (
            <Box key={idx} width={'100%'} px={['10px']} height="150px">
              <Card heading={item.heading} subheading={item.subheading} />
            </Box>
          ))}
        </Stack>
        <Box my={['50px', null, '100px']} height="500px">
          <Image
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src="./images/homepage-banner.png"
            alt="Future City Under Dam"
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Homepage;
