import React, {Component} from 'react';
import Movies from './Movie';

class App extends Component {
  render() {
    const movies = [
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
    ]

    return (
      <div className="App">
        {
          movies.map(obj => {
            return <Movies title={obj.title} poster={obj.poster}/>
          })
        }
      </div>
    )
  }
}

export default App;