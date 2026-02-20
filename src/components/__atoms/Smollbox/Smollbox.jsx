import { useState } from "react";

function Smollbox({ box, text, dvi }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="buttn_div ">
      {box}
      <div className="onclick" onClick={() => setOpen(!open)}>
        {text}
        {open ? "▲" : "▼"}
      </div>

      {open && <div className="dvi_box">{dvi}</div>}
    </div>
  );
}

export default Smollbox;
// https://dummyjson.com/quotes
