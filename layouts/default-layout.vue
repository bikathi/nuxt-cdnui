<template>
	<div class="min-h-screen flex flex-col dark:bg-darkest">
		<Navbar />
		<main class="px-2 lg:px-64 w-full flex-grow flex">
			<div class="w-full lg:w-[70%]">
				<slot />
			</div>
			<aside class="min-w-[15%] pt-1 px-2 fixed right-14 hidden lg:flex">
				<!-- section for random common articles -->
				<h1 class="text-4xl font-bold mb-4 ml-3">Top Picks</h1>
				<BlogHighlight
					v-for="a in 5"
					:key="a" />
			</aside>
		</main>
	</div>
</template>

<script setup lang="ts"></script>
