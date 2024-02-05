<template>
	<div>
		<div
			v-if="editor && isInnerDivVisible"
			:style="{
				top: `${innerDivPosition.y}px`,
				left: `${innerDivPosition.x}px`,
			}"
			class="w-fit p-2 flex items-center space-x-2 rounded-lg shadow-md dark:bg-darker dark:text-dark-highlight absolute z-40">
			<button
				@click="editor.chain().focus().toggleBold().run()"
				:disabled="!editor.can().chain().focus().toggleBold().run()"
				:class="{ 'is-active': editor.isActive('bold') }">
				<Icon
					name="ic:baseline-format-bold"
					color="currentColor"
					size="22" />
			</button>
			<button
				@click="editor.chain().focus().toggleItalic().run()"
				:disabled="!editor.can().chain().focus().toggleItalic().run()"
				:class="{ 'is-active': editor.isActive('italic') }">
				<Icon
					name="ic:baseline-format-italic"
					color="currentColor"
					size="22" />
			</button>
			<button
				@click="editor.chain().focus().setParagraph().run()"
				:class="{ 'is-active': editor.isActive('paragraph') }">
				<Icon
					name="ph:paragraph-fill"
					color="currentColor"
					size="22" />
			</button>
			<button
				@click="
					editor.chain().focus().toggleHeading({ level: 1 }).run()
				"
				:class="{
					'is-active': editor.isActive('heading', { level: 1 }),
				}">
				<Icon
					name="gravity-ui:heading-1"
					color="currentColor"
					size="22" />
			</button>
			<button
				@click="
					editor.chain().focus().toggleHeading({ level: 2 }).run()
				"
				:class="{
					'is-active': editor.isActive('heading', { level: 2 }),
				}">
				<Icon
					name="gravity-ui:heading-2"
					color="currentColor"
					size="22" />
			</button>
			<button
				@click="
					editor.chain().focus().toggleHeading({ level: 3 }).run()
				"
				:class="{
					'is-active': editor.isActive('heading', { level: 3 }),
				}">
				<Icon
					name="gravity-ui:heading-3"
					color="currentColor"
					size="22" />
			</button>
			<button
				@click="editor.chain().focus().toggleBulletList().run()"
				:class="{ 'is-active': editor.isActive('bulletList') }">
				<Icon
					name="material-symbols:list"
					color="currentColor"
					size="22" />
			</button>
			<button
				@click="editor.chain().focus().toggleOrderedList().run()"
				:class="{ 'is-active': editor.isActive('orderedList') }">
				<Icon
					name="gravity-ui:list-ol"
					color="currentColor"
					size="22" />
			</button>
			<button
				@click="editor.chain().focus().toggleCodeBlock().run()"
				:class="{ 'is-active': editor.isActive('codeBlock') }">
				<Icon
					name="ic:twotone-code"
					color="currentColor"
					size="22" />
			</button>
			<button
				@click="editor.chain().focus().toggleBlockquote().run()"
				:class="{ 'is-active': editor.isActive('blockquote') }">
				<Icon
					name="mdi:format-quote-close"
					color="currentColor"
					size="22" />
			</button>
			<button
				@click="
					editor
						.chain()
						.focus()
						.setImage({
							src: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
							alt: 'Sample Alt Text',
						})
						.run()
				"
				:class="{ 'is-active': editor.isActive('blockquote') }">
				<Icon
					name="ic:outline-image"
					color="currentColor"
					size="20" />
			</button>
		</div>
		<TiptapEditorContent
			@keydown.esc="handleEditorEscKeypress"
			:editor="editor"
			class="p-2" />
	</div>
</template>

<script setup lang="ts">
	import Image from "@tiptap/extension-image";
	import { useTextSelection } from "@vueuse/core";

	const { rects } = useTextSelection();
	watch(rects, (oldValue, newValue) => {
		if (oldValue != newValue) {
			handleEditorDivHighlight();
		}
	});

	const isInnerDivVisible = ref(false);
	const innerDivPosition = ref({ x: 0, y: 0 });
	const editor = useEditor({
		content: "<h1>Start by giving your blog a title...</h1>",
		extensions: [TiptapStarterKit.configure({ codeBlock: false }), Image],
		onUpdate: (editor) => {
			console.log(editor.editor.getHTML());
		},
	});

	function handleEditorDivHighlight() {
		isInnerDivVisible.value = true;
		innerDivPosition.value = {
			x: rects.value[0].x + -40,
			y: rects.value[0].y + -40,
		};
	}

	function handleEditorEscKeypress() {
		isInnerDivVisible.value = false;
	}
</script>

<style lang="css">
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
			font-size: 2.0rem;
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
