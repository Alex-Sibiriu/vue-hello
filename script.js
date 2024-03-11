const { createApp } = Vue;

createApp({

  data() {
    return {
      message: 'Benvenuto in Vue!',
      imgClock: 'https://images.hindustantimes.com/tech/img/2022/04/03/960x540/meteorite-6059746_1920_1627288222483_1648959753791.jpg',
      countDown: 7,
      tenMultiple: true,
      countDownProgress: setInterval(() => {
        this.countDown--
      }, 1000)
    }
  },

  methods: {

    endCountDown() {
        if (this.countDown === 0) {
          clearInterval(this.countDownProgress);
          this.imgClock = 'https://cdn.pixabay.com/photo/2016/10/27/10/35/earth-1773943_1280.jpg'
        }
    },
    
    checkCountDown() {
      setInterval(() => {
        this.endCountDown()
      }, 1000)
    },
    
    restart() {
      this.countDown = 7,
      this.imgClock = 'https://images.hindustantimes.com/tech/img/2022/04/03/960x540/meteorite-6059746_1920_1627288222483_1648959753791.jpg',

      clearInterval(this.countDownProgress);

      this.countDownProgress = setInterval(() => {
        this.countDown--
      }, 1000);

      this.checkCountDown();
    }
  },

  mounted(){
    this.checkCountDown();
  } 

}).mount('#app');