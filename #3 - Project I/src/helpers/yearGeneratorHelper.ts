export function generateYears(from: number, selectElement: HTMLSelectElement, defaultYear: null | number): void {
    for(let i = from; i <= 2026; i++) {
        const optionMovieYear: HTMLOptionElement = document.createElement("option")!;
        optionMovieYear.value = i.toString();
        optionMovieYear.textContent = i.toString();

        if(i === defaultYear) {
            optionMovieYear.selected = true;
        }

        selectElement.append(optionMovieYear);
    }
}