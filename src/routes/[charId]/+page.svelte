<script lang="ts">
    import '$lib/app.css'
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    export let data;
    export let params;
    
    let charId: string;

    charId = $page.params.charId;

    onMount(() => {
        console.log('Slug:', charId);
    });
</script>

<h1>Page for {charId}</h1>
<p>This is a dynamic page for {charId}.</p>

<h2>Fist Name: {data.result[0].firstName}</h2>
<h2>Last Name: {data.result[0].lastName}</h2>
<h2>ID {data.result[0].id}</h2>