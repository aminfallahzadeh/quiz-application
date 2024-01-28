function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to Music Theory Quiz!</h2>
      <h3>{numQuestions} questions to test your music skills</h3>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        Let&apos;s start
      </button>
    </div>
  );
}

export default StartScreen;
