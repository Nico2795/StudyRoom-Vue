<template>
<!--   <MusicCom></MusicCom>
  <ToDo></ToDo> -->
  <TimerComponent></TimerComponent>
  <NavComponent></NavComponent>
</template>

<script>
import TimerComponent from './Pomodoro/TimerComponent.vue';
/* import MusicCom from './Music/MusicCom.vue'
import ToDo from './ToDo/ToDo.vue'; */
import NavComponent from './SideNav/NavComponent.vue'
export default {
  components:{
/*     MusicCom,
    ToDo */
TimerComponent,
NavComponent,
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
