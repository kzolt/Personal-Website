<script lang="ts">
	import { Octokit } from 'octokit'
	import Card from '$lib/components/card.svelte'
	import { PUBLIC_GITHUB_TOKEN } from '$env/static/public'
	import { onMount } from 'svelte'

	const octokit = new Octokit({ auth: PUBLIC_GITHUB_TOKEN })

	$: projects = []

	onMount(async () => {
		const { data } = await octokit.rest.repos.listForUser({
			username: 'kzolt',
			sort: 'created',
			per_page: 4
		})
		projects = data

		console.log(data)
	})
</script>

<div class="grid grid-cols-1 lg:grid-cols-2">
	<div class="flex flex-col justify-center items-center">
		<img src="/logo.svg" alt="logo" class="w-60" />
		<h1 class="text-3xl font-bold">Kevin Zoltany</h1>
		<p class="text-gray-400 text-xl">Software Engineer</p>
	</div>
	<div>
		<h2 class="text-2xl pb-5">Projects</h2>
		<div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
			{#each projects as project}
				<Card title={project.name} description={project.description} url={project.html_url} />
			{/each}
		</div>
	</div>
</div>
