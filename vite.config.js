import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';

const config = {
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
};

export default config;
