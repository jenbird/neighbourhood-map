import React, { Component } from 'react';
//import ListView from './ListView'
//import SearchBox from './SearchBox'

//   onClick={() => this.props.showInfo(sushiItem)}
   //onKeyPress={() => this.props.showInfo(sushiItem)}

class SideBar extends Component {

  state = {
    //sushi: this.props.sushi,
    query: '',
    searchResults: this.props.sushi
    };

      updateQuery = (query) => {
          this.setState({ query })
          this.updateSearchResults(query);
        }

        updateSearchResults = (query) => {
      //if (query) {
      //this.setState({ query });
            const searchResults = this.props.sushi.filter(sushi => {
              const sushiItem = sushi.name
                .toLowerCase();
                return (
                  sushiItem.indexOf(query) !== -1 &&
                  sushiItem.startsWith(query)
                );
              });
              this.setState({ searchResults });
              //this.props.filterMarkers(searchResults);
          }
          //else {
            //searchResults: this.props.sushi
        //  }
        //}


  render() {

    return (

      <div className="Sidebar">
        <header className="Sidebar-title">
          <h4>Sushi Restaurant List</h4>
        </header>
        <section className="Sidebar-content">

          <section className="Search-box">
          <input
            className="Search-input"
            aria-label="Search for Sushi"
            tabIndex={0}
            type="text"
            placeholder="Filter by Name"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
            />
            </section>


          <ul className="Sidebar-locations-list">
          {this.state.searchResults.map(sushi => (
            <li
              key={sushi.id}
              tabIndex={0}
              onClick={() => this.props.openWindow(sushi)}
              onKeyPress={() => this.props.openWindow(sushi)}

              >
              {sushi.name}
            </li>
         ))}
       </ul>


        </section>
      </div>
    )
  }
}

export default SideBar;
