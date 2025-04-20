import { writable } from 'svelte/store';
import type { Project } from '../types';

// Check if we're in the browser
const isBrowser = typeof window !== 'undefined';

// Initialize with localStorage data (browser) or empty array (server)
const initial = isBrowser ? JSON.parse(localStorage.getItem('ketchup-projects') || '[]') : [];

export const projects = writable<Project[]>(initial);

// Only subscribe to changes in the browser
if (isBrowser) {
	projects.subscribe((value) => {
		localStorage.setItem('ketchup-projects', JSON.stringify(value));
	});
}
