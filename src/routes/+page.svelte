<script lang="ts">
    // @ts-ignore
    import { onMount } from "svelte";
    import { graphviz } from "d3-graphviz";
    import { navigate } from "$lib/navigate";
    import '$lib/app.css'
	// import { css } from "styled-system/css";
	// import { hstack, stack } from "styled-system/patterns";
    /**
     * data returned by the load function
     */
    export let data;
    let drawDiag= "";
    /**
     * przypisanie do zmiennej (zmienna pomocnicza do rysowania grafu) danych z bazy danych z odpowiednim formatowaniem
     * TODO: clickable links to characters
    */
    for (let i=0; i<data.result.length; i++){
        let nameFirstChar = data.result[i]["First Character"]
        let nameSecondChar = data.result[i]["Second Character"]
        let relShip = data.result[i]["About relationship"]
        drawDiag += '"'+nameFirstChar+'"->"'+nameSecondChar+'"[label="'+relShip+'"];'
    }
    /**
     * funkcja rysująca graf
    */
    onMount(() => {
            graphviz("#graph").renderDot("digraph {"+drawDiag+"}");
    });

</script>
<main>
    <div id="left">
        <button name="characters" on:click={navigate}>Characters</button>
        <button name="relations" on:click={navigate}>Relationships</button>
        <button name="/" on:click={navigate}>Characters relationships</button>
        <h2>Characters relationships</h2>
    {#if data?.result}
            <div>
                <table class="rainbow">
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
    </div>
    <div id="svg">
        <svg id="graph" width=1050px height=1000px/>
    </div>
</main>