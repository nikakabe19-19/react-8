import Smollbox from "../../__atoms/Smollbox/Smollbox";
function SecondDiv() {
  return (
    <>
      <div className="second_box">
        <Smollbox test="box" text="How many team members can I invite?" />
        <Smollbox test="box" text="What is the maximum file upload size?" />
        <Smollbox test="box" text="How do I reset my password?" />
        <Smollbox test="box" text="Can I cancel my subscription?" />
        <Smollbox test="box" text="Do you provide additional support?" />
      </div>
    </>
  );
}
export default SecondDiv;
