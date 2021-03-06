import { useContext } from 'react';
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
  Skeleton,
} from '@chakra-ui/react';
import Layout, { BondingContext } from '../../components/Layout';

const BondItem = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const router = useRouter();
  const bonds = useContext(BondingContext);
  console.log(bonds);
  console.log(router);

  const slug = router.query.slug;

  const bond = bonds.find((b) => b.slug === slug);

  console.log(bond);
  console.log('!bond');
  console.log(!bond);
  console.log('Bond Slug');

  // if (!bond) {
  //   return <div>Bond not found</div>;
  // }

  return (
    <>
      <Head>
        <title>Bond - Gaia DAO</title>
        <meta name="description" content="Bond Your $GAIA" />
      </Head>

      <Layout>
        <Box border="1px" borderColor={borderColor} borderRadius={4} p="4vw">
          <AvatarGroup size="md">
            {!bond ? (
              <Skeleton />
            ) : (
              bond.logos.map((logo: any) => (
                <Avatar key={logo.name} src={logo.src} name={logo.name} />
              ))
            )}
          </AvatarGroup>
          <Heading mb="8">
            {!bond ? <Skeleton height="20px" /> : bond.name}
          </Heading>
          <SimpleGrid
            columns={[1, 1, 2]}
            spacing={10}
            textAlign="center"
            mb="8"
          >
            <Box>
              <Text fontSize="lg">Bond Price</Text>
              <Text fontSize="xl">
                <b>{!bond ? <Skeleton height="20px" /> : bond.bondPrice}</b>
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg">Market Price</Text>
              <Text fontSize="xl">
                <b>{!bond ? <Skeleton height="20px" /> : bond.marketPrice}</b>
              </Text>
            </Box>
          </SimpleGrid>
          <HStack justifyContent="space-between">
            <Text>Your Balance</Text>
            <Text>{!bond ? <Skeleton height="20px" /> : bond.yourBalance}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>You Will Get</Text>
            <Text>{!bond ? <Skeleton height="20px" /> : bond.youGet}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Max You Can Buyt</Text>
            <Text>
              {!bond ? <Skeleton height="20px" /> : bond.maxYouCanBuy}
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>ROI</Text>
            <Text>{!bond ? <Skeleton height="20px" /> : bond.roi}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Debt Ratio</Text>
            <Text>{!bond ? <Skeleton height="20px" /> : bond.debtRatio}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Vesting Term</Text>
            <Text>{!bond ? <Skeleton height="20px" /> : bond.vestingTerm}</Text>
          </HStack>
        </Box>
      </Layout>
    </>
  );
};

export default BondItem;
