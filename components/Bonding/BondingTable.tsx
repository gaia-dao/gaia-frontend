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
            <Avatar
              key={logo.name}
              src={`/images/tokens/${logo.src}`}
              name={logo.name}
            />
          ))}
        </AvatarGroup>
      );
    },
  },
  {
    Header: 'Bond',
    accessor: 'name',
  },
  {
    Header: 'Price',
    accessor: 'bondPrice',
  },
  {
    Header: 'ROI',
    accessor: 'roi',
  },
  {
    Header: 'Purchased',
    accessor: 'yourBalance',
  },
  {
    Header: '',
    accessor: 'slug',
    Cell: function LinkCell(data: any) {
      return (
        <Link href={`/bond/${data}`}>
          <Button>Bond</Button>
        </Link>
      );
    },
  },
];

const BondingTable = ({ data }) => {
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
