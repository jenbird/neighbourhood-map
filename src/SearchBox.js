import React, { Component } from 'react';


/*    <div class="filter-options" tabindex="0" aria-label="Filter result options">
        <h2>Filter Results</h2>
        <select id="neighborhoods-select" name="neighborhoods" onchange="updateRestaurants()" aria-role="listbox" aria-expanded="false">
          <option value="all">All Neighborhoods</option>
        </select>
        */


class SearchBox extends Component {

  state = {
    query: '',
    searchResults: this.props.sushi
    };

    updateQuery = (query) => {
        this.setState({ query: query })
        this.updateSearchResults(query);
      }

      updateSearchResults = (query) => {
        if (query) {
          const searchResults = this.props.sushi.filter(sushi => {
            const sushiItem = sushi.name
              .toLowerCase();
              return (
                sushiItem.indexOf(query) !== -1 &&
                sushiItem.startsWith(query)
              );
            });
            this.setState({ searchResults });
        //  this.props.filterMarkers(searchResults);
      };
        };




    render() {
      return (

        <section className="Search-box">
        <input
          className="Search-input"
          aria-label="Search for Sushi"
          tabIndex={0}
          type="text"
          placeholder="Search for Sushi"
          value={this.state.query}
          onChange={event => this.updateQuery(event.target.value)}
          />
          </section>

      )
    }

  }

export default SearchBox;
