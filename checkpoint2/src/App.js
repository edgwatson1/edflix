import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies, { movies } from "./movies";
import MoviesList from "./MoviesList";
import Favourite from "./Favourite";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullData: [],
      filteredMovieList: [],
      filteredMovieListByID: [],
      favouriteIDs: [],
      searchKeyword: "",
      categorySelect: ""
    };
    this.handleFavourite = this.handleFavourite.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.setState({
      fullData: Movies.movies,
      filteredMovieList: Movies.movies
    });
  }

  handleSearch(e) {
    this.setState({ searchKeyword: e.target.value });

    var filteredArr = this.state.fullData.filter(el =>
      el.title.includes(this.state.searchKeyword)
    );

    this.setState({ filteredMovieList: filteredArr });
  }

  handleCategorySwitch(e) {
    if (e.target.value === "All") {
      this.setState({ filteredMovieList: this.state.fullData });
    } else {
      this.setState({ categorySelect: e.target.value });

      var filteredArr = this.state.fullData.filter(el =>
        el.genres.includes(e.target.value)
      );

      this.setState({ filteredMovieList: filteredArr });
    }
  }

  handleFavourite(id) {
    var idArray = this.state.favouriteIDs;

    if (idArray.includes(id)) {
      var idArray = idArray.filter(e => e !== id);
    } else {
      idArray.push(id);
    }

    this.setState({ favouriteIDs: idArray });

    var filteredArr = this.state.fullData.filter(el => idArray.includes(el.id));

    this.setState({ filteredMovieListByID: filteredArr });

    console.log(this.state.favouriteIDs);
  }

  render() {
    return (
      <div className="App">
        <div className="logo">
          <h1>
            <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1575301906/edflix_gytezk.png"></img>
          </h1>
        </div>
        <hr />

        <div className="favouritesheader">
          {this.state.filteredMovieListByID.length === 0 ? (
            ""
          ) : (
            <h2>My Favourites</h2>
          )}

          <div class="ui grid">
            {this.state.filteredMovieListByID.map(id => {
              return (
                <div class="four wide column">
                  <Favourite
                    id={id.id}
                    title={id.title}
                    year={id.year}
                    runtime={id.runtime}
                    image={id.posterUrl}
                    handleFavourite={this.handleFavourite}
                    liked={"Yes"}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <h2>All Movies</h2>
        <div class="Search">
          <div class="ui search">
            <div class="ui icon input">
              <input
                class="input"
                type="text"
                placeholder="Search all movies"
                value={this.state.searchKeyword}
                onChange={this.handleSearch}
              />
              <i class="search icon"></i>
            </div>
            <div class="results"></div>""
            <select
              class="ui dropdown"
              onChange={this.handleCategorySwitch.bind(this)}
            >
              <option value="All">All</option>
              {Movies.genres.map(id => {
                return <option value={id}>{id}</option>;
              })}
            </select>
          </div>
        </div>

        <div class="ui four column relaxed grid">
          {this.state.filteredMovieList.map(id => {
            return (
              <div class="column">
                <MoviesList
                  id={id.id}
                  title={id.title}
                  year={id.year}
                  runtime={id.runtime}
                  image={id.posterUrl}
                  handleFavourite={this.handleFavourite}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
