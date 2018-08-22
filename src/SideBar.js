/*global google*/
import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SideBar extends Component {

  constructor(props){
      super(props);

      this.state = {
          query: '',
          selectedMarker: {},
          animation: 0,
          windowOpen: ''
}
  //  this.handleClick = this.handleClick.bind(this);
  }

    updateQuery = (query) => {
      this.setState({
        query: query,
          })
          this.props.updateFilterResults(query)
        }

/*From solution at: https://stackoverflow.com/questions/38542503/react-using-handleclick-to-toggle-class-of-mapped-element-by-key
          handleClick = (e) => {
              this.setState({ activeKey: e });
              console.log('clicked' + e);
          };
          */

/* taken out to App...
handleClick = (e, marker) => {
  //From https://davidwalsh.name/nodelist-array
    //let markers = [].slice.call(document.querySelectorAll("Markers"));
    //new google.maps.event.trigger( markers, 'click' );
    this.setState({
			selectedMarker: marker,
			windowOpen: true,
			position: this.props.location,
})
}
*/



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

    if (this.props.filterResults !== undefined) {
        filterResults.sort(sortBy('name'));
        }

        console.log(this.props.selectedMarker);



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
                //this.props.setSelected(true)
                this.props.setSelectedMarker(e, sushi.location)
                this.props.setAnimation(1)
                setTimeout(() => this.props.setAnimation(0), 2000)
                this.props.handleClick(e, sushi.location, sushi.location)

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
