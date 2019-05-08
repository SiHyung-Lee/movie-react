import React, {Component} from 'react';
import Movie from './Movie';
import './App.css';

const Movies = [
  {
    title: 'Avengers: Infinity War',
    poster: 'https://yts.am/assets/images/movies/avengers_infinity_war_2018/medium-cover.jpg'
  },
  {
    title: 'Black Panther',
    poster: 'https://yts.am/assets/images/movies/black_panther_2018/medium-cover.jpg'
  },
  {
    title: 'Deadpool 2',
    poster: 'https://yts.am/assets/images/movies/deadpool_2_2018/medium-cover.jpg'
  },
];


class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovie();
  }

  _getMovie = async () => {
    const movies = await this._getAPI();
    this.setState({
      movies
    });
  };

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return (
        <Movie
          title={movie.title}
          poster={movie.medium_cover_image}
          key={index}
        />
      )
    });
    return movies;
  };

  _getAPI = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
        .then(response => response.json())
        .then(json => json.data.movies)
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.movies ? this._renderMovies() : 'Loading...'}
        </ul>
      </div>
    )
  }
}

export default App;