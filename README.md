# Vue 2 Loading Bar
Simplest Youtube Like Loading Bar Component For [Vue 2](http://vuejs.org/)

[DEMO](https://bosnaufal.github.io/vue2-loading-bar)

## Install
You can import [vue2-loading-bar](./src/js/components/index.js) to your vue component file like [this](./src/js/App.js) and process it with your preprocessor.

or

You can install it via NPM
```bash
npm install vue2-loading-bar
```

or

just include [vue2-loading-bar.min.js](./build/vue2-loading-bar.min.js) to your view like [this](./index.html)


## Usage
In Your HTML:
```html
<loading-bar
  id="loading-bar-id"
  custom-class="custom-class"
  :on-error-done="errorDone"
  :on-progress-done="progressDone"
  :progress="progress"
  :direction="direction"
  :error="error" >
</loading-bar>
```


## Props
##### id (String)
custom Id in vue2-loading-bar component

##### customClass (String)
custom className in vue2-loading-bar component

##### progress (Number)
The Progress Percentage of vue2-loading-bar component

##### direction (String)
The Animation Direction of vue2-loading-bar component. You can fill it with `'right'` or `'left'` default is `'right'`

##### error (Boolean)
Indicate the component to showing the error state.

##### onErrorDone (Function, required)
Should change the parent state when the loading-bar has finished with its error state

##### onProgressDone (Function, required)
Should netralize the parent's progress state to be `0`


## Thank You for Making this useful~

## Let's talk about some projects with me
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
