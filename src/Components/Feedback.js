const Feedback = () => {


  return (
    <div id="Feedback">
      <h1>Feedback</h1>
      <p>
        We value your feedback as it helps us improve our services and provide
        you with the best possible experience. Please fill out the form below to
        share your thoughts.
      </p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
