import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		console.log('request', request);
	}
} as Actions;
