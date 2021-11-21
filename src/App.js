import React from 'react';

import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';


class App extends React.Component{
  state={
    videos:[],
    selectedVideo:null,
  }

  componentDidMount(){
    this.handleSubmit('Welcome to Youtube')
  }
  
  onVideoSelect=(video)=>{
  this.setState({selectedVideo:video})
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
  this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})

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
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
  );
};
}

export default App;
