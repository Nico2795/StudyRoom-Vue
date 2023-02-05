<template>
	<div class="botones">
		<button @click="pauseTimer">Pause Timer</button>
	</div>
</template>
<script>
export default {
	// Nombre del componente
	name: "PauseButton",
    methods: {
	pauseTimer() {
		this.$emit('pause');
	},
}
    
};
</script>
<style>
/* Aquí puedes agregar estilos específicos para este componente */
.botones{
	display: flex;
}
</style>