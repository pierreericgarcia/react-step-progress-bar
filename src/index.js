// @flow

import * as React from 'react';
import './styles.css';
import classnames from 'classnames';

type StepProps = {
  accomplished: boolean,
  position: number,
  big?: boolean,
  text?: string,
};

export class Step extends React.Component<StepProps> {
  render() {
    const { accomplished, big = false, position, text = null } = this.props;

    return (
      <div
        className={classnames('step', {
          accomplished,
          big,
        })}
        style={{ left: `${position}%` }}
      >
        {text ? <span className="stepText">{text}</span> : null}
      </div>
    );
  }
}

type ProgressBarProps = {
  percent: number,
  children: Function,
  steps: number,
};

export class ProgressBar extends React.Component<ProgressBarProps> {
  render() {
    const { percent, steps = 6, children } = this.props;

    return (
      <div className="stepProgressBar">
        {new Array(steps).fill(0).map((e,i) => i).map(step =>
          children(
            {
              accomplished: (100 / (steps - 1)) * step <= percent,
              big: step === 0 || step === steps - 1,
              position: (100 / (steps - 1)) * step,
            },
            step
          )
        )}
        <div
          className="progression"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    );
  }
}