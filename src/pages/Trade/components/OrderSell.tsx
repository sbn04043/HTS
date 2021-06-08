import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  InputAdornment,
  Input,
  IconButton,
  OutlinedInput,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

type OrderSellType = {
  index: number;
  value: number;
};

const LabelStyle = {
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
};

const ScaleButtonStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const OrderSell = (props: OrderSellType) => {
  const { index, value } = props;
  return (
    <Box hidden={value !== index}>
      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelStyle}>
            <FormLabel>주문구분</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <RadioGroup row>
              <FormControlLabel value="fixed" control={<Radio />} label="지정가" />
              <FormControlLabel value="market" control={<Radio />} label="시장가" />
            </RadioGroup>
          </Grid>
        </Grid>
      </FormControl>

      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelStyle}>
            <FormLabel>매도가능</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <Box textAlign="right" padding="20px">
              10000주
            </Box>
          </Grid>
        </Grid>
      </FormControl>

      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelStyle}>
            <FormLabel>매도가격</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <FormControl fullWidth>
              <Grid container>
                <Grid item xs={8}>
                  <OutlinedInput type="number" fullWidth margin="dense" endAdornment={<InputAdornment position="end">원</InputAdornment>} />
                </Grid>
                <Grid item xs={4}>
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </FormControl>

      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelStyle}>
            <FormLabel>주문수량</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <OutlinedInput type="number" fullWidth margin="dense" />
          </Grid>
        </Grid>
      </FormControl>

      <FormControl fullWidth>
        <Box paddingTop="10px" paddingBottom="10px">
          <Grid container>
            <Grid item xs={3} style={LabelStyle} />
            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={12} style={ScaleButtonStyle}>
                  <Button variant="outlined">10%</Button>
                  <Button variant="outlined">25%</Button>
                  <Button variant="outlined">50%</Button>
                  <Button variant="outlined">100%</Button>
                  <Button variant="outlined">직접입력</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </FormControl>

      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelStyle}>
            <FormLabel>주문총액</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <OutlinedInput type="number" fullWidth margin="dense" endAdornment={<InputAdornment position="end">원</InputAdornment>} />
          </Grid>
        </Grid>
      </FormControl>

      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <Box paddingTop="10px">
              <Button variant="contained" color="primary" fullWidth>
                매수
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default OrderSell;
