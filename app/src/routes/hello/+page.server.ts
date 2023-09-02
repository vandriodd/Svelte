// Exports a function that will be called on the server when the page is loaded
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // In this function we can do things like:
  // - Fetch data from a database or API
  // - Fetch data from Firebase admin SDK (server-side)
  // - Access environment variables
  // - Send raw SQL queries to the database or access files on the filesystem

  // And it returns an object of data that will be passed to the page component
  return {
    title: 'My data',
    text: 'Hi mom!'
  };
};

// This component ('+page.server.ts') is ONLY used on the server for server-side rendering (API routes)
