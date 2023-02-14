<script>
	import '../app.css';
	import { viewerSettings } from '$lib/stores.js';
	import { browser } from '$app/environment';

	const setDarkMode = function (darkMode) {
		if (!browser) return;

		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	$: setDarkMode($viewerSettings.darkMode);
</script>

<slot />
