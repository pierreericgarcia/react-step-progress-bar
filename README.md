<h1 align="center">
  React Step Progress Bar 🌡
</h1>

<h4 align="center">A library to easily create progress bar with steps in React ⚛️</h4>

<br>

<p align="center" >
    <img alt="React Step Progress Bar" src="https://image.ibb.co/fn3Kxe/reactpro2.gif" width="100%" />
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
  </tbody>
</table>

#### License

MIT

---

> GitHub [@pierreericgarcia](https://github.com/pierreericgarcia) &nbsp;&middot;&nbsp;
> Twitter [@pierrericgarcia](https://twitter.com/pierrericgarcia) &nbsp;&middot;&nbsp;
> LinkedIn [@pierre-eric-garcia](https://www.linkedin.com/in/pierre-eric-garcia) &nbsp;&middot;&nbsp;
> Medium [@pierrericgarcia](https://medium.com/@pierrericgarcia)
