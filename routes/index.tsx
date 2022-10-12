
import Joke from "../islands/Joke.tsx";

export const Head = () => (
    <head>
        <title>Jokes</title>
    </head>
);

export default function Home() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
        <div class="p-4 mx-auto max-w-screen-md">
          <Head />
          <Joke />
        </div>
  );
}
