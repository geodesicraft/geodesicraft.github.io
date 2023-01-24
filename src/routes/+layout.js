export const prerender = true;
export const trailingSlash = 'always';

// Clear console on Vite HMR reload
// https://github.com/vitejs/vite/discussions/3143#discussioncomment-1717076
if (import.meta.hot) {
	import.meta.hot.on(
		'vite:beforeUpdate',
		/* eslint-disable-next-line no-console */
		() => console.clear()
	);
}
