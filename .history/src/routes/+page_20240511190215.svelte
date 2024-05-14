<script lang="ts">
    // @ts-ignore
    import { onMount } from "svelte";
    import { graphviz } from "d3-graphviz";
    // import { css } from '/styled-system/css'
    export let data; // data returned by the load function
    let name = data.result[0]
    let name2 = data.result[1]
    let rel = data.result[2]
    let dupa = "dupa"
    onMount(() => {
    graphviz("#graph").renderDot("digraph { "+name +"-> b, c }");
  });
</script>
<main>
    <a href="characters">Postacie</a>
    <br>
    <a href="relations">Relacje</a>
    <br>
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
    <svg id="graph" />
</main>
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
