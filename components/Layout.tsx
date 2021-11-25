import React, { ReactNode, ReactText } from 'react';
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
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BiWalletAlt, BiMoon } from 'react-icons/bi';
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
import { useWalletProvider } from '../hooks/WalletProvider';
import { connected } from 'process';
import { truncateAddress } from '../utils';

interface LinkItemProps {
  name: string;
  link: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', link: 'dashboard', icon: FiHome },
  { name: 'Stake', link: 'stake', icon: FiTrendingUp },
  { name: 'Bond', link: 'bond', icon: FiCompass },
  { name: 'Calculator', link: 'calculator', icon: FiStar },
  { name: 'Documentation', link: 'documentation', icon: FiSettings },
];

const TopBar = () => {
  return (
    <Box>
      <Text>Top Bar</Text>
      <BiWalletAlt />
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Box>
      <Text>Sidebar</Text>
    </Box>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { connect, disconnect, address } = useWalletProvider();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
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
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box as="main" ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="black">
          GAIA DAO
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} link={link.link} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  link: string;
  children: ReactText;
}
const NavItem = ({ icon, link, children, ...rest }: NavItemProps) => {
  return (
    <Link href={`/${link}`} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
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
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<BiMoon />}
      />
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<BiMoon />}
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
                  <Text fontSize="sm">$GAIA</Text>
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
