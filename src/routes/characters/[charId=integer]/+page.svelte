<script lang="ts">
    import '$lib/app.css'
    import { page } from '$app/stores';
    import { navigate } from '$lib/navigate';

    export let data

    export let charId: string;
    charId = $page.params.charId;
    let char = data.result[0]

</script>

<h1>Page for {charId} - {char.firstName} {char.lastName}</h1>

<h2>Fist Name: {char.firstName}</h2>
<h2>Last Name: {char.lastName}</h2>
<h2>ID: {char.id}</h2>
<p>TODO: 404 - brak takiej postaci (przy próbie wpisania id/uuid jeśli będzie już)</p>
<p>TODO: UUID</p>
<br>
<button id="test_id" name="/" on:click={navigate}>Characters relationships</button>