<script lang="ts">
    import '$lib/app.css'
    import { page } from '$app/stores';
	import { queryParameters } from 'sveltekit-search-params';

    export let data

    let charId: string;
    charId = $page.params.charId;
    let char = data.result[0]

</script>

<h1>Page for {charId} - {char.firstName} {char.lastName}</h1>

<h2>Fist Name: {char.firstName}</h2>
<h2>Last Name: {char.lastName}</h2>
<h2>ID: {char.id}</h2>
<p>TODO: zabezpieczenie przed próbą wpisania nieistniejącej postaci</p>