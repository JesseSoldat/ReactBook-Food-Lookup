import React, { Component } from 'react';
import FoodSearch from  './FoodSearch';
import SelectedFoods from './SelectedFoods';

import './App.css';

class App extends Component {
  state = {
    selectedFoods: [],
  };

  render() {
    return (
      <div className="App">
        <div className="ui text container">
          <SelectedFoods
            foods={this.state.selectedFoods} 
            onFoodClick={
              (idx) => (
                this.setState({
                  selectedFoods: [
                    ...this.state.selectedFoods.slice(0, idx),
                    ...this.state.selectedFoods.slice(idx + 1,
                      this.state.selectedFoods.length)
                  ],
                })
              )
            }

          />
          <FoodSearch />
        </div>
      </div>
    );
  }
}

export default App;
