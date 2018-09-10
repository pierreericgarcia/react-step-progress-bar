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

import * as React from 'react';
import invariant from 'invariant';
import { Step } from '../step';
import { getSafePercent, getStepPosition } from '../../utils';

type ProgressBarProps = {|
  percent: number,
  children: React.ChildrenArray<React.Element<typeof Step>>,
  stepPositions?: Array<number>,
  unfillBackground?: string,
  fillBackground?: string,
  width?: number,
  height?: number,
  hasStepZero?: boolean,
  text?: string,
|};

export class ProgressBar extends React.Component<ProgressBarProps> {
  render() {
    const {
      percent,
      children,
      stepPositions = [],
      unfillBackground = null,
      fillBackground = null,
      width = null,
      height = null,
      hasStepZero = true,
      text = null,
    } = this.props;

    invariant(
      !(stepPositions.length > 0 && stepPositions.length !== React.Children.count(children)),
      'When specifying a stepPositions props, the number of children must match the length of the positions array.',
    );

    const safePercent = getSafePercent(percent);

    return (
      <div className="RSPBprogressBar" style={{ background: unfillBackground, width, height }}>
        {/* Here we're looping over the children to clone them and add them custom props */}
        {React.Children.map(children, (step, index) => {
          const position = stepPositions.length > 0
            ? stepPositions[index]
            : getStepPosition(React.Children.count(children), index, hasStepZero);

          return React.cloneElement(step, {
            accomplished: position <= safePercent,
            position,
            index,
          });
        })}

        {text ? <div className="RSPBprogressBarText">{text}</div> : null}

        <div
          className="RSPBprogression"
          style={{
            background: fillBackground,
            width: `${safePercent}%`,
          }}
        />
      </div>
    );
  }
}
