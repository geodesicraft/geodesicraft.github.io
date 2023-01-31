<script>
	import { Axis3d, Lightbulb, Rotate3d } from 'lucide-svelte';
	const icons = { Axis3d, Lightbulb, Rotate3d };

	export let icon;
</script>

<svelte:component this={icons[icon]} {...$$props} />
