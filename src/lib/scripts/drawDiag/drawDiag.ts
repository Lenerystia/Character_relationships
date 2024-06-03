export let data;

export let drawDiag = '';
    /**
     * only notes for me about Set:
     * By default, Sets in TypeScript use SameValueZero algorithm to determine if two objects are the same. This equality works great for simple types (string, boolean and number) but does not work with custom types.
     * Consider the following example where we have a Set of numbers. We added the number ‘2’ twice, but it was added only once in the Set.
     */
    /**
    * Drawing graph
    */
    /**
     * * For unique value (eliminating replicates)
     */
    const uniqueCharacters = new Set<string>();

    /**
     * *Adding clickable links on diagram
     */
    for (let i = 0; i < data.result.length; i++) {
        const nameFirstChar = data.result[i]["First Character"];
        const nameSecondChar = data.result[i]["Second Character"];
        const idFirstChar = data.result[i]["idFirstChar"];
        const idSecondChar = data.result[i]["idSecondChar"];

        uniqueCharacters.add(`"${nameFirstChar}" [href="http://localhost:5173/characters/${idFirstChar}"];`);
        uniqueCharacters.add(`"${nameSecondChar}" [href="http://localhost:5173/characters/${idSecondChar}"];`);
    }

    /**
     * * Transform "Set" data structure to string (i don't know this good way, but it works)
    */
    uniqueCharacters.forEach((characterWithLink) => {
        drawDiag += characterWithLink;
    });

    // console.log(drawDiag);

    /**
     * * Add relation in graph
    */
    for (let i=0; i<data.result.length; i++){
        const nameFirstChar = data.result[i]["First Character"]
        const nameSecondChar = data.result[i]["Second Character"]
        const relShip = data.result[i]["About relationship"]
        drawDiag += `"${nameFirstChar}"->"${nameSecondChar}" [label="${relShip}"];`
        // drawDiag += '"'+nameFirstChar+'"->"'+nameSecondChar+'"[label="'+relShip+'"];'
    }