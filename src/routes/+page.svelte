<h1>Welcome to SvelteKitt</h1>
<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
</script>

<main>
    <AppBar>
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <svelte:fragment slot="trail">(actions)</svelte:fragment>
        <svelte:fragment slot="headline">(headline)</svelte:fragment>
    </AppBar>
	<h1>Register</h1>
	<form action="?/register" method="POST" class="auth-form">
		<label for="email"> <span>Email</span> </label>
		<input type="text" name="email" />
		<button class="bg-primary-500 text-secondary-500">Register</button>
	</form>
</main>
