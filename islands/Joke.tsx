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
    const url = window.location.href;
    // now we can use the url to fetch the joke (/api/joke)
    const response = await fetch(url + "api/joke", {
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
    useEffect(() => {
        JokeHandler().then((joke) => setJoke(joke));
        ProgramJokeHandler().then((joke) => setProgramJoke(joke));
    }, []);
    return (
        <div class="flex flex-col gap-2 w-full">
            <p>Regular</p>
            <p class="flex-grow-1 font-bold text-xl">{joke}</p>
            <p>Programmer</p>
            <p class="flex-grow-1 font-bold text-xl">{programJoke}</p>
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