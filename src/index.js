// @flow

import * as React from "react";
import "./styles.css";
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

type ProgressBarProps = {|
  percent: number,
  children: Function,
  steps?: number,
  unfillColor?: string,
  fillColor?: string
|};

export class ProgressBar extends React.Component<ProgressBarProps> {
  render() {
    const {
      percent,
      children,
      steps = 6,
      unfillColor = null,
      fillColor = null
    } = this.props;

    return (
      <div className="stepProgressBar" style={{ backgroundColor: unfillColor }}>
        {new Array(steps)
          .fill(0)
          .map((e, i) => i)
          .map(step =>
            children(
              {
                accomplished: (100 / (steps - 1)) * step <= percent,
                position: (100 / (steps - 1)) * step
              },
              step
            )
          )}
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
