<script lang="ts">
    // @ts-ignore
    import { onMount } from "svelte";
    import { graphviz } from "d3-graphviz";
    // import "../app.css"
	// import { css } from "styled-system/css";
	// import { hstack, stack } from "styled-system/patterns";
    /**
     * data returned by the load function
     */
    export let data;
    let drawDiag= "";
    /**
     * przypisanie do zmiennej (zmienna pomocnicza do rysowania grafu) danych z bazy danych
    */
    for (let i=0; i<data.result.length; i++){
        let nameFirstChar = data.result[i]["Bohater pierwszy"]
        let nameSecondChar = data.result[i]["Bohater drugi"]
        let relShip = data.result[i]["O relacji"]
        drawDiag += '"'+nameFirstChar+'"->"'+nameSecondChar+'"[label="'+relShip+'"];'
    }
    /**
     * funkcja rysująca graf
    */
    onMount(() => {
            graphviz("#graph").renderDot("digraph {"+drawDiag+"}");
    });

    // const styles = css({
    //     backgroundColor: 'gainsboro',
    //     // borderRadius: '9999px',
    //     fontSize: '20px',
    //     padding: '10px 16px',
    //     width: '700px',
    //     height: '300px'

    // })

</script>
<main>
    <div>
        <a href="characters">Postacie</a>
        <br>
        <a href="relations">Relacje</a>
        <br>
        <a href="/">Relacje z postaciami</a>
        <h2>Character Relations</h2>
    </div>
    <div>
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
    <div>
        <svg id="graph" width=1000px height=500px/>
    </div>
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
