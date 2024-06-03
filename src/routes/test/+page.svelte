<script lang="ts">
    import { onMount } from "svelte";
    import { graphviz } from "d3-graphviz";
    import { navigate } from "$lib/navigate";
    import '$lib/app.css';

    let graph: SVGSVGElement;
    /**
     * funkcja rysująca graf
    */
    onMount(() => {
            graphviz("#graph").renderDot(`
            digraph {
                 "Mietek Mietkowski" [href="http://localhost:5173/characters/1"];
                 Gienek [href="http://localhost:5173/characters/2"];
                 Test [href="http://localhost:5173/characters/3"];
                 "Mietek Mietkowski" -> Gienek;
                 Gienek -> Test;
                 Test -> "Mietek Mietkowski";
             }
         `);
    });
    // onMount(() => {
    //     const dot = `
    //         digraph G {
    //             A [href="https://example.com/A"];
    //             B [href="https://example.com/B"];
    //             C [href="https://example.com/C"];
    //             A -> B;
    //             B -> C;
    //             C -> A;
    //         }
    //     `;

    //     graphviz(graph)
    //         .renderDot(dot);
    // });
</script>
<main>
    <div id="left">
        <p>Only for testing whether it works on a device without access to the database</p>
        <button name="characters" on:click={navigate}>Characters</button>
        <button name="relations" on:click={navigate}>Relationships</button>
        <button name="/" on:click={navigate}>Characters relationships</button>
    </div>
    <div id="svg">
        <svg id="graph" bind:this={graph} width=1050px height=1000px/>
    </div>
</main>