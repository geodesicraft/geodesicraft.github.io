import { domeData } from '$lib/scripts/stores';
import Icosahedron from '$lib/scripts/icosahedron';

export function createGeodesic() {
	let icosahedron = new Icosahedron();
	console.log(icosahedron);

	domeData.set(icosahedron);
}
