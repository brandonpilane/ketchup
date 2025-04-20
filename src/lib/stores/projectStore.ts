// Import the writable store from Svelte and the Project type
import { writable } from 'svelte/store';
import type { Project } from '../types';

// Try to load saved projects from localStorage under the key 'ketchup-projects'
const stored = localStorage.getItem('ketchup-projects');
// Parse the stored JSON if it exists, otherwise use an empty array as the initial value
const initial = stored ? JSON.parse(stored) : [];

// Create a Svelte writable store initialized with the loaded projects (or empty array)
// The store contains an array of Projects as defined by the type
export const projects = writable<Project[]>(initial);

// Subscribe to changes in the projects store
// Whenever the store value changes, this callback will execute
projects.subscribe((value) => {
	// Save the current value of the projects store to localStorage
	// This persists the data between page reloads
	localStorage.setItem('ketchup-projects', JSON.stringify(value));
});
