import React from 'react';

import { Grid } from '@material-ui/core';

import youtube from './api/youtube';


function App() {
  return (
    <Grid justify="center" container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            {/*Searchbar component */}
          </Grid>
          <Grid item xs={8}>
            {/*VideoDetail component */}
          </Grid>
          <Grid item xs={4}>
            {/*Videolist component */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
  );
}

export default App;
