
import Joke from "../islands/Joke.tsx";

export default function Home() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
        <title>Jokes</title>
        <div class="p-4 mx-auto max-w-screen-md">
          <Joke />
        </div>
  );
}
