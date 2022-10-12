// import req
import { useState, useEffect } from "preact/hooks";
// fetch joke from api
// root/api/joke
// use ajax to fetch joke

export const JokeHandler = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "text/plain",
        },
    });
    const joke = await response.text();
    return joke;
};

export const ProgramJokeHandler = async () => {
    // current url
    // now we can use the url to fetch the joke (/api/joke)
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt", {
        headers: {
            Accept: "text/plain",
        },
    });
    const joke = await response.text();
    return joke;
};
export const JokeAPIHandler = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt", {
        headers: {
            Accept: "text/plain",
        },
    });
    const joke = await response.text();
    return joke;
};

export default function Joke() {
    const [joke, setJoke] = useState("");
    const [programJoke, setProgramJoke] = useState("");
    const [apiJoke, setApiJoke] = useState("");
    useEffect(() => {
        JokeHandler().then((joke) => setJoke(joke));
        ProgramJokeHandler().then((joke) => setProgramJoke(joke));
        JokeAPIHandler().then((joke) => setApiJoke(joke));
    }, []);
    return (
        <div class="flex flex-col gap-2 w-full">
            <p>Dad</p>
            <p class="flex-grow-1 font-bold text-xl">{joke}</p>
            <p>Programmer</p>
            <p class="flex-grow-1 font-bold text-xl">{programJoke}</p>
            <p>JokeAPI</p>
            <p class="flex-grow-1 font-bold text-xl">{apiJoke}</p>
            <button
                class="p-2 text-white bg-blue-500 rounded"
                onClick={() => {
                    window.location.reload();
                }}
            >
                Reload
            </button>
        </div>
    );
}