import React, { Component } from 'react';
//import ListView from './ListView'
//import SearchBox from './SearchBox'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class SideBar extends Component {

  state = {
    query: '',
    };


        updateQuery = (query) => {
            this.setState({
              query: query
            })
            //this.props.setMarkerQuery(query)
            this.props.updateSearchResults(query)

        }



  render() {

    let searchResults
    let { query } = this.state
    let { sushi } = this.props
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      searchResults = sushi.filter((sushi) => match.test(sushi.name))
    } else {
      searchResults = sushi
    }
    searchResults.sort(sortBy('searchResults.name'))


    return (

      <div className="Sidebar">
        <header className="Sidebar-title">
          <h4>Sushi Restaurant List</h4>
        </header>
        <section className="Sidebar-content">

          <input
            className="Search-box"
            aria-label="Search for Sushi"
            tabIndex={0}
            type="text"
            placeholder="Filter by Name"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
            />

          <ul
            className="Sidebar-locations-list"
            sushi={this.props.sushi}

            >


          {searchResults.map(sushi => (
            <li
              className="Sidebar-list-item"
              key={sushi.id}
              tabIndex={0}
              onClick={()=> {this.props.showInfo} }
              onKeyPress={() => {this.props.showInfo} }

              >
              {sushi.name}
            </li>
         ))
       }

        </ul>



        </section>
      </div>

    )

}
}


export default SideBar;
