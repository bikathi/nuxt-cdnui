<template>
	<main class="h-full">
		<MainStory />
		<h1 class="text-4xl font-bold ml-1 my-2">You Also May Like</h1>
		<div class="grid grid-cols-2">
			<MiniBlogStory
				v-for="(a, index) in 6"
				:key="index" />
		</div>
	</main>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "default-layout",
		name: "home-page",
	});
</script>
