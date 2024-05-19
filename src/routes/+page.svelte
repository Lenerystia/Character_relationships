<script lang="ts">
    // @ts-ignore
    import { onMount } from "svelte";
    import { graphviz } from "d3-graphviz";
    // import { css } from '/styled-system/css'
    export let data; // data returned by the load function
    // let name = data.result[0]["Bohater pierwszy"]
    let tab = []
    let help= "";
    for (let i=0; i<data.result.length; i++){
        let name1 = data.result[i]["Bohater pierwszy"]
        let name2 = data.result[i]["Bohater drugi"]
        let rel = data.result[i]["O relacji"]
        tab.push(name1+"->"+name2+"[label="+rel+"];")
        // tab.push(name1+"->"+name2+";")
    }
    for (let i=0; i<tab.length;i++){
        help = help + tab[i]
    }
    onMount(() => {
            graphviz("#graph").renderDot("digraph {"+help+"}");
    });


    
    // for(let i=0; i<tab.length;i++){
    //     // console.log(tab[i])
    //     console.log("digraph {"+tab[i]+"}")
    // }
   
    // let name3 = data.result[1].Bohater1Imie
    // let name4 = data.result[1].Bohater2Imie
    // onMount(() => {
    //         graphviz("#graph").renderDot("digraph { "+name1 +"->"+name2+" [ label="+ rel +" ]; }");
    // });
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

    <svg id="graph" width=500px height=500px/>
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
