import React, { Component } from 'react';
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
            this.props.updateFilterResults(query)
        }


  render() {

    let filterResults
    let { query } = this.state
    let { sushi } = this.props

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      filterResults = sushi.filter((sushi) => match.test(sushi.name))
    } else {
      filterResults = sushi
    }

    filterResults.sort(sortBy('name'));


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


          {filterResults.map(sushi => (
            <li
              className="Sidebar-list-item"
              key={sushi.id}
              tabIndex={0}
              onClick={this.props.onToggleOpen}
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
