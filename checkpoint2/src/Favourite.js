import React from "react";
import "./Favourite.css";

class Favourite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "test",
      isLiked: false
    };
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    if (this.props.liked === "Yes") {
      this.setState({ isLiked: true });
    }
  }

  handleLike() {
    this.setState({ isLiked: !this.state.isLiked });
    this.props.handleFavourite(this.props.id);
  }

  render() {
    return (
      <div class="ui card liked" onClick={this.handleLike}>
        <div class="image">
          <img src={this.props.image}></img>
        </div>
        <div class="content">
          <div class="hearticon">
            <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1575287893/heartclicked_xxvdjn.png"></img>
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

export default Favourite;

// title, year, runtime and poster image.
