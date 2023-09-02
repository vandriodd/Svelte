<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

{data.title}
{data.text}

<!-- On first load: rendered on server, updates: rendered on client, so... This component is used for building UI & runs on both client and server sides -->
