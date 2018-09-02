<h1 align="center">
  React Step Progress Bar 🌡
</h1>

<h4 align="center">A library to create stunning progress bars and steps in React.</h4>

<br>

<p align="center" >
    <img alt="React Step Progress Bar" src="https://image.ibb.co/fn3Kxe/reactpro2.gif" width="100%" />
</p>

<p align="center" >
  <a title="npm version" href="https://www.npmjs.com/package/react-step-progress-bar">
    <img alt="npm version" src="https://badge.fury.io/js/react-step-progress-bar.svg"/>
  </a>
  <a title='License' href="https://github.com/pierreericgarcia/react-step-progress-bar/blob/master/LICENSE">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
  </a>
  <a title='Greenkeeper' href="https://greenkeeper.io/">
    <img src='https://badges.greenkeeper.io/pierreericgarcia/react-step-progress-bar.svg' />
  </a>
</p>

<p align="center" >
🌐 Live demo : https://react-step-progress-bar.herokuapp.com/
</p>

## Key Features

- Create a `<ProgressBar/>` with `<Step/>`s
- Customize `<Step/>` text and colors
- Create and use your own `<Step/>` component

## Installation

To use this library, you'll need the [npm](http://npmjs.com) CLI installed on your computer. From your command line, using npm:

```bash
npm install --save react-step-progress-bar
```

Or using yarn:

```bash
yarn add react-step-progress-bar
```

## Example

```jsx
import { React } from "react";
import "react-step-progress-bar/index.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class StepProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar percent={75} steps={8}>
        {({ ...props }, index) => <Step {...props} text={index + 1} />}
      </ProgressBar>
    );
  }
}
```

## API

### `<ProgressBar/>`

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>percent</td>
      <td>number</td>
      <td></td>
      <td>Percantage of progression</td>
    </tr>
    <tr>
      <td>children</td>
      <td>function</td>
      <td></td>
      <td>The function used to render the Step components</td>
    </tr>
    <tr>
      <td>steps</td>
      <td>number</td>
      <td>6</td>
      <td>The number of Step render in the ProgressBar</td>
    </tr>
    <tr>
      <td>unfillColor</td>
      <td>string</td>
      <td>rgba($color: lightgrey, $alpha: 0.6)</td>
      <td>The color of the ProgressBar when it is empty</td>
    </tr>
    <tr>
      <td>fillColor</td>
      <td>string</td>
      <td>rgba($color: #0074d9, $alpha: 0.8)</td>
      <td>The color of the ProgressBar when it is full</td>
    </tr>
    <tr>
      <td>width (in pixel)</td>
      <td>number</td>
      <td>100%</td>
      <td>The width of the progress bar in pixel</td>
    </tr>
    <tr>
      <td>height (in pixel)</td>
      <td>number</td>
      <td>10</td>
      <td>The height of the progress bar in pixel</td>
    </tr>
    <tr>
      <td>hasStepZero</td>
      <td>boolean</td>
      <td>true</td>
      <td>Tells if steps position should start at 0 or not</td>
    </tr>
    <tr>
      <td>text</td>
      <td>string</td>
      <td></td>
      <td>Add a text in the middle of the progress bar</td>
    </tr>
  </tbody>
</table>

### `<Step/>`

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>accomplished</td>
      <td>boolean</td>
      <td></td>
      <td>Tells if this Step has been accomplished</td>
    </tr>
    <tr>
      <td>position</td>
      <td>number</td>
      <td></td>
      <td>The position in percentage of the Step on the ProgressBar</td>
    </tr>
    <tr>
      <td>big</td>
      <td>boolean</td>
      <td>false</td>
      <td>Set the size of the Step</td>
    </tr>
    <tr>
      <td>text</td>
      <td>string</td>
      <td></td>
      <td>The text hold in the Step</td>
    </tr>
    <tr>
      <td>unaccomplishedColor</td>
      <td>string</td>
      <td>lightgrey</td>
      <td>Color of the Step when not accomplished yet</td>
    </tr>
    <tr>
      <td>accomplishedColor</td>
      <td>string</td>
      <td>#0074d9</td>
      <td>Color of the Step when it is accomplished</td>
    </tr>
    <tr>
      <td>transitionStyles</td>
      <td>object</td>
      <td></td>
      <td>This object lets you define css rules depending on the current state of the step. There are 4 main states a Step can be in: entering, entered, exiting and exited.</td>
    </tr>
    <tr>
      <td>transitionDuration (in ms)</td>
      <td>number</td>
      <td>300</td>
      <td>This lets you define how many milliseconds will be lasting the transition from one state to an other.</td>
    </tr>
  </tbody>
</table>

#### License

MIT

---

> GitHub [@pierreericgarcia](https://github.com/pierreericgarcia) &nbsp;&middot;&nbsp;
> Twitter [@pierrericgarcia](https://twitter.com/pierrericgarcia) &nbsp;&middot;&nbsp;
> LinkedIn [@pierre-eric-garcia](https://www.linkedin.com/in/pierre-eric-garcia) &nbsp;&middot;&nbsp;
> Medium [@pierrericgarcia](https://medium.com/@pierrericgarcia)
