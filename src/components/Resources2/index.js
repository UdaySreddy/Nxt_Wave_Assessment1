import { Component } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

class Resources2 extends Component {
  state = {
    additionObject: [],
    titleInput: "",
    linkInput: "",
    descriptionInput: "",
    iconUrl:
      "https://res.cloudinary.com/dyei9ewrb/image/upload/v1659264073/assignment/logo_ucpwfm.png",
    tag: "user",
    category: "user defined",
  };

  addTitle = (event) => {
    this.setState({ titleInput: event.target.value });
  };

  addLink = (event) => {
    this.setState({ linkInput: event.target.value });
  };

  addDescription = (event) => {
    this.setState({ descriptionInput: event.target.value });
  };

  prevent = (event) => {
    event.preventDefault();
  };

  addObject = () => {
    const {
      titleInput,
      linkInput,
      iconUrl,
      tag,
      category,
      descriptionInput,
    } = this.state;

    if (titleInput === "") {
      toast.warning("you must enter name");
    }

    const newObject = {
      title: titleInput,
      link: linkInput,
      iconUrl: iconUrl,
      tag: tag,
      category: category,
      description: descriptionInput,
      id: v4(),
    };
    console.log(newObject);

    this.setState((prevState) => ({
      additionObject: [...prevState.additionObject, newObject],
      descriptionInput: "",
      linkInput: "",
      passwordInput: "",
    }));
  };

  render() {
    return (
      <form className="pageBackground" onClick={this.prevent}>
        toast.info("you are redirected")
        <Link to="/home">
          <button type="button" className="usersButton">
            <img
              src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659249079/assignment/breadcrumbs_h5fdtt.png"
              alt="Users"
            />
          </button>
        </Link>
        <img
          className="groupImage"
          src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659246233/assignment/Group_3_xi4wnr.png"
          alt="Group3"
        />
        <form className="formContainer">
          <h1 className="headtext">Add a Resources</h1>
          <p className="paratext">NAME</p>
          <input onChange={this.addTitle} className="inputText" type="text" />
          <p className="paratext">LINK</p>
          <input onChange={this.addLink} className="inputText-1" type="text" />
          <p className="paratext">DESCRIPTION</p>
          <textarea
            onChange={this.addDescription}
            className="inputText"
            type="text"
            rows="4"
            cols="25"
          />
          <img
            className="changeimage"
            alt="changeimage"
            src="https://res.cloudinary.com/dyei9ewrb/image/upload/v1659251534/assignment/Group_38_agcjgp.png"
          />
          <div className="create">
            <button
              onClick={this.addObject}
              className="createbutton"
              type="button"
            >
              Create
            </button>
          </div>
        </form>
        <ToastContainer />
      </form>
    );
  }
}

export default Resources2;
