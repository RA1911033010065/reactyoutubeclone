import React from 'react';

import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';



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


 // console.log(response);
  this.setState({video:response.data.items,selectedVideo:response.data.items[0]})

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
            <VideoDetail video={this.state.selectedVideo} />
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
