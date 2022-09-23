import Countdown from "../islands/Countdown.tsx"
import Joke from "../islands/Joke.tsx";

export default function Home() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
        <div class="p-4 mx-auto max-w-screen-md">
          <Joke />
          <p>
      Something is happening <Countdown target={date.toISOString()} />.
          </p>
        </div>
  );
}
