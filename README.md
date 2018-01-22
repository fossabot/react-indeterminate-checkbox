# 🌕 🌗 🌑 React Indeterminable Checkbox 🌑 🌗  🌕

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Dependencies](https://david-dm.org/micheleriva/react-indeterminate-checkbox.svg)](https://david-dm.org/micheleriva/react-indeterminate-checkbox)
[![Maintainability](https://api.codeclimate.com/v1/badges/76e16f7e4ea426c0734b/maintainability)](https://codeclimate.com/github/micheleriva/react-indeterminate-checkbox/maintainability)

Simple checkbox component with "indeterminate" status support.

### Live Demo
[Live demo here!](https://codesandbox.io/s/2z72q9k87r)

### Installation

You can install this package with `npm` or `yarn`

```bash
npm install react-indeterminate-checkbox
```

```bash
yarn add react-indeterminate-checkbox
```

### Usage

```jsx
import IndeterminableCheckbox from 'react-indeterminate-checkbox'

const checkBox = () => {

    <IndeterminableCheckbox
       change={val => console.log(val)}
       name="mycheckbox-name"
       indeterminate={true}
    />

}

```

### Props

| Name | Value |
| ---- | ----- |
| `change` | Returns `0`, `1` or `2`. <br /> `0`: indeterminable <br /> `1`: checked <br /> `2`: unchecked |
| `name` | the checkbox input name |
| `indeterminate` | Boolean value, set `true` if you want to start with an indeterminable status. <br /> Set to `false` if you want it to start with the checked value. |