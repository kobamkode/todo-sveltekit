<script lang="ts">
	let { data } = $props();
</script>

<h1 class="text-xl">Todo - SvelteKit</h1>

<div class="mt-5">
	<form action="" method="post">
		<input type="text" placeholder="What do you want to do?" />
		<button type="submit" class="py-2 px-4 border">Add</button>
	</form>
</div>

<div class="mt-5">
	<ul>
		{#each data.tasks as task}
			<li>{task.name}</li>
		{/each}
	</ul>
</div>
