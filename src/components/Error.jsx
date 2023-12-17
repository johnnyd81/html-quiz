const Error = () => {
  //the error component is rendered when an error occurs while loading the questions
  return (
    <p className="error">
      <span className="emoji">😢</span> An error occurred while loading the
      questions
    </p>
  );
};

export default Error;
