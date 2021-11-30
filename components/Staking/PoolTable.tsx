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
    asset: 'GAIA-USDC',
    apy: '43.34%',
    tvd: '543,434',
    balance: '0 gaia',
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
    asset: 'GAIA-DAI',
    apy: '43.34%',
    tvd: '543,434',
    balance: '0 gaia',
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
    asset: 'GAIA-USDC',
    apy: '43.34%',
    tvd: '543,434',
    balance: '0 gaia',
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
    Header: 'Asset',
    accessor: 'asset',
  },
  {
    Header: 'APY',
    accessor: 'apy',
  },
  {
    Header: 'TVD',
    accessor: 'tvd',
  },
  {
    Header: 'Balance',
    accessor: 'balance',
  },
  {
    Header: '',
    accessor: 'link',
    Cell: function LinkCell(data: any) {
      return (
        <Link href={data} passhref="true" isExternal>
          <Button>Buy on Uniswap</Button>
        </Link>
      );
    },
  },
];

const PoolTable = () => {
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

export default PoolTable;
