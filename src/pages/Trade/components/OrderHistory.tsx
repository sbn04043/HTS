import { Box } from '@material-ui/core';

type OrderHistoryType = {
  index: number;
  value: number;
};

const OrderHistory = (props: OrderHistoryType) => {
  const { index, value } = props;
  return <Box hidden={index != value}>내역</Box>;
};

export default OrderHistory;
