import React, {Component} from 'react';

class Movie extends Component {
    render() {
        return(
            <li>
                <img src={this.props.poster} alt=""/>
                <p>{this.props.title}</p>
            </li>
        );
    }
}

export default Movie;