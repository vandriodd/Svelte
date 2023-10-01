<script lang="ts">
  import { auth, user } from '$lib/firebase';

  import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);

    const idToken = await credential.user.getIdToken();

    const res = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
      },
      body: JSON.stringify({ idToken }),
    });
  }

  async function signOutSSR() {
    const res = await fetch('/api/signin', { method: 'DELETE' });
    await signOut(auth);
  }
</script>

<body data-theme="dark">
  <h1 class="text-green-200">Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
</body>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
