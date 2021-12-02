import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Link,
  useColorModeValue,
  SimpleGrid,
  HStack,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react';
import Layout from '../../components/Layout';

const BondItem = () => {
  const router = useRouter();
  console.log(router);
  const { query } = router.query;
  const slug = router.query.slug;
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
          {/* <AvatarGroup size="md">
            {data.map((logo: any) => (
              <Avatar key={logo.name} src={logo.src} name={logo.name} />
            ))}
          </AvatarGroup> */}
          <Heading mb="8">{slug}</Heading>
          <SimpleGrid
            columns={[1, 1, 2]}
            spacing={10}
            textAlign="center"
            mb="8"
          >
            <Box>
              <Text fontSize="lg">Bond Price</Text>
              <Text fontSize="xl">
                <b>12,433,234,332</b>
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">Market Price</Text>
              <Text fontSize="xl">
                <b>12,433,234,332</b>
              </Text>
            </Box>
          </SimpleGrid>
          <HStack justifyContent="space-between">
            <Text>Your Balance</Text>
            <Text>$0.00</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>You Will Get</Text>
            <Text>$0.00</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Max You Can Buyt</Text>
            <Text>$0.00</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>ROI</Text>
            <Text>$0.00</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Debt Ratio</Text>
            <Text>$0.00</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Vesting Term</Text>
            <Text>$0.00</Text>
          </HStack>
        </Box>
      </Layout>
    </>
  );
};

export default BondItem;
