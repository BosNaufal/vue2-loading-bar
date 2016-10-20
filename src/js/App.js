
import LoadingBar from './components/';
import '../css/loading-bar.css';

export default {

  data() {
    return {
      progress: 0,
      error: false,
      direction: 'right'
    }
  },

  render(h) {

    let {
      progress, error, direction,
      progressTo, changeDirection, setToError, errorDone, progressDone } = this

    return (
      <div>
        <LoadingBar
          onErrorDone={ errorDone }
          onProgressDone={ progressDone }
          progress={ progress }
          direction={ direction }
          error={ error } />

        <div class="main">
          <h1 align="center">Vue Loading Bar</h1>
          <p align="center">Progress is { progress }%</p>
          <div class="button-container">
            <button type="button" on-click={ progressTo.bind(this,30) }>Progress to 30</button>
            <button type="button" on-click={ progressTo.bind(this,50) }>Progress to 50</button>
            <button type="button" on-click={ progressTo.bind(this,100) }>Progress to 100</button>
            <button type="button" on-click={ changeDirection }>Change Direction</button>
            <button class="error" type="button" on-click={ setToError.bind(this,true) }>Give An Error</button>
          </div>
        </div>
      </div>
    )
  },

  methods: {
    // Events
    progressTo(number) {
      this.progress = number
    },

    changeDirection() {
      if(this.progress >= 0){
        this.progress = 100
      }
      this.direction = this.direction === 'right' ? 'left' : 'right'
    },

    setToError(bool){
      this.error = bool
    },

    // Callback
    errorDone(){
      this.error = false
    },

    progressDone() {
      this.progress = 0
    },

  },

  mounted () {
    var self = this
    self.progress = 10;
    for (var i = 0; i < 30; i++) {
      if(i > 20 && i < 29){
        setTimeout(function () {
          self.progress += 5;
        },50*i);
      }else{
        setTimeout(function () {
          self.progress ++;
        },10*i);
      }
    }
    setTimeout(function () {
      self.progress = 100;
    },1500);
  }

};
