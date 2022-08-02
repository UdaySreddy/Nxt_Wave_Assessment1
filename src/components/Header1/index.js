import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Header1 extends Component {
  state = { showAddButton: true };
  redirected = () => {
    toast.info("you are redirected");
    this.setState({ showAddButton: false });
  };

  render() {
    const { showAddButton } = this.state;
    return (
      <div className="headBackground">
        <div className="logoContainer">
          <img
            className="logoNxtwave"
            src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659162662/assignment/NxtWave_TM_Coloured_logo_1_o7g18u.png"
            alt="logo"
          />
        </div>

        <div className="addButtonContainer">
          {showAddButton && (
            <Link to="/additem">
              <button
                className="addButton1"
                type="button"
                onClick={this.redirected}
              >
                <img
                  className="addButton"
                  src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659163432/assignment/Default_rp2eag.png"
                  alt="add"
                />
              </button>
            </Link>
          )}
        </div>
        <div className="userImageContainer">
          <img
            className="userImage"
            src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659164501/assignment/new_image_1x_p8axkh.png"
            alt="userpic"
          />
        </div>

        <ToastContainer />
      </div>
    );
  }
}

export default Header1;
