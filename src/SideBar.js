import React, { Component } from 'react';
//import ListView from './ListView'


class SideBar extends Component {

/*
<section>
      <div class="filter-options" tabindex="0" aria-label="Filter result options">
        <h2>Filter Results</h2>
        <select id="neighborhoods-select" name="neighborhoods" onchange="updateRestaurants()" aria-role="listbox" aria-expanded="false">
          <option value="all">All Neighborhoods</option>
        </select>
        <select id="cuisines-select" name="cuisines" onchange="updateRestaurants()" aria-role="listbox" aria-expanded="false">
          <option value="all">All Cuisines</option>
        </select>
      </div>
      */


  render() {
    return (
      <div className="Sidebar">
        <header className="Sidebar-title">
          <h4>sidebar content</h4>
        </header>
        <section className="Sidebar-content">
        <p>test</p>
        </section>

      </div>
    );
  }
}

export default SideBar;
