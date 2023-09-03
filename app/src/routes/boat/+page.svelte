<script lang="ts">
	import { enhance } from "$app/forms";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>{data.boatName}</h1>

<!-- Enhanced form -> JS take over form submission and update UI without full page reload -->
<!-- Enhance uses:
  - Access from data client side
  - Access status client side
  - Validation
  - Error handling -->
<form method="POST" action="?/rename" use:enhance>
	<input type="text" name="boatName" />
	<button type="submit">Submit</button>
	<!-- Simplified backed mutations -->
	<button formaction="?/capitalize">Capitalize</button>
</form>
