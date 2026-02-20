import { useState } from "react";

function Smollbox({ box, text }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="buttn_div ">
      {box}
      <div className="onclick" onClick={() => setOpen(!open)}>
        {text}
        {open ? "▲" : "▼"}
      </div>

      {open && <div>kabe</div>}
    </div>
  );
}

export default Smollbox;
// https://dummyjson.com/quotes
