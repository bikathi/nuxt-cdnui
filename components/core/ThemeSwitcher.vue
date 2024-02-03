<template>
	<div class="relative inline-block">
		<input
			type="checkbox"
			id="hs-default-switch-soft-with-icons"
			class="peer relative w-[3.25rem] h-7 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-100 checked:border-blue-200 focus:checked:border-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-800/30 dark:checked:border-blue-800 dark:focus:ring-offset-gray-600 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-600 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-500" />
		<label
			for="hs-default-switch-soft-with-icons"
			class="sr-only"
			>switch</label
		>
		<span
			class="peer-checked:text-blue-600 text-gray-500 w-6 h-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
			<Icon
				name="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
				color="currentColor" />
		</span>
		<span
			class="peer-checked:text-white w-6 h-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
			<Icon
				name="line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition"
				color="currentColor" />
		</span>
	</div>
</template>
