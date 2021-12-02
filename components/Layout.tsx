import React, { ReactNode, ReactText, useEffect } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  useColorMode,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  Image,
  Spacer,
  Divider,
  useToast,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BiWalletAlt, BiMoon } from 'react-icons/bi';
import { VscTwitter, VscGithubInverted } from 'react-icons/vsc';
import { SiDiscord } from 'react-icons/si';
import { VscBook } from 'react-icons/vsc';
import { AiOutlineCalculator } from 'react-icons/ai';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { useWalletProvider, WalletProvider } from '../hooks/WalletProvider';
import { truncateAddress } from '../utils';
import Logo from './Logo';

interface LinkItemProps {
  name: string;
  link: string;
  icon: IconType;
  isExternal: boolean;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', link: '/dashboard', icon: FiHome, isExternal: false },
  { name: 'Stake', link: '/stake', icon: FiTrendingUp, isExternal: false },
  { name: 'Bond', link: '/bond', icon: FiCompass, isExternal: false },
];

interface BondLinkItemProps {
  name: string;
  discount: string;
  link: string;
  bondPrice: number;
  marketPrice: number;
  yourBalance: number;
  youGet: number;
  maxYouCanBuy: number;
  roi: number;
  debtRatio: number;
  vestingTerm: number;
  logos: Array<object>;
}

const BondLink: Array<BondLinkItemProps> = [
  {
    name: 'wETH',
    discount: '10.54',
    link: '/bond/weth',
    bondPrice: 0.1,
    marketPrice: 0.1,
    yourBalance: 0.1,
    youGet: 0.1,
    maxYouCanBuy: 0.1,
    roi: 0.1,
    debtRatio: 0.1,
    vestingTerm: 0.1,
    logos: [
      {
        src: '/images/tokens/weth.png',
        name: 'wETH',
      },
      {
        src: '/images/tokens/gaia.png',
        name: 'Gaia',
      },
    ],
  },
  {
    name: 'OHM',
    discount: '2.32%',
    link: '/bond/ohm',
    bondPrice: 0.1,
    marketPrice: 0.1,
    yourBalance: 0.1,
    youGet: 0.1,
    maxYouCanBuy: 0.1,
    roi: 0.1,
    debtRatio: 0.1,
    vestingTerm: 0.1,
    logos: [
      {
        src: '/images/tokens/weth.png',
        name: 'wETH',
      },
      {
        src: '/images/tokens/gaia.png',
        name: 'Gaia',
      },
    ],
  },
  {
    name: 'GAIA-DAI LP',
    discount: '23.23',
    link: '/gaia-dai-lp',
    bondPrice: 0.1,
    marketPrice: 0.1,
    yourBalance: 0.1,
    youGet: 0.1,
    maxYouCanBuy: 0.1,
    roi: 0.1,
    debtRatio: 0.1,
    vestingTerm: 0.1,
    logos: [
      {
        src: '/images/tokens/weth.png',
        name: 'wETH',
      },
      {
        src: '/images/tokens/gaia.png',
        name: 'Gaia',
      },
    ],
  },
  {
    name: 'GAIA-AVX LP',
    discount: '11.32',
    link: '/gaia-avx-lp',
    bondPrice: 0.1,
    marketPrice: 0.1,
    yourBalance: 0.1,
    youGet: 0.1,
    maxYouCanBuy: 0.1,
    roi: 0.1,
    debtRatio: 0.1,
    vestingTerm: 0.1,
    logos: [
      {
        src: '/images/tokens/weth.png',
        name: 'wETH',
      },
      {
        src: '/images/tokens/gaia.png',
        name: 'Gaia',
      },
    ],
  },
];

const ExternalLinks: Array<LinkItemProps> = [
  {
    name: 'Calculator',
    link: '/calculator',
    icon: AiOutlineCalculator,
    isExternal: false,
  },
  {
    name: 'Documentation',
    link: 'https://gaia-dao.gitbook.io/gaia-dao/',
    icon: VscBook,
    isExternal: true,
  },
];

const Inner = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    // toast({
    //   title: 'M',
    //   description: 'Please read the documentation before using the application',
    //   status: 'success',
    //   duration: 9000,
    //   isClosable: true,
    // });
  }, [toast]);

  return (
    <>
      <Flex
        minH="100vh"
        direction="column"
        height="full"
        bg={useColorModeValue('white', 'gray.900')}
      >
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'flex' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} />
        <Flex as="main" ml={{ base: 0, md: 60 }} p="4vw" flexDirection="column">
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <WalletProvider>
      <Inner>{children}</Inner>
    </WalletProvider>
  );
};

export default Layout;

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Flex
      display="flex"
      as="nav"
      flexDirection="column"
      transition="0.3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        mb="8"
        justifyContent="space-between"
      >
        <Link href="/">
          <Logo color={useColorModeValue('black', 'white')} width={120} />
        </Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} link={link.link} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <VStack justifyContent="start" alignItems="start" pl="10" pr="6" mb="4">
        <Text fontSize="sm" color="gray.500">
          Bonding Discounts
        </Text>
        {BondLink.map((bond, key) => {
          console.log(bond);
          return (
            <Link
              key={key}
              href={bond.link}
              fontSize="sm"
              py="1"
              mx="2"
              display="flex"
              justifyContent="space-between"
              w="100%"
            >
              <Text>{bond.name}</Text>
              <Text>{bond.discount}%</Text>
            </Link>
          );
        })}
      </VStack>
      <Divider mb="4" />
      {ExternalLinks.map((link) => (
        <NavItem key={link.name} link={link.link} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}

      <Spacer />
      <HStack alignItems="center" justifyContent="space-between" p="4">
        <Link href="https://twitter.com/Gaia_DAO" isExternal>
          <Button size="lg" variant="ghost">
            <VscTwitter />
          </Button>
        </Link>
        <Link href="https://github.com/gaia-dao" isExternal>
          <Button size="lg" variant="ghost">
            <VscGithubInverted />
          </Button>
        </Link>
        <Link href="https://discord.gg/6VCud8steM" isExternal>
          <Button size="lg" variant="ghost">
            <SiDiscord />
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  link: string;
  children: ReactText;
}
const NavItem = ({ icon, link, children, ...rest }: NavItemProps) => {
  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        py="2"
        px="4"
        mb="4"
        mx="4"
        borderRadius="full"
        role="group"
        cursor="pointer"
        textTransform="uppercase"
        fontWeight="bold"
        _hover={{
          bg: 'brand.secondary',
          color: 'brand.primary',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'brand.primary',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { connect, disconnect, address, connected } = useWalletProvider();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        variant="outline"
        aria-label="open menu"
        icon={<BiMoon />}
        onClick={toggleColorMode}
      />
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Link href="/" display={{ base: 'flex', md: 'none' }}>
        <Logo color={useColorModeValue('black', 'white')} width={120} />
      </Link>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="Toggle Color Mode"
          icon={<BiMoon />}
          onClick={toggleColorMode}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="md" fontWeight="bold">
                    $GAIA
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Buy on Sushi Swap</MenuItem>
              <MenuItem>Buy on Uniswap</MenuItem>
              <MenuItem>Buy on 1inch</MenuItem>
              <MenuItem>Wrap $GAIA</MenuItem>
              <MenuDivider />
              <MenuItem>Add Token to Wallet</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        {connected ? (
          <Button onClick={disconnect}>{truncateAddress(address, 8)}</Button>
        ) : (
          <IconButton
            onClick={connect}
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<BiWalletAlt />}
          />
        )}
      </HStack>
    </Flex>
  );
};
