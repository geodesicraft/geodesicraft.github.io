<script lang="ts">
	import ViewerControls from '$lib/components/ViewerControls.svelte';
	import DomeControlsSidebar from '$lib/components/DomeControlsSidebar.svelte';
</script>

<div class="h-full grid grid-rows-[auto_1fr] w-72 divide-y-4 divide-zinc-100 dark:divide-zinc-600">
	<ViewerControls />
	<DomeControlsSidebar />
</div>
