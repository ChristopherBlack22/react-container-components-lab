import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'NuVC07UN3RryV60m8Eu8C94xemhq7Mu1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(movieData => {
            this.setState({
                reviews: movieData.results
            })
        })
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>Latest Moview Reviews</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
export default LatestMovieReviewsContainer;