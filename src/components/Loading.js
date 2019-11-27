import React, { Component } from "react";
import { observer } from "mobx-react";
import './styles/loading.css'

@observer
class Loading extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="dot1" />
        <div className="dot2" />
      </div>
    );
  }
}
export default Loading;
