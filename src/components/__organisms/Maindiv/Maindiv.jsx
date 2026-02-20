import imagebox from "../../../assets/imagebox.svg";
import SecondDiv from "../../__moleculs/SecondDiv/SecondDiv";

function Maindiv() {
  return (
    <>
      <div className="main_box">
        <div className="image_box">
          <img className="image_box" src={imagebox} alt="" />
        </div>

        <SecondDiv />
      </div>
    </>
  );
}
export default Maindiv;
