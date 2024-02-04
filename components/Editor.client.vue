<template>
	<div class="bg-red-500">
		<div v-if="editor">
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
		<TiptapEditorContent :editor="editor" />
	</div>
</template>

<script setup lang="ts">
	import Image from "@tiptap/extension-image";
	const editor = useEditor({
		content: "<p>What's on your mind?...</p>",
		extensions: [TiptapStarterKit.configure({ codeBlock: false }), Image],
		onUpdate: (editor) => {
			console.log(editor.editor.getHTML());
		},
	});
</script>
