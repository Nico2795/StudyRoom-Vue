<template>
	<div class="botones">
		<button @click="startTimer">Start Timer</button>
	</div>
</template>
<script>
export default {
	// Nombre del componente
	name: "StartButton",
    methods: {
	startTimer() {
		this.$emit('start');
	},
}
    
};
</script>
<style>
/* Aquí puedes agregar estilos específicos para este componente */
.botones{
	display: flex;
margin: 10px;
}
</style>