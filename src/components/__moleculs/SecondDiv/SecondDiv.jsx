import Smollbox from "../../__atoms/Smollbox/Smollbox";
import { useEffect, useState } from "react";
import { FetchData } from "../../__atoms/Smollbox/Axios";
function SecondDiv() {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData(setData);
  }, []);
  return (
    <>
      <div className="second_box">
        <Smollbox test="box" text={data[0]?.author} dvi={data[0]?.quote} />
        <Smollbox test="box" text={data[1]?.author} dvi={data[1]?.quote} />
        <Smollbox test="box" text={data[2]?.author} dvi={data[2]?.quote} />
        <Smollbox test="box" text={data[3]?.author} dvi={data[3]?.quote} />
        <Smollbox test="box" text={data[4]?.author} dvi={data[4]?.quote} />
      </div>
    </>
  );
}
export default SecondDiv;
