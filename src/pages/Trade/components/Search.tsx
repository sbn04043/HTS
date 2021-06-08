import { TextField, Box } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

type PastTradePriceType = {
  price: number;
  percent: number;
};

type ColumnType = {
  id: string;
  label: string;
};

type RowType = {
  [key: string]: string | number | PastTradePriceType;
};

const columns: ColumnType[] = [
  { id: 'name', label: '종목명' },
  { id: 'currentPrice', label: '현재가' },
  { id: 'pastPrice', label: '전일 대비' },
];

const rows: RowType[] = [
  { name: '삼성전자', currentPrice: 79600, pastPrice: { price: 79800, percent: -0.25 } },
  { name: '엘지전자', currentPrice: 149500, pastPrice: { price: 152000, percent: -1.64 } },
  { name: '카카오톡', currentPrice: 125000, pastPrice: { price: 119500, percent: 4.6 } },
  { name: '넥슨', currentPrice: 2581, pastPrice: { price: 2524, percent: 2.26 } },
  { name: '남양유업', currentPrice: 439000, pastPrice: { price: 440000, percent: -0.23 } },
  { name: '셀트리온', currentPrice: 269000, pastPrice: { price: 270500, percent: -0.55 } },
  { name: 'LG화학', currentPrice: 803000, pastPrice: { price: 832000, percent: -3.49 } },
  { name: '두산중공업', currentPrice: 16800, pastPrice: { price: 16100, percent: 4.35 } },
  { name: '한국전력', currentPrice: 26050, pastPrice: { price: 26250, percent: -0.76 } },
];

const Search = () => {
  return (
    <Box>
      <Box>
        <TextField variant="outlined" margin="dense" placeholder="종목명" fullWidth />
      </Box>
      <Box>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: RowType) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.toString()}>
                    {columns.map((column: ColumnType) => {
                      if (column.id === 'pastPrice') {
                        const pastPrice = row[column.id] as PastTradePriceType;
                        return (
                          <TableCell key={column.id}>
                            {pastPrice.price}
                            <br />
                            {pastPrice.percent}
                          </TableCell>
                        );
                      }
                      const value = row[column.id] as string | number;
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Search;
