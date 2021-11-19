import React from 'react';

import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import SearchBar from './components/SearchBar';


class App extends React.Component{
  state={
    video:[],
    selectedVideo:null,
  }

  handleSubmit = async (searchTerm)=>{
  const response = await youtube.get('search',{
    params: {
      part: 'snippet',
      maxResults: 5,
      key: 'AIzaSyArWmMr6nxGpgi-FqoalEIsBWHGSS_-jPE',
      q: searchTerm,
  }});


  console.log(response);
  //this.setState({video:response.data.item,selectedVideo:response.data.item[0]})

  }
  render(){
  return (
    <Grid justifyContent="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={this.handleSubmit} />
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
};
}

export default App;
