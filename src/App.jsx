import { useEffect, useState, useRef } from "react";
import "./App.css";
import Bot from "./Message";
import Robot from "./Robot";
import User from "./messageRespone";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);

  const send_input = async (faq = input) => {
    setResponse((prev) => [...prev, { user_question: faq, your_previous_answer: "" }]);
    setIsDisabled(true);
    setInput("");
    try {
      const response_api = await fetch("http://34.0.240.20:5000/post_json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ context: response, user_question: faq }),
      });

      const from_api = await response_api.json();
      setResponse((prev) => [
        ...prev.slice(0, prev.length - 1),
        { user_question: faq, your_previous_answer: from_api.generated_text },
      ]);
    } catch {
      setResponse((prev) => [
        ...prev.slice(0, prev.length - 1),
        {
          user_question: faq,
          your_previous_answer:
            "It seems that our Robot is sleeping now, we will let you know when he is back to work!",
        },
      ]);
      setIsError(true);
    }

    setIsDisabled(false);
    setTimeout(() => focusRef.current.focus(), 0);
  };

  const messageRef = useRef();
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [response]);
  const focusRef = useRef(null);
  const submitting = (e) => {
    e.preventDefault();
    send_input();
  };

  return (
    <div className="container">
      <div className="container_left">
        <div className="welcome_header">
          <div className="welcome_header_top">Welcome to</div>
          <div className="welcome_header_bottom">Yet Another Super Llama Robot</div>
        </div>

        <div className="form_container">
          <Bot
            response="Hello! I'm you superhero to answer the questions about fibromyalgia. I have access to documents, based on which I can answer all your questions and explain as a kindergarden teacher! If you don't know what to ask, here you have most common questions:"
            setInput={setInput}
            send_input={send_input}
            isDisabled={isDisabled}
            questions
          />

          {response.map((resp) => (
            <>
              <User input={resp.user_question} />
              {resp.your_previous_answer !== "" ? (
                <Bot
                  response={resp.your_previous_answer}
                  setInput={setInput}
                  send_input={send_input}
                  isDisabled={isDisabled}
                />
              ) : (
                <></>
              )}
            </>
          ))}
          <div ref={messageRef}></div>
        </div>

        <form onSubmit={submitting} className="input_place">
          <input
            className="input_chat"
            ref={focusRef}
            value={input}
            type="text"
            disabled={isDisabled}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="button_send" disabled={isDisabled}>
            ask
          </button>
        </form>
      </div>
      <div className="container_right">
        <Robot isDisabled={isDisabled} isError={isError} />
      </div>
    </div>
  );
}

export default App;
