import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SideBar extends Component {

  constructor(props){
      super(props);

      this.state = {
          query: '',

}
  //  this.handleClick = this.handleClick.bind(this);
  }

    updateQuery = (query) => {
      this.setState({
        query: query
          })
          this.props.updateFilterResults(query)
        }

//From solution at: https://stackoverflow.com/questions/38542503/react-using-handleclick-to-toggle-class-of-mapped-element-by-key
          handleClick = (e) => {
              this.setState({ activeKey: e });
              console.log('clicked' + e);
          };


  render() {



    let filterResults
    let { query } = this.state;
    let { sushi } = this.props;

    //{this.state.name!= undefined?this.state.name:"hello"}

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      filterResults = sushi.filter((sushi) => match.test(sushi.name))
    } else {
      filterResults = sushi;
    }
console.log(filterResults);

    if (this.props.filterResults !== undefined) {
        filterResults.sort(sortBy('name'));
        }


    //const { key } = this.props.sushi;

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

              className={this.state.activeKey === this.props.sushi.id ? 'active' : ''}
              key={sushi.id}
              sushi={this.props.sushi}
              tabIndex={0}
              onClick={(e) => {
                this.props.setSelected(true, e)
                this.props.setSelectedMarker(sushi.id, e)
                this.handleClick.bind(this)
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
