// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.changeSearchText = this.changeSearchText.bind(this);
    this.changeSelectedGenre = this.changeSelectedGenre.bind(this);
    this.changeBookmarkedOnly = this.changeBookmarkedOnly.bind(this);
    this.registerMovie = this.registerMovie.bind(this);
  }
  changeSearchText(e) {
    this.setState({ searchText: e.target.value });
  }

  changeSelectedGenre(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  changeBookmarkedOnly() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  registerMovie(film) {
    this.setState({ movies: [...this.state.movies, film] });
  }

  moviesFilter() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText) {
      return movies.filter((movie) => movie.title.indexOf(searchText) ||
        movie.subtitle.indexOf(searchText) ||
        movie.storyline.indexOf(searchText));
    }
    return movies;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.moviesFilter} />
        <AddMovie onClick={this.registerMovie} />
      </div>
    );
  }
}
