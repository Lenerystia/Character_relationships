import { goto } from "$app/navigation";

/**
 * *jedna funkcja do obsługi skakania po stronach za pomocą buttonów
 * @param event 
 */
export function navigate(event: MouseEvent){
    const target = event.target as HTMLButtonElement
    const page = target.name;
    goto(page);
}

    // function goToC(){
    //     goto('characters');
    // }
    // function goToR(){
    //     goto('relations');
    // }
    // function goToCharRel(){
    //     goto('/')
    // }
    