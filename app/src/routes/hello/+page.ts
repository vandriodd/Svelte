// Exports a function that run both on the server (initial load) and the client (subsequent navigation) side
import type { PageLoad } from './$types';

// Control whether or not this page is server side rendered (SSR), on false disables the server side code (SSR).
// export const ssr = true;

// Control whether or not this page is prerendered, on false disables the server side code (SSR).
// export const prerender = true;

// Control whether or not this page is hydrated, on false disables the client side code (JS),
// export const csr = true;

export const load: PageLoad = async () => {

  // Since this function runs on the client side, it is not possible to do things such as:
  // - Access environment variables
  // - Use the Firebase admin SDK
  // This component is ideal for fetching data, especially if it is public. It's the best default for data fetching.

  const { title, text } = await fetch('someAPI').then(res => res.json());

  return {
    title,
    text
  };
};