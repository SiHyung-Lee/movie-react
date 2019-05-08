import React, {Component} from 'react';
import Movie from './Movie';

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
    setTimeout(this._getMovie, 3000)
  }

  _getMovie = () => {
    this.setState({
      movies: Movies
    });
  };

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return (
        <Movie
          title={movie.title}
          poster={movie.poster}
          key={index}
        />
      )
    });
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    )
  }
}

export default App;