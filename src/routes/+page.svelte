<script lang="ts">
	import { projects } from '$lib/stores/projectStore';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/types';

	let allProjects: Project[] = [];

	// Subscribe to the store
	projects.subscribe((value) => {
		allProjects = value;
	});
</script>

<main class="p-6">
	<h1 class="text-3xl font-bold mb-4">Ketchup</h1>

	{#if allProjects.length === 0}
		<p class="text-gray-500">No projects yet. Add one!</p>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each allProjects as project (project.id)}
				<ProjectCard title={project.title} dueDate={project.dueDate} />
			{/each}
		</div>
	{/if}
</main>
