import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const { email, password } = await request.json();
  const response = await fetch('http://localhost:1337/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: email,
      password: password,
    }),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
  });
};
