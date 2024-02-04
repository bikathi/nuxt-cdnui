<template>
	<div class="min-h-screen flex flex-col dark:bg-darkest">
		<Navbar />
		<main class="px-36 w-full flex-grow flex">
			<div class="w-[75%]">
				<slot />
			</div>
		</main>
	</div>
</template>
