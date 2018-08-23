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
  shouldComponentUpdate(nextProps: *) {
    if (nextProps.position > 100) {
      return false;
    } else if (nextProps.position < 0) {
      return false;
    }
    return true;
  }

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
