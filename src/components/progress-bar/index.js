// @flow

import * as React from "react";
import classnames from "classnames";

type ProgressBarProps = {|
  percent: number,
  children: Function,
  steps?: number,
  unfillColor?: string,
  fillColor?: string,
  width?: number,
  height?: number
|};

export class ProgressBar extends React.Component<ProgressBarProps> {
  shouldComponentUpdate(nextProps: *) {
    if (nextProps.percent > 100) {
      return false;
    } else if (nextProps.percent < 0 || nextProps.steps < 0) {
      return false;
    }
    return true;
  }

  render() {
    const {
      percent,
      children,
      steps = 6,
      unfillColor = null,
      fillColor = null,
      width = null,
      height = null
    } = this.props;

    return (
      <div
        className="stepProgressBar"
        style={{ backgroundColor: unfillColor, width, height }}
      >
        {Array.from(Array(steps).keys()).map(step => {
          return children(
            {
              accomplished: (100 / (steps - 1)) * step <= percent,
              position: (100 / (steps - 1)) * step
            },
            step
          );
        })}
        <div
          className="progression"
          style={{
            backgroundColor: fillColor,
            width: `${percent}%`
          }}
        />
      </div>
    );
  }
}
