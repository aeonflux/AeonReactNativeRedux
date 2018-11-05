import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Image
              source={{
                resizeMode: "contain",
                uri: library.image,
                height: 100,
                width: 100
              }}
            />
          </View>
          <View style={{ flex: 3 }}>
            <CardSection>
              <Text style={{ flex: 1 }}>{library.description}</Text>
            </CardSection>
          </View>
        </View>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        style={{ backgroundColor: "#1e365c" }}
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
