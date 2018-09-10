<h1 align="center">
  React Step Progress Bar 🌡
</h1>

<h4 align="center">A library to create stunning progress bars and steps in React.</h4>

<br>

<p align="center" >
    <img alt="React Step Progress Bar" src="https://image.ibb.co/iukmPe/react_step_progress_bar.gif" width="100%" />
</p>

<p align="center" >
  <a title="npm version" href="https://www.npmjs.com/package/react-step-progress-bar">
    <img alt="npm version" src="https://badge.fury.io/js/react-step-progress-bar.svg"/>
  </a>
  <a title='License' href="https://github.com/pierreericgarcia/react-step-progress-bar/blob/master/LICENSE">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
  </a>
   <a title='build' href="https://travis-ci.org/pierreericgarcia/react-step-progress-bar">
    <img src='https://travis-ci.org/pierreericgarcia/react-step-progress-bar.svg?branch=master' />
  </a>
  <a title='Greenkeeper' href="https://greenkeeper.io/">
    <img src='https://badges.greenkeeper.io/pierreericgarcia/react-step-progress-bar.svg' />
  </a>
</p>

<p align="center" >
  📚 <a href="https://pierreericgarcia.github.io/react-step-progress-bar">READ THE DOCS</a> 📚
</p>
<p align="center" >
  🌐 <a href="https://pierreericgarcia.github.io/react-step-progress-bar/examples">LIVE EXAMPLES</a> 🌐
</p>

## Key Features

- Create simple progress bars or with steps 🌡
- Customize your steps as you want 🎨
- Create your own step animations 🎥

## Installation

To use this library, you'll need the [npm](http://npmjs.com) CLI installed on your computer. From your command line, using npm:

```bash
npm install --save react-step-progress-bar
```

Or using yarn:

```bash
yarn add react-step-progress-bar
```

## Examples

For more examples take a look at the [official website](https://pierreericgarcia.github.io/react-step-progress-bar).

### Simple progress bar

This example demonstrate how to create a simple progress bar.

```jsx
import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

class ProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
    );
  }
}
```

### Progress bar with steps

This example demonstrate how to create your own progress bar with steps.

```jsx
import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class StepProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
      </ProgressBar>
    );
  }
}
```

## Guides

If you want an in-depth view of how to create your own custom steps and custom step transitions, the [official website](https://pierreericgarcia.github.io/react-step-progress-bar/) have some dedicated guides.

- [Create your custom step](https://pierreericgarcia.github.io/react-step-progress-bar/docs/custom-step-guide)
- [Create your own step transition](https://pierreericgarcia.github.io/react-step-progress-bar/docs/step-transition-guide)

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
      <td>Step component(s)</td>
      <td></td>
      <td>ProgressBar only accepts Step as children</td>
    </tr>
    <tr>
      <td>stepPositions</td>
      <td>array of numbers</td>
      <td></td>
      <td>By default Steps are spaced linearly on the ProgressBar. You can override this by specifying the positions of the steps (in percent)</td>
    </tr>
    <tr>
      <td>unfilledBackground</td>
      <td>string</td>
      <td>rgba($color: lightgrey, $alpha: 0.6);</td>
      <td>This props is used directly on the CSS background property of the unfilled part of the ProgressBar.</td>
    </tr>
    <tr>
      <td>filledBackground</td>
      <td>string</td>
      <td>rgba($color: #0074d9, $alpha: 0.8)</td>
      <td>This props is used directly on the CSS background property of the filled part of the ProgressBar</td>
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
      <td>index</td>
      <td>number</td>
      <td></td>
      <td>The index of the Step in the ProgressBar</td>
    </tr>
    <tr>
      <td>children</td>
      <td>function</td>
      <td></td>
      <td>The function used to render the content of the Step</td>
    </tr>
    <tr>
      <td>transition</td>
      <td>string</td>
      <td></td>
      <td>Use one of the built-ins transitions</td>
    </tr>
    <tr>
      <td>transitionDuration (in ms)</td>
      <td>string</td>
      <td>300</td>
      <td>The duration of the transition</td>
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
