<script lang="ts">
    import { navigate } from "$lib/navigate";
    import '$lib/app.css'

    export let data; // data returned by the load function
</script>


<div>
    <button name="characters" on:click={navigate}>Characters</button>
    <button name="relations" on:click={navigate}>Relationships</button>
    <button name="/" on:click={navigate}>Characters relationships</button>
</div>
<h2>Relations</h2>

{#if data?.result}
    <div>
        <table>
            <thead>
                <tr>
                    {#each Object.keys(data.result[0]) as colHead}
                        <th>{colHead}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each Object.values(data.result) as row}
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