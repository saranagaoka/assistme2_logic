import ButtonSenDFAQ from "./ButtonSendFAQ";
import "./message.css";

function Bot({
  response,
  setInput,
  send_input,
  isDisabled,
  questions = false,
}) {
  return (
    <div className="message">
      <div className="robot_name">@Llama_superhero</div>
      <div className="message_chat">{response}</div>
      {/* <div className="robot_questions">
        {questions ? (
          <ol>
            <li>
              <ButtonSenDFAQ
                faq="What is fibromyalgia?"
                setInput={setInput}
                send_input={send_input}
                isDisabled={isDisabled}
              />
            </li>
            <li>
              <ButtonSenDFAQ
                faq="What is the cause of fibromyalgia?"
                setInput={setInput}
                send_input={send_input}
                isDisabled={isDisabled}
              />
            </li>
            <li>
              <ButtonSenDFAQ
                faq="What are symptoms of fibromyalgia?"
                setInput={setInput}
                send_input={send_input}
                isDisabled={isDisabled}
              />
            </li>
          </ol>
        ) : (
          <></>
        )}
      </div> */}
    </div>
  );
}

export default Bot;
