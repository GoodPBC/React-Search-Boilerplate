import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';

const API_KEY = "AIzaSyBJ89-Aa48hQUxY5f_JwEX9VAqREh4OKXE";



//App is our parent most component. We import SearchBar. functional component that contains a class based component
class App extends Component {
    constructor(props) {
      super(props);

      this.state = { videos: [] };

      YTSearch({key: API_KEY, term: "Beastie Boys"},(videos) => {
        this.setState({ videos }) //same as this.setState({ videos: videos }) -- es6 syntactic sugar when key and value are the same
        console.log(videos);
      });
    }
  render() {
    return (
      <div className="">
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


//we render App in a container in index.html
ReactDOM.render(<App />, document.querySelector('.container'));
