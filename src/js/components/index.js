/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Vue 2 Loading Bar - Version 0.0.1
*
*/

module.exports = {
  name: "LoadingBar",

  props: {
    id: String,
    customClass: String,

    progress: {
      type: Number,
      default: 0
    },

    // the direction of loading bar
    direction: {
      type: String,
      default: "right"
    },

    error: Boolean, // Loading Bar error state

    onErrorDone: {
      type: Function,
      required: true
    },

    onProgressDone: {
      type: Function,
      required: true
    },

  },

  data() {

    return {
      // To show
      show: true,

      // binding class when it end
      full: '',

      // state to animate the width of loading bar
      width: 0,

      // indicate the loading bar is in 100% ( so, wait it till gone )
      wait: false,

      // Error State
      myError: false
    }
  },

  render(h) {
    let {
      direction, customClass, id,
      width, show, full, myError,
      styling } = this

    return(
      <div>
        { show ?
          <div
            id={ id ? id : null }
            class={
              'LoadingBar LoadingBar--to_' + direction + ' ' +
              ( customClass ? customClass : '' ) +
              ( myError ? 'LoadingBar--error' : '' ) +
              ( full ? 'LoadingBar--full' : '')
            }
            style={ styling() }>
            <div class="LoadingBar-glow"></div>
          </div>
        : null }
      </div>
    )
  },

  watch:{
    progress(val,old){
      if(old !== val){
        this.width = val
        setTimeout(() => {
          this.isFull()
        })
      }
    },

    error(val,old){
      if(old !== val) {
        if(val) {
          this.width = 100
          this.myError = true
          setTimeout(() => {
            this.isFull()
          })
        }
      }
    }

  },

  methods: {
    // Check whether the proggress is full
    isFull() {
      // Full Indicator
      let isFull = this.width === 100

      // When the progress end or full
      if(isFull){
        // Prevent new progress change
        this.wait = true

        // Start animate it
        setTimeout(() => {

          // animate when element removed
          this.full = true
          this.myError = false

          this.onErrorDone()

          setTimeout(() => {
            //remove bar element
            this.show = false
            // New Element is available to create now
            this.width = 0
            this.wait = false

            setTimeout(() => {

              // Show Bar
              this.full = ''
              this.show = true

              this.onProgressDone()

            });

          // Duration to Waiting for slick hiding animation
          },250);

        // Duration is depend on css animation-duration of loading-bar
        },700);
      }
    },

    styling(){
      // When loading bar still in progress
      if(!this.wait){
        return { width: `${this.width}%` };
      // When loading bar end
      }else{
        // Make it stuck at 100 to waiting the animation
        return{ width: `100%` };
      }
    }
  },


};
