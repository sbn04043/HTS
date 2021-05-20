import { Container, Grid } from '@material-ui/core';
import Order from './components/Order';
const Trade = () => {
  return (
    <Container style={{ backgroundColor: '#022fff' }}>
      <Grid container style={{ backgroundColor: '#42f566' }}>
        <Grid item xs={12} lg={4}>
          검색
        </Grid>

        <Grid item xs={12} lg={8}>
          <Grid container style={{ backgroundColor: '#022fff' }}>
            <Grid item xs={12} lg={12}>
              현재가
            </Grid>

            <Grid item xs={12} lg={12}>
              차트
            </Grid>
            <Grid item xs={12} lg={6}>
              호가
            </Grid>
            <Grid item xs={12} lg={6}>
              <Order />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Trade;
