export function getMovieDetails(response: any) {
    response.data.Search.forEach((movie: any) => {
        let mainDiv: HTMLElement = document.querySelector("#mainDiv")!;
        mainDiv.textContent = "";

        let div: HTMLDivElement = document.createElement("div");

        let movieTitle: HTMLHeadingElement = document.createElement("h3");
        movieTitle.textContent = movie.Title;

        let movieYear: HTMLParagraphElement = document.createElement("p");
        movieYear.textContent = movie.Year;

        let moviePoster: HTMLImageElement = document.createElement("img")
        moviePoster.src = movie.Poster;
        moviePoster.alt = movie.Title;

        div.append(movieTitle, movieYear, moviePoster);
        mainDiv.append(div);
    });
}

export function getRandomDetails(response: any) {
    const mainDiv: HTMLElement = document.querySelector("#mainDiv")!;
    const textDiv: HTMLDivElement = document.querySelector("#textDiv")!;

    mainDiv.textContent = "";

    const suggestionText: HTMLParagraphElement = document.createElement("p");
    suggestionText.textContent = "Results not found! Suggestions: ";
    suggestionText.style.color = "red";
    suggestionText.style.textAlign = "center";

    textDiv.append(suggestionText);

    const randomMovies = [...response.data.Search]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

    randomMovies.forEach((movie: any) => {
        const div: HTMLDivElement = document.createElement("div");
        div.classList.add("margin");

        const suggestionText: HTMLParagraphElement = document.createElement("p");
        suggestionText.textContent = "Results not found! Suggestions: ";
        suggestionText.style.color = "red";

        const movieTitle: HTMLHeadingElement = document.createElement("h3");
        movieTitle.textContent = movie.Title;
        movieTitle.classList.add("center");

        const moviePoster: HTMLImageElement = document.createElement("img")
        moviePoster.src = movie.Poster;
        moviePoster.alt = movie.Title;
        moviePoster.classList.add("width");
        moviePoster.classList.add("height");

        div.append(movieTitle, moviePoster);
        mainDiv.append(div);
    });
}