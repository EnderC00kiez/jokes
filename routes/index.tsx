import Joke from "../islands/Joke.tsx";
import Countdown from "../islands/Countdown.tsx"

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <Joke />
    <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
    </div>
  );
}
