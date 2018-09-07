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

import * as React from 'react';
import invariant from 'invariant';
import { Transition } from 'react-transition-group';
import { transitions } from './transitions';
import { getSafePercent } from '../../utils';

type StepProps = {|
  accomplished: boolean,
  position: number,
  index: number,
  children: ({
    accomplished: boolean,
    transitionState: string,
    index: number,
    position: number,
  }) => React.Node,
  transition?: 'scale' | 'rotate' | 'skew',
  transitionDuration?: number,
|};

export class Step extends React.Component<StepProps> {
  render() {
    const {
      accomplished,
      position,
      index,
      children,
      transition = null,
      transitionDuration = 300,
    } = this.props;

    const safePosition = getSafePercent(position);

    let style = {
      left: `${safePosition}%`,
      transitionDuration: `${transitionDuration}ms`,
    };

    return (
      <Transition in={accomplished} timeout={transitionDuration}>
        {(state) => {
          if (transition) {
            invariant(
              transitions[transition] != null,
              `${transition} is not listed in the built-in transitions.`,
            );
            style = {
              ...style,
              ...transitions[transition][state],
            };
          }

          return (
            <div className="step" style={style}>
              {children({
                accomplished,
                position: safePosition,
                transitionState: state,
                index,
              })}
            </div>
          );
        }}
      </Transition>
    );
  }
}
