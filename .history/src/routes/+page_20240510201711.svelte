<script lang="ts">
    // @ts-ignore
    import { css } from '/styled-system/css'
    export let data; // data returned by the load function
</script>
<a href="characters">Postacie</a>
<a href="relations">Relacje</a>
<a href="/">Relacje z postaciami</a>
<h2>Character Relations</h2>

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

<!-- <h2>Relations</h2> -->
<!-- <h2>Characters Relations</h2> -->

<style>
    table, th, td {
		border: 1px solid;
		border-collapse: collapse;
		margin-bottom: 10px;
        padding: 5px;
	}
</style>
