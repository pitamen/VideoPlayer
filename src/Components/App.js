import React from 'react';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import VideoList from './Video_List';
import VideoDetail from './VideoDetail';



const API_KEY ='AIzaSyDZxBaZzkoepx0zIuh13-7M3m2m09tYV08';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selecteVideo: null
        };
   this.videoSearch('nepal');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term },(videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
        });
    });
  }
  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 400);
    return(
      <div>
        <div className="row">
          <SearchBar
          onSearchTermChange={videoSearch}/> </div>
        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-4">
            <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos}
             /> </div>

        </div>
    </div>
    );
  }
}


export default App;
