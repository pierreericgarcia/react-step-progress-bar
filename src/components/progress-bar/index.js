// @flow

/*
<ProgressBar/>

This component displays a progress bar.

The two main props here are percent and children.

💯 percent :

Percent defines the progression of the progress bar.
It has to be a number between 0 and 100 (other values won't be accepted).

👶 children :

Children has to be a function.
The function will receive the parameters accomplished and position
which are used in the <Step/> component.
If nothing is passed, it will renders a progress bar without any intermediate steps.
*/

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
    // Block the render if a value over 100 is passed to percent
    if (nextProps.percent > 100) {
      return false;
      // Block the render if a value under 0 is passed to percent
      // or a value under 0 is passed to steps
    } else if (nextProps.percent < 0 || nextProps.steps < 0) {
      return false;
    }
    return true;
  }

  render() {
    const {
      percent,
      children,
      steps = 0,
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
        {/* Here we're creating an array of length steps to loop over it and create as
        many <Step /> component */}
        {Array.from(Array(steps)).map((emptyValue, index) => {
          return children(
            {
              accomplished: (100 / (steps - 1)) * index <= percent,
              position: (100 / (steps - 1)) * index
            },
            index
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
