import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {
  componentWillMount() {
    // DataSource - figure out what to render on screen
    // Wrapper around list data
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  // Helper method how to render a single element within List View
  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

// Global state object map them as prop of LibraryList
const mapStatetoProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStatetoProps)(LibraryList);

//Reach to redux store
