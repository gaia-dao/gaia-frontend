import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
  Badge,
  Text,
  Link,
  Box,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react';

const data = [
  {
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
    bond: 'GAIA-USDC LP',
    price: '43.34%',
    roi: '543,434',
    purchased: '0 gaia',
    link: 'https://example.com/',
  },
  {
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
    bond: 'GAIA-DAI',
    price: '43.34%',
    roi: '543,434',
    purchased: '0 gaia',
    link: 'https://example.com/',
  },
  {
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
    bond: 'GAIA-USDC',
    price: '43.34%',
    roi: '543,434',
    purchased: '0 gaia',
    link: 'https://example.com/',
  },
];

export const columns = [
  {
    Header: '',
    accessor: 'logos',
    Cell: function LogoCell(data: any) {
      if (data === null || data === undefined) {
        return null;
      }
      return (
        <AvatarGroup size="md">
          {data.map((logo: any) => (
            <Avatar key={logo.name} src={logo.src} name={logo.name} />
          ))}
        </AvatarGroup>
      );
    },
  },
  {
    Header: 'Bond',
    accessor: 'bond',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'ROI',
    accessor: 'roi',
  },
  {
    Header: 'Purchased',
    accessor: 'purchased',
  },
  {
    Header: '',
    accessor: 'link',
    Cell: function LinkCell(data: any) {
      return (
        <Link href={data} passhref="true" isExternal>
          <Button>Bond</Button>
        </Link>
      );
    },
  },
];

const BondingTable = () => {
  return (
    <Box overflowX="scroll">
      <Table my="8" fontSize="sm">
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th whiteSpace="nowrap" scope="col" key={index}>
                {column.Header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              {columns.map((column, index) => {
                const cell = row[column.accessor as keyof typeof row];
                const element = column.Cell?.(cell) ?? cell;
                return (
                  <Td whiteSpace="nowrap" key={index}>
                    {element}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default BondingTable;
