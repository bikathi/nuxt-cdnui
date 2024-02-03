<template>
	<div class="flex items-center space-x-1">
		<h1 class="font-semibold text-3xl">Logo</h1>
		<img
			v-if="props.showLogo"
			:src="props.logoLink"
			alt="App Logo" />
	</div>
</template>

<script setup lang="ts">
	export interface Props {
		showLogo?: boolean;
		logoLink?: string;
	}

	const props = defineProps<Props>();
</script>
