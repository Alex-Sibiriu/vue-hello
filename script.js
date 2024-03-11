const { createApp } = Vue;

createApp({

  data() {
    return {
      message: 'Benvenuto in Vue!',
      imgClock: 'img/clock.png'
    }
  },
}).mount('#app');