// @flow

/*
<Step/>

When wrapped by a <ProgressBar/>, this component renders a step of the progression.

The two main props here are accomplished and position.

🏆 accomplished :

Accomplished defines if the step has been achieved.
A step is achieved when the progression percentage is over its position.
Accomplished takes only two value : true or false.

📍 position :

Position represents, wait for it... the position of the step.
It can be defined by how much the step is far from the left of the progress bar.
Where 0 = at the extreme left and 100 = at the extreme right.
Position only accepts values between 0 and 100.
*/

import * as React from "react";
import classnames from "classnames";
import Transition from "react-transition-group/Transition";
import { transitions } from "./transitions";

type StepProps = {|
  accomplished: boolean,
  position: number,
  index: number,
  children: Function,
  transition?: string,
  transitionDuration?: number
|};

export class Step extends React.Component<StepProps> {
  shouldComponentUpdate(nextProps: StepProps) {
    // Block the render if a value over 100 is passed to position
    if (nextProps.position > 100) {
      return false;
      // Block the render if a value under 0 is passed to position
    } else if (nextProps.position < 0) {
      return false;
    }
    return true;
  }

  render() {
    const {
      accomplished,
      position,
      index,
      children,
      transition = null,
      transitionDuration = 300
    } = this.props;

    return (
      <Transition in={accomplished} timeout={transitionDuration}>
        {state => {
          let style = {
            transitionDuration: `${transitionDuration}ms`,
            left: `${position}%`
          };

          if (transition) {
            style = {
              ...style,
              ...transitions[transition][state]
            };
          }

          return (
            <div className="step" style={style}>
              {children({
                accomplished,
                position,
                transitionState: state,
                index
              })}
            </div>
          );
        }}
      </Transition>
    );
  }
}
