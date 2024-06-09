<script lang="ts">
    import { navigateBetweenPages } from "$lib/navigate";
    import '$lib/app.css'
    
    /**
     * * data returned by the load function
     */
    export let data;
    let AllCharacters = data.result;

</script>

<div>
    <button name="characters" on:click={navigateBetweenPages}>Characters</button>
    <button name="relations" on:click={navigateBetweenPages}>Relationships</button>
    <button name="/" on:click={navigateBetweenPages}>Characters relationships</button>
</div>

<h2>Characters</h2>

/**
* TODO: obsługa błędu na etapie backendu, kiedy wywali bazę danych, tutaj powinna być zduplikowana
*/

{#if data?.result}  
    <div>
        <table>
            <thead>
                <tr>
                    {#each Object.keys(AllCharacters[0]) as colHead}
                        <th>{colHead}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each Object.values(AllCharacters) as row}
                    <tr>
                        {#each Object.values(row) as cell}
                            <td>{cell}</td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}
