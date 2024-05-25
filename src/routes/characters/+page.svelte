<script lang="ts">
	import { goto } from '$app/navigation';

    // @ts-ignore
    import { css } from '/styled-system/css'
    export let data; // data returned by the load function

    function goToC(){
        goto('characters');
    }
    function goToR(){
        goto('relations');
    }
    function goToCharRel(){
        goto('/')
    }
</script>

<div>
    <button on:click={goToC}>Characters</button>
    <button on:click={goToR}>Relationships</button>
    <button on:click={goToCharRel}>Characters relationships</button>
</div>

<h2>Characters</h2>

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
    tbody tr:nth-child(even) {
    background-color: #4C8BF5;
    color: #fff;
    }
</style>
