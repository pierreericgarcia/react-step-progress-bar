// @flow

import * as React from "react";
import classnames from "classnames";

type StepProps = {|
  accomplished: boolean,
  position: number,
  big?: boolean,
  text?: string,
  unaccomplishedColor?: string,
  accomplishedColor?: string
|};

export class Step extends React.Component<StepProps> {
  shouldComponentUpdate(nextProps: *) {
    if (nextProps.position > 100) {
      return false;
    } else if (nextProps.position < 0) {
      return false;
    }
    return true;
  }

  render() {
    const {
      accomplished,
      position,
      big = false,
      text = null,
      unaccomplishedColor = null,
      accomplishedColor = null
    } = this.props;

    return (
      <div
        className={classnames("step", {
          accomplished,
          big
        })}
        style={{
          left: `${position}%`,
          backgroundColor: accomplished
            ? accomplishedColor
            : unaccomplishedColor
        }}
      >
        {text ? <span className="stepText">{text}</span> : null}
      </div>
    );
  }
}
