import React, { useState, useEffect } from "react";

function InquiryForm() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(
      "Occurs ONCE, AFTER the initial render."
    );
  }, []);
  console.log("Occurs EVERY time the component is invoked.");
  return (
    <>
      <div>Counter: {counter}</div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </>
  );
}

export default InquiryForm;
