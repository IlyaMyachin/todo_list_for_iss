<template lang="pug">
.modal-custom(v-show="store.state.modal.active" :class="{'modal-open': store.state.modal.active}"	@click="store.hideAppModal")
	.modal-custom-close
		button.button(@click="store.hideAppModal")
			font-awesome-icon(icon="xmark")
	.modal-custom-content(@click.stop="")
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, onBeforeUnmount} from 'vue'
import useAppStore from '@/pinia/app'

export default defineComponent({
	setup() {
		const store = useAppStore()

		const listenEscapeEvent = event => {
			if (event.key === "Escape") store.hideAppModal()
		}

		onBeforeMount(() => window.addEventListener('keydown', event => listenEscapeEvent(event)))
		onBeforeUnmount(() => window.removeEventListener('keydown', event => listenEscapeEvent(event)))

		return {
      store
		}
	}
})

</script>

<style lang="scss" scoped>
$padding: $size-4;

.modal-custom {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 100vh;
	padding: $padding;
	background:  rgba(0,0,0,0.5);
	overflow-y: auto;

	&-close {
		position: absolute;
		z-index: 1001;
		top: $size-1;
		right: $size-1;
	}

	&-content {
		padding: $padding * 2;
		background: $white;
	}
}
</style>