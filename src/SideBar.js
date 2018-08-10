import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SideBar extends Component {

  state = {
    query: '',
    isClicked: false,
    };

    updateQuery = (query) => {
      this.setState({
        query: query
          })
          this.props.updateFilterResults(query)
        }

    toggleClass = (e) => {
      this.setState({ isClicked: !this.state.isClicked})
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


        <section className="Sidebar-content" tabIndex={0}>

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
              className={(this.state.isClicked) ? 'bm-item clicked': 'bm-item notClicked' }
              key={sushi.id}
              tabIndex={0}
              onClick={() => {
                this.props.setSelected(true)
                this.props.setSelectedMarker(sushi.id)
                this.toggleClass
              }}
              >
              {sushi.name}
            </li>
         ))
       }
        </ul>
        </section>

    )
}
}


export default SideBar;
