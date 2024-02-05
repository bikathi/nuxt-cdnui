<template>
	<div class="flex-grow px-2 lg:px-64">
		<BlogReaderImage />
		<Editor />
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		name: "blog-editor",
		layout: "blog-layout",
	});
</script>
