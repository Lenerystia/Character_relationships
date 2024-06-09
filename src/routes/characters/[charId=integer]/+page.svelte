<script lang="ts">
    import '$lib/app.css'
    import { page } from '$app/stores';
    import { navigateBetweenPages } from '$lib/navigate';

    export let data

    let infoAboutChosenCharacter = data.result;

    export let pageCharacterId: string;
    pageCharacterId = $page.params.charId;
    let character = infoAboutChosenCharacter[0];

</script>

<h1>Page for {pageCharacterId} - {character.firstName} {character.lastName}</h1>

<h2>Fist Name: {character.firstName}</h2>
<h2>Last Name: {character.lastName}</h2>
<h2>ID: {character.id}</h2>
<p>TODO: 404 - brak takiej postaci (przy próbie wpisania id/uuid jeśli będzie już)</p>
<p>TODO: UUID</p>
<br>
<button id="test_id" name="/" on:click={navigateBetweenPages}>Characters relationships</button>