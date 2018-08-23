import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SideBar extends Component {

  constructor(props){
      super(props);

      this.state = {
          query: '',
          animation: 0,
          windowOpen: false,
}
  }

    updateQuery = (query) => {
      this.setState({
        query: query,
          })
          this.props.updateFilterResults(query)
        }


  render() {

    let filterResults
    let { query } = this.state;
    let { sushi } = this.props;


    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      filterResults = sushi.filter((sushi) => match.test(sushi.name))
    } else {
      filterResults = sushi;
    }

    if (this.props.filterResults !== undefined) {
        filterResults.sort(sortBy('name'));
        }


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

            {this.props.filterResults === undefined ?
              <p className="Error-alert">Could not load restaurants...</p> :

            (this.props.filterResults.map(sushi => (
            <li
              key={sushi.id}
              location={sushi.position}
              tabIndex={0}
              role="menuitem"
              onClick={(e) => {
                this.props.setSelected(true)
                this.props.setSelectedMarker(e, sushi.location)
                this.props.setAnimation(1)
                setTimeout(() => this.props.setAnimation(0), 2000)
              }}
              >
              {sushi.name}
            </li>
         ))
       )
       }
        </ul>
        </section>
    )
}
}


export default SideBar;
