import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies, { movies } from "./movies";
import MoviesList from "./MoviesList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMovieList: [],
      favouriteIDs: [],
      favourites: [{
      id: 24,
      title: "Chasing Amy",
      year: "1997",
      runtime: "113",
      genres: ["Comedy", "Drama", "Romance"],
      director: "Kevin Smith",
      actors: "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
      plot:
        "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },

    {
      id: 26,
      title: "The Silence of the Lambs",
      year: "1991",
      runtime: "118",
      genres: ["Crime", "Drama", "Thriller"],
      director: "Jonathan Demme",
      actors:
        "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
      plot:
        "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
    },

    {
      id: 29,
      title: "Midnight Express",
      year: "1978",
      runtime: "121",
      genres: ["Crime", "Drama", "Thriller"],
      director: "Alan Parker",
      actors: "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
      plot:
        "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
    },
    {
      id: 30,
      title: "Pulp Fiction",
      year: "1994",
      runtime: "154",
      genres: ["Crime", "Drama"],
      director: "Quentin Tarantino",
      actors: "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
      plot:
        "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"
    }]
    };
      this.handleFavourite = this.handleFavourite.bind(this);
  }

  componentDidMount() {
    this.setState({ filteredMovieList: Movies.movies });
  }

   handleFavourite(id) {
   var idArray = this.state.favouriteIDs;

   if(idArray.includes(id)) {
   var idArray = idArray.filter(function(e) { return e !== id });
   } else {
     idArray.push(id)
   }
    this.setState({ favouriteIDs: idArray });
    console.log(this.state.favouriteIDs)
  }

  render() {
    return (
      <div className="App">
         <h1>My Movies</h1>
        <h2>My Favourites</h2>

         <div class="ui four column relaxed grid">
          {this.state.favourites.map(id => {
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

 
        
     <h2>All Movies</h2>
     <div class="Search">
     
       <div class="ui search">
  <div class="ui icon input">
    <input class="prompt" type="text" placeholder="Search all movies" />
    <i class="search icon"></i>
  </div>
  <div class="results"></div>
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

        <h2>Favourites</h2>
      </div>
    );
  }
}

export default App;
