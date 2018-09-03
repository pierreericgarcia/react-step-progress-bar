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
import invariant from "invariant";
import Transition from "react-transition-group/Transition";
import { transitions } from "./transitions";

type StepProps = {|
  accomplished: boolean,
  position: number,
  index: number,
  children: Function,
  transition?: "scale" | "rotate" | "skew",
  transitionDuration?: number
|};

export class Step extends React.Component<StepProps> {
  getPosition() {
    const { position } = this.props;

    invariant(
      !(position > 100 || position < 0 || typeof position != "number"),
      `The value passed to position needs to be a number between 0 and 100 (passed value: ${position}).`
    );

    return Math.min(100, Math.max(this.props.position, 0));
  }

  render() {
    const {
      accomplished,
      index,
      children,
      transition = null,
      transitionDuration = 300
    } = this.props;

    const position = this.getPosition();

    let style = {
      left: `${position}%`,
      transitionDuration: `${transitionDuration}ms`
    };

    return (
      <Transition in={accomplished} timeout={transitionDuration}>
        {state => {
          if (transition) {
            invariant(
              transitions[transition] != null,
              `${transition} is not listed in the built-in transitions.`
            );
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
