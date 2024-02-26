import { useState } from 'react';

const Polls = () => {
  const [poll, setPoll] = useState({
    question: "What is your favourite language?",
    options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
  });

  const registerNewAnswer = () => {
    const pollNumber = prompt(
      `${poll.question}\n${poll.options.join("\n")}\n(Write option number)`
    );

    while (
      (pollNumber >= poll.options.length || pollNumber === null) &&
      pollNumber !== ""
    ) {
      if (pollNumber === null) {
        return;
      }
      alert("Please input a valid option");
      const pollNumber = prompt(
        `${poll.question}\n${poll.options.join("\n")}\n(Write option number)`
      );
    }

    if (pollNumber === "") {
      return;
    }

    const index = parseInt(pollNumber, 10);
    poll.answers[index]++;
    console.log(poll.answers);
  };

  return (
    <div className="poll" onClick={registerNewAnswer}>
      <p>{poll.question}</p>
      <ul>
        {poll.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Polls;