import { goto } from "$app/navigation";

/**
 * *Funkcja do obsługi skakania po stronach za pomocą buttonów
 * *Function to moving between pages using button
 * @param eventClickButtonByUser - click by user
 */
export function navigateBetweenPages(eventClickButtonByUser: MouseEvent){
    const target = eventClickButtonByUser.target as HTMLButtonElement
    const pageName = target.name;
    goto(pageName);
}

    