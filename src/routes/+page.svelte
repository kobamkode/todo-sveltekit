<script lang="ts">
	let { data } = $props();
</script>

<h1 class="text-xl">Todo - SvelteKit + PocketBase</h1>

<div class="mt-5">
	<form action="" method="post">
		<input type="text" name="name" placeholder="What do you want to do?" />
		<button type="submit" class="py-2 px-4 border">Add</button>
	</form>
</div>

<div class="mt-5">
	<ul>
		{#if data.tasks.length > 0}
			{#each data.tasks as task}
				<li>{task.name}</li>
			{/each}
		{:else}
			<li>No tasks!</li>
		{/if}
	</ul>
</div>
