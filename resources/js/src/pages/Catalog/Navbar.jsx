import BackButton from "../../assets/icons/BackButton";
import Locales from "../../common/Locales";
import  Constants  from "../../common/Constants";
import { Link } from "react-router-dom";
import "./css.css";

function Navbar({ lang }) {
  return (
    <div className="c-navbar">
      <div>
        <Link to={Constants._welcome}>
          <BackButton color="currentColor" />
        </Link>
        <h4>{Locales[lang].Categories}</h4>
        <span />
      </div>
    </div>
  );
}

export default Navbar;
