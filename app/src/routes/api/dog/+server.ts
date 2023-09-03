import type { RequestEvent, RequestHandler } from './$types';

export const GET: RequestHandler = async (e: RequestEvent) => {
  e.cookies;
  e.params;
  e.request.body;
  // The event also has a fetch function that allows you to make requests to other APIs directly from our backend, and automatically inherit cookie and auth headers (inherits clien cookies).
  e.fetch('someURL');
  return new Response();
};

export const POST: RequestHandler = async (e: RequestEvent) => {
  let user = { admin: false };

  if (!user.admin) {
    throw error(401, 'Unauthorized');
  }

  // json helper, like jsonfy in python
  // Automatically sets the content-type header to application/json
  return json({ name: 'dog' });
};

export const DELETE: RequestHandler = async () => {
  return new Response();
};