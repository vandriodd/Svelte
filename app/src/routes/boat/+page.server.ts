import type { PageServerLoad, Actions } from './$types'

export const load = (async ({ cookies }) => {

  const boatName = cookies.get('boatName');

  return {
    boatName
  }
}) satisfies PageServerLoad;

// Actions don't require JS.
// Mutate data in the future.

export const actions: Actions = {
  // Default action that will get called if its an unique action or no action specified.
  // default: async ({ request, cookies }) => {
  //   const formData = await request.formData()
  //   const boatName = formData.get('boatName') as string

  //   cookies.set('boatName', boatName)
  // }
  rename: async ({ request, cookies }) => {
    const formData = await request.formData();
    const boatName = formData.get('boatName') as string;

    cookies.set('boatName', boatName);
  },
  capitalize: async ({ cookies }) => {

    const boatName = cookies.get('boatName') as string;
    cookies.set('boatName', boatName.toUpperCase());
  }
} satisfies Actions;
