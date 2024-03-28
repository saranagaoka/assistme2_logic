// import "./buttonsendfaq.css";

function ButtonSenDFAQ({ faq, setInput, send_input }) {
  return (
    <button
      onClick={() => {
        // setInput(faq);
        send_input(faq);
      }}
    >
      {faq}
    </button>
  );
}

export default ButtonSenDFAQ;
