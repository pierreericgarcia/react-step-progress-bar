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
  height?: number,
  hasStepZero?: boolean,
  text?: string
|};

export class ProgressBar extends React.Component<ProgressBarProps> {
  shouldComponentUpdate(nextProps: ProgressBarProps) {
    // Block the render if a value over 100 is passed to percent
    if (nextProps.percent > 100) {
      return false;
      // Block the render if a value under 0 is passed to percent
    } else if (nextProps.percent < 0) {
      return false;
      // Block the rende if a value under 0 is passed to steps
    } else if (nextProps.steps != null && nextProps.steps < 0) {
      return false;
    }
    return true;
  }

  getStepStatus(steps: number, stepIndex: number) {
    const { percent, hasStepZero = true } = this.props;

    if (hasStepZero) {
      return {
        accomplished: (100 / (steps - 1)) * stepIndex <= percent,
        position: (100 / (steps - 1)) * stepIndex
      };
    } else {
      return {
        accomplished: (100 / steps) * (stepIndex + 1) <= percent,
        position: (100 / steps) * (stepIndex + 1)
      };
    }
  }

  render() {
    const {
      percent,
      children,
      steps = 0,
      unfillColor = null,
      fillColor = null,
      width = null,
      height = null,
      text = null
    } = this.props;

    return (
      <div
        className="progressBar"
        style={{ backgroundColor: unfillColor, width, height }}
      >
        {/* Here we're looping over the children to clone them and add them custom props */}
        {React.Children.map(children, (step, index) => {
          const { accomplished, position } = this.getStepStatus(
            children.length,
            index
          );

          return React.cloneElement(step, {
            accomplished,
            position,
            index
          });
        })}
        {text ? <div className="progressBarText">{text}</div> : null}
        <div
          className="progression"
          style={{
            background: fillColor,
            width: `${percent}%`
          }}
        />
      </div>
    );
  }
}
