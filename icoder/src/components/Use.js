import React, { useState, useEffect } from "react";

function Use() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 5)}>Click me</button>
      </div>
    </div>
  );
}

export default Use;
