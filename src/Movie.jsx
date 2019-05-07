import React, {Component} from 'react';

class Movies extends Component {
    render() {
        return(
            <ul>
                <li>
                    <h2>{this.props.title}</h2>
                    <img src={this.props.poster} alt=""/>
                </li>
            </ul>
        );
    }
}

export default Movies;