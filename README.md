# Checkpoint 2 review

## React
Let's create a new React project named **movies**, with components `<MoviesList />` and `<Movie />` that will use the data from [`/movies.json`](https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json).

#### Requirements:

1. Show a list of all movies

Create a component `<MoviesList />` that will render a list of `<Movie />`s.
Each `<Movie />` in the list should show title, year, runtime and poster image.

2. Add/Remove from favorites

Add a button 'Add to favorites' on each `<Movie />`. On click the movie should be added to the favorites list.
After it's been added the button should show 'Remove from favorites'. Clicking it again removes it from the favorites.

3. Display the favorites list on top of the movie list.

Reuse the `<MoviesList/>` component to display a list on top of the main list. Show only 5 random favorites (or less if there are less than 5 favorites).

4. Pick a random favorite

Make a 'Pick a favorite' button. On click, a random movie will be displayed in a different page (use `react-router` for this).
The route should be something like `/movie/84`, i.e.: `/movie/:id`
Don't forget to add a link to return to the home page.

5. Add a dropdown to filter movies by **genres**.

6. Add a search

Typing in the search will look in the movies title and actors.

Example:
Searching for 'swan' will return the movie 'Black Swan' and also the movie 'Sunset Boulevard' with 'Gloria Swanson'