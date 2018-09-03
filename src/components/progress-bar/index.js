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
import invariant from "invariant";
import classnames from "classnames";
import { Step } from "../step";

type ProgressBarProps = {|
  percent: number,
  children: Function,
  stepPositions?: Array<number>,
  unfillBackground?: string,
  fillBackground?: string,
  width?: number,
  height?: number,
  hasStepZero?: boolean,
  text?: string
|};

export class ProgressBar extends React.Component<ProgressBarProps> {
  getPercent() {
    const { percent } = this.props;

    if (percent > 100 || percent < 0 || typeof percent != "number") {
      console.warn(
        `[react-step-progress-bar]: The value passed to percent needs to be a number between 0 and 100 (passed value: ${percent}).`
      );
    }
    return Math.min(100, Math.max(this.props.percent, 0));
  }

  getPosition(steps: number, stepIndex: number) {
    const { hasStepZero = true } = this.props;

    if (hasStepZero) {
      return (100 / (steps - 1)) * stepIndex;
    } else {
      return (100 / steps) * (stepIndex + 1);
    }
  }

  render() {
    const {
      children,
      stepPositions = [],
      unfillBackground = null,
      fillBackground = null,
      width = null,
      height = null,
      text = null
    } = this.props;

    invariant(
      !(stepPositions.length > 0 && stepPositions.length !== children.length),
      "When specifying a stepPositions props, the number of children must match the length of the positions array."
    );

    const percent = this.getPercent();

    return (
      <div
        className="progressBar"
        style={{ background: unfillBackground, width, height }}
      >
        {/* Here we're looping over the children to clone them and add them custom props */}
        {React.Children.map(children, (step, index) => {
          invariant(
            step.type === Step,
            "<ProgressBar/> only accepts <Step/> has children."
          );

          const position =
            stepPositions.length > 0
              ? stepPositions[index]
              : this.getPosition(children.length, index);

          return React.cloneElement(step, {
            accomplished: position <= percent,
            position,
            index
          });
        })}

        {text ? <div className="progressBarText">{text}</div> : null}

        <div
          className="progression"
          style={{
            background: fillBackground,
            width: `${percent}%`
          }}
        />
      </div>
    );
  }
}
