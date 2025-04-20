<script lang="ts">
	export let title: string;
	export let dueDate: string | undefined;
</script>

<div class="p-4 rounded-lg shadow bg-white dark:bg-gray-800 hover:shadow-lg transition">
	<h2 class="text-xl font-semibold">{title}</h2>
	{#if dueDate}
		<p class="text-sm text-gray-500">Due: {dueDate}</p>
	{/if}
</div>
