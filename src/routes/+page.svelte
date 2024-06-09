<script lang="ts">
    import { onMount } from "svelte";
    import { graphviz } from "d3-graphviz";
    import { navigateBetweenPages } from "$lib/navigate";
    import '$lib/app.css'
    /**
     * data returned by the load function
     */
    export let data;

    let relationBetweenCharacter = data.result;

    let drawDiag = '';
    /**
     * only notes for me about Set:
     * By default, Sets in TypeScript use SameValueZero algorithm to determine if two objects are the same. This equality works great for simple types (string, boolean and number) but does not work with custom types.
     * Consider the following example where we have a Set of numbers. We added the number ‘2’ twice, but it was added only once in the Set.
     */
    /**
    * *Drawing graph
    */
    /**
     * * For unique value (eliminating replicates)
     */
    const uniqueCharacters = new Set<string>();

    /**
     * *Adding clickable links on diagram
     */
    for (let i = 0; i < relationBetweenCharacter.length; i++) {
        let nameFirstCharacter = relationBetweenCharacter[i]["First Character"];
        let nameSecondCharacter = relationBetweenCharacter[i]["Second Character"];
        let idFirstCharacter = relationBetweenCharacter[i]["idFirstChar"];
        let idSecondCharacter = relationBetweenCharacter[i]["idSecondChar"];

        uniqueCharacters.add(`"${nameFirstCharacter}" [href="http://localhost:5173/characters/${idFirstCharacter}"];`);
        uniqueCharacters.add(`"${nameSecondCharacter}" [href="http://localhost:5173/characters/${idSecondCharacter}"];`);
    }

    /**
     * * Transform "Set" data structure to string (i don't know this good way, but it works)
    */
    uniqueCharacters.forEach((characterWithLink) => {
        drawDiag += characterWithLink;
    });

    /**
     * * Add relation in graph
    */
    for (let i=0; i<relationBetweenCharacter.length; i++){
        let firstCharName = relationBetweenCharacter[i]["First Character"]
        let secondCharName = relationBetweenCharacter[i]["Second Character"]
        let relShip = relationBetweenCharacter[i]["About relationship"]
        drawDiag += `"${firstCharName}"->"${secondCharName}" [label="${relShip}"];`
        // drawDiag += '"'+nameFirstChar+'"->"'+nameSecondChar+'"[label="'+relShip+'"];'
    }
    // console.log(drawDiag);

    /**
     * * Creating graph
    */
    onMount(() => {
            graphviz("#graph").renderDot("digraph {"+drawDiag+"}");
    });


    /**
     * * Filtering data that should not be visible on the page
     */

    const hiddenColumns = ['idFirstChar', 'idSecondChar'];

    
    //Without this, function filterColumns didn't want to work
    type DataRow = {
        [key: string]: any;
    };
    /**
     * *Column filtering function
     * @param row
     * TODO: write what mean row
     * TODO: change param in forEach (key) to something meaningful
     */
    const filterColumns = (row: DataRow): DataRow => {
        const filteredRow: DataRow = {};
        Object.keys(row).forEach((key) => {
            if (!hiddenColumns.includes(key)) {
                filteredRow[key] = row[key];
            }
        });
        return filteredRow;
    };
</script>
<title>Main page</title>
<main>
    <div id="left">
        <button name="characters" on:click={navigateBetweenPages}>Characters</button>
        <button name="relations" on:click={navigateBetweenPages}>Relationships</button>
        <button name="/" on:click={navigateBetweenPages}>Characters relationships</button>
        <h2>Characters relationships</h2>

        /**
        * TODO: Out this table construct to separate component
        */
        {#if data?.result}
            <div>
                <table class="rainbow">
                    <thead>
                        <tr>
                            {#each Object.keys(filterColumns(relationBetweenCharacter[0])) as colHead}
                                <th>{colHead}</th>
                            {/each}
                        </tr>
                    </thead>
                    <tbody>
                        {#each relationBetweenCharacter as row}
                            <tr>
                                {#each Object.values(filterColumns(row)) as cell}
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