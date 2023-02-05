<template>
    <div>
      <label for="work-time">Tiempo de trabajo (en minutos):</label>
      <input type="number" id="work-time" v-model="workTime" />
      <br />
      <label for="rest-time">Tiempo de descanso (en minutos):</label>
      <input type="number" id="rest-time" v-model="restDuration" />
      <br />
      <button @click="handleSave">Guardar</button>
      <button @click="$emit('hideSettings')">Volver a Timer</button>
    </div>
  </template>
  <script>
  export default {
    name: "SettingsComponent",
    data() {
      return {
        workTime: localStorage.getItem("workTime") || 25,
        restDuration: localStorage.getItem("restDuration") || 5,
      };
    },
    methods: {
      handleSave() {
        localStorage.setItem("workTime", this.workTime);
        localStorage.setItem("restDuration", this.restDuration);
        localStorage.setItem("timeLeft", this.timeLeft);
        this.$emit("save", { workTime: this.workTime, restDuration: this.restDuration , timeLeft: this.timeLeft});
      },
    },
  };
  </script>