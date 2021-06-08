import { Box, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import { flushSync } from 'react-dom';

type DataSetType = {
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
};

type DataType = {
  labels: string[];
  datasets: DataSetType[];
};

const increaseOption = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      display: 'false',
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      min: 0,
      max: 30,
      ticks: {
        display: false,
        stepSize: 5,
      },
    },
    y: {
      grid: { display: false, drawBorder: false },
      ticks: {
        display: false,
      },
    },
  },
};

const decreaseOption = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      display: 'false',
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      min: 0,
      max: 30,
      ticks: {
        display: false,
        stepSize: 5,
      },
    },
    y: {
      grid: { display: false, drawBorder: false },
      ticks: {
        display: false,
      },
    },
  },
};

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2',
        'rgba(255, 159, 64, 0.2',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 19, 64, 1)',
      ],
      boarderWidth: 1,
    },
  ],
};

type ColumnType = {
  id: string;
  label: string;
};

type RowType = {
  price: number;
  percent: number;
  dataSet: DataType;
};

const columns: ColumnType[] = [
  { id: 'minus', label: '마이너스' },
  { id: 'currentPrice', label: '현재가' },
  { id: 'plus', label: '플러스' },
];

const increaseAskingPrices: RowType[] = [
  {
    price: 9900,
    percent: -1,
    dataSet: {
      labels: ['Red'],
      datasets: [
        {
          data: [12],
          backgroundColor: ['rgba(255, 99, 132, 1)'],
          borderColor: ['rgba(255, 99, 132, 0.2)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 9800,
    percent: -2,
    dataSet: {
      labels: ['Blue'],
      datasets: [
        {
          data: [19],
          backgroundColor: ['rgba(54, 162, 235, 1)'],
          borderColor: ['rgba(54, 162, 235, 0.2)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 9700,
    percent: -3,
    dataSet: {
      labels: ['Yellow'],
      datasets: [
        {
          data: [3],
          backgroundColor: ['rgba(255, 206, 86, 1)'],
          borderColor: ['rgba(255, 206, 86, 0.2)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 9600,
    percent: -4,
    dataSet: {
      labels: ['Green'],
      datasets: [
        {
          data: [5],
          backgroundColor: ['rgba(153, 102, 255, 1'],
          borderColor: ['rgba(153, 102, 255, 0.2'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 9500,
    percent: -5,
    dataSet: {
      labels: ['Purple'],
      datasets: [
        {
          data: [2],
          backgroundColor: ['rgba(255, 19, 64, 1)'],
          borderColor: ['rgba(255, 19, 64, 0.2)'],
          borderWidth: 1,
        },
      ],
    },
  },
];

const decreaseAskingPrices: RowType[] = [
  {
    price: 10100,
    percent: 1,
    dataSet: {
      labels: ['Red'],
      datasets: [
        {
          data: [12],
          backgroundColor: ['rgba(255, 99, 132, 1)'],
          borderColor: ['rgba(255, 99, 132, 0.2)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 10200,
    percent: 2,
    dataSet: {
      labels: ['Blue'],
      datasets: [
        {
          data: [19],
          backgroundColor: ['rgba(54, 162, 235, 1)'],
          borderColor: ['rgba(54, 162, 235, 0.2)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 10300,
    percent: 3,
    dataSet: {
      labels: ['Yellow'],
      datasets: [
        {
          data: [3],
          backgroundColor: ['rgba(255, 206, 86, 1)'],
          borderColor: ['rgba(255, 206, 86, 0.2)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 10400,
    percent: 4,
    dataSet: {
      labels: ['Green'],
      datasets: [
        {
          data: [5],
          backgroundColor: ['rgba(153, 102, 255, 1'],
          borderColor: ['rgba(153, 102, 255, 0.2'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 10500,
    percent: 5,
    dataSet: {
      labels: ['Purple'],
      datasets: [
        {
          data: [2],
          backgroundColor: ['rgba(255, 19, 64, 1)'],
          borderColor: ['rgba(255, 19, 64, 0.2)'],
          borderWidth: 1,
        },
      ],
    },
  },
];

const AskingPrice = () => {
  return (
    <Box>
      <TableContainer>
        <Table size="small">
          <TableHead></TableHead>
          <TableBody>
            {increaseAskingPrices.map((row: RowType) => {
              return (
                <TableRow key={row.price}>
                  <TableCell></TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.percent}%</TableCell>
                  <TableCell>
                    <Box width="100px" height="50px">
                      <Bar type="" data={row.dataSet} options={increaseOption} />
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
            {decreaseAskingPrices.map((row: RowType) => {
              return (
                <TableRow key={row.price}>
                  <TableCell>
                    <Box width="100px" height="50px">
                      <Bar type="" data={row.dataSet} options={decreaseOption} />
                    </Box>
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.percent}%</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AskingPrice;
