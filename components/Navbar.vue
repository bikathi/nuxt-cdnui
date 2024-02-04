<template>
	<nav class="p-2 px-6 h-20 flex space-between shadow-md sticky top-0 dark:bg-darkest">
		<div class="w-3/4 h-full flex items-center">
			<Logo :show-logo="false" />
		</div>
		<div class="w-1/4 flex justify-end space-x-2 items-center h-full">
			<ThemeSwitcher />
			<SearchButton />
		</div>
	</nav>
</template>

<script setup lang="ts"></script>
