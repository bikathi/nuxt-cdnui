<template>
	<div class="p-2 h-fit">
		<div class="w-full h-[13rem] md:h-[35rem]">
			<img
				src="/images/sample-image.jpg"
				alt="Main Article Image"
				class="max-h-full object-cover w-full rounded-lg" />
		</div>
		<h1 class="text-4xl font-bold mt-2">
			Top Things To Plan for As You Save Up For 2024 Festive Holidays
		</h1>
		<div class="py-2 flex items-center justify-between">
			<div class="flex items-center space-x-1 font-medium text-sm md:text-base">
				<img
					src="/images/sample-image-b.jpg"
					alt="Author Image"
					class="w-8 md:w-12 h-8 md:h-12 rounded-full object-cover ring-dark-highlight ring-2 p-1" />
				<span class="text-2xl">&middot;</span>
				<span>Micheal Angelo</span>
				<span class="text-2xl">&middot;</span>
				<span class="">03/12/2023</span>
			</div>
			<div class="inline-flex shadow-sm">
				<button
					type="button"
					class="py-3 px-4 inline-flex items-center rounded-s-full last:rounded-e-lg text-sm font-bold bg-white text-gray-800 shadow-sm disabled:pointer-events-none dark:bg-dark dark:text-dark-highlight dark:hover:bg-darker">
					<span class="mr-1">
						{{ likeCount }}
					</span>
					Likes
				</button>
				<button
					type="button"
					class="py-3 px-4 inline-flex items-center rounded-e-full text-sm font-bold bg-white text-gray-800 shadow-sm disabled:pointer-events-none dark:bg-dark dark:text-dark-highlight dark:hover:bg-darker">
					<span class="mr-1">{{ viewCount }}</span>
					Views
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const likeCount = ref(132);
	const viewCount = ref(400);
</script>
