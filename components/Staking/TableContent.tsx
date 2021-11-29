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
} from '@chakra-ui/react';
import * as React from 'react';
import { BiExit } from 'react-icons/bi';
// import { columns, data } from './_data';

const data = [
  {
    asset: 'GAIA-USDC',
    apy: '43.34%',
    tvd: '543,434',
    balance: '0 gaia',
    link: 'https://example.com/',
  },
  {
    asset: 'GAIA-DAI',
    apy: '43.34%',
    tvd: '543,434',
    balance: '0 gaia',
    link: 'https://example.com/',
  },
  {
    asset: 'GAIA-USDC',
    apy: '43.34%',
    tvd: '543,434',
    balance: '0 gaia',
    link: 'https://example.com/',
  },
  {
    asset: 'GAIA-USDC',
    apy: '43.34%',
    tvd: '543,434',
    balance: '0 gaia',
    link: 'https://example.com/',
  },
];

export const columns = [
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
    Header: 'Link',
    accessor: 'link',
    Cell: function StatusCell(data: any) {
      return (
        <Link href={data} passhref="true" isExternal>
          <Button>Buy on Uniswap</Button>
        </Link>
      );
    },
  },
];

export const TableContent = () => {
  return (
    <Table my="8" fontSize="sm">
      <Thead>
        <Tr>
          {columns.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column.Header}
            </Th>
          ))}
          <Th />
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
  );
};
