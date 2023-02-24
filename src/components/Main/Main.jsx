import { data } from "../../helper/data";
//import Footer from "../Footer/Footer";
import Card from "../Main/Card";
import "./Main.scss";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default Main;
