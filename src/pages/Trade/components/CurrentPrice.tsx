import { Box, Container, Grid, Typography, Divider } from '@material-ui/core';

const CurrentPrice = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} lg={12}>
          SK텔레콤
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography variant="h3">SK텔레콤</Typography>
          </Box>
          <Box>전일대비</Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container>
            <Grid item xs={6}>
              <Box></Box>
              <Divider />
              <Box></Box>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CurrentPrice;
