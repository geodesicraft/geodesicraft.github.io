<script>
	import '../app.css';
	import { viewerSettings } from '$lib/stores.js';
	import { browser } from '$app/environment';

	const setLightMode = function (lightMode) {
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
