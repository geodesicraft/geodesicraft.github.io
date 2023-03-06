<script lang="ts">
	import '../app.css';
	import { viewerSettings } from '$lib/scripts/stores';
	import { browser } from '$app/environment';

	const setLightMode = function (lightMode: boolean) {
		if (!browser) return;

		if (lightMode) {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}
	};

	$: setLightMode($viewerSettings.lightMode);
</script>

<slot />
