<template>
	<Editor />
</template>

<script setup lang="ts">
	definePageMeta({
		name: "blog-editor",
		layout: "blog-layout",
	});
</script>

<style scoped lang="css">
	/* Basic editor styles */
	.tiptap {
		outline: none;
		width: 100%;
		text-wrap: wrap;
		min-height: 100%;
		margin-bottom: 1px;

		> * + * {
			margin-top: 0.75em;
		}

		ul {
			padding: 0 1rem;
			list-style-type: disc;
		}

		ol {
			padding: 0 1rem;
			list-style-type: lower-roman;
		}

		h1 {
			font-size: 1.1rem;
			font-size: 1.4rem;
			font-weight: bolder;
		}

		h2 {
			font-size: 1.1rem;
			font-weight: bold;
		}

		code {
			background-color: rgba(#616161, 0.1);
			color: #616161;
		}

		pre {
			background: #0d0d0d;
			color: #fff;
			font-family: "JetBrainsMono", monospace;
			padding: 0.75rem 1rem;
			border-radius: 0.5rem;

			code {
				color: inherit;
				padding: 0;
				background: none;
				font-size: 0.8rem;
			}
		}

		img {
			max-width: 100%;
			height: auto;
			border: 1px solid;
			border-radius: 5px;
			width: 95%;
			height: auto;
		}

		blockquote {
			padding-left: 1rem;
			border-left: 5px solid rgb(51 65 85);
			padding-top: 2px;
			font-weight: 600;
			padding-bottom: 2px;
		}
	}
</style>
