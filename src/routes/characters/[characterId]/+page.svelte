<script lang="ts">
    import { page } from "$app/stores";
    export const { characterId } = $page.params;
    export let data;
</script>

<h1>Id Character is: {characterId}</h1>