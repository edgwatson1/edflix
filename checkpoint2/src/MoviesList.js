import React from "react";
import "./MoviesList.css";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "test",
      isLiked: false
    };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.setState({ isLiked: !this.state.isLiked });
    this.props.handleFavourite(this.props.id);
  }

  render() {
    return (
      <div class="ui card normalcard" onClick={this.handleLike}>
        <div class="image">
          <img src={this.props.image}></img>
        </div>
        <div class="content">
          <div class="hearticon">
            {this.state.isLiked ? (
              <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1575287893/heartclicked_xxvdjn.png"></img>
            ) : (
              <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1575287893/heartempty_obtsxq.png"></img>
            )}
          </div>
          <a class="header">{this.props.title}</a>
          <div class="meta">
            <span class="year">{this.props.year}</span>
          </div>
          <div class="description">Runtime: {this.props.runtime} minutes</div>
        </div>
      </div>
    );
  }
}

export default MoviesList;

// title, year, runtime and poster image.
