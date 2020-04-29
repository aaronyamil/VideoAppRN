import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';
import Player from './src/player/components/player';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  };
  async componentDidMount() {
    const movies = await API.getSuggestions(10);
    const categories = await API.getMovies();
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>Hola</Text>
        </Header>
        <Player />
        <CategoryList list={this.state.categoryList} />
        <Text>buscador</Text>
        <Text>categorias</Text>
        <Text>sugerencias</Text>
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
