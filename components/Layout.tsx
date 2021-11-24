import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BiWalletAlt } from 'react-icons/bi';

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

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <Sidebar />

      <Box as="main">{children}</Box>
    </>
  );
};

export default Layout;
