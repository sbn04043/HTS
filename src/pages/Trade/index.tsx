import { Container, Grid } from '@material-ui/core';
import Order from './components/Order';
import Search from './components/Search';

const Trade = () => {
  return (
    <Container style={{ backgroundColor: '#424AE7' }}>
      <Grid container style={{ backgroundColor: '#42f566' }}>
        <Grid item xs={12} lg={4}>
          <Search />
        </Grid>

        <Grid item xs={12} lg={8}>
          <Grid container style={{ backgroundColor: '#64E8F8' }}>
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
