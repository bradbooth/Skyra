import React from "react";
import { render } from "react-dom";
import { css } from "glamor";
import glamorous from "glamorous";


// Delay the unmounting of a component,
// to for example, play an animation.

function delayUnmounting(Component) {
  return class extends React.Component {
    state = {
      shouldRender: this.props.isMounted
    };

    componentDidUpdate(prevProps) {
      if (prevProps.isMounted && !this.props.isMounted) {
        setTimeout(
          () => this.setState({ shouldRender: false }),
          this.props.delayTime
        );
      } else if (!prevProps.isMounted && this.props.isMounted) {
        this.setState({ shouldRender: true });
      }
    }

    render() {
      return this.state.shouldRender ? <Component {...this.props} /> : null;
    }
  };
}

export default delayUnmounting