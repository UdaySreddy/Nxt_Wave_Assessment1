import { Component } from "react";
import Resources from "../Resources";

import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class LoginForm extends Component {
  state = {
    firstNameInput: "",
    lastNameInput: "",
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  };

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName();

    this.setState({ showLastNameError: !isValidLastName });
  };

  onChangeLastName = (event) => {
    const { target } = event;
    const { value } = target;

    this.setState({
      lastNameInput: value,
    });
  };

  renderLastNameField = () => {
    const { lastNameInput, showLastNameError } = this.state;
    const className = showLastNameError
      ? "name-input-field error-field"
      : "name-input-field";

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    );
  };

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName();

    this.setState({ showFirstNameError: !isValidFirstName });
  };

  onChangeFirstName = (event) => {
    const { target } = event;
    const { value } = target;

    this.setState({
      firstNameInput: value,
    });
  };

  renderFirstNameField = () => {
    const { firstNameInput, showFirstNameError } = this.state;
    const className = showFirstNameError
      ? "name-input-field error-field"
      : "name-input-field";

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        <ToastContainer />
      </div>
    );
  };

  validateLastName = () => {
    const { lastNameInput } = this.state;

    return lastNameInput !== "";
  };

  validateFirstName = () => {
    const { firstNameInput } = this.state;

    return firstNameInput !== "";
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const isValidFirstName = this.validateFirstName();
    const isValidLastName = this.validateLastName();

    if (isValidFirstName && isValidLastName) {
      this.setState({ isFormSubmitted: true });
      toast.success("submitted");
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      });
      toast.error("error in submition");
    }
  };

  renderRegistrationForm = () => {
    const { showFirstNameError, showLastNameError } = this.state;

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    );
  };

  renderSubmissionSuccessView = () => <Resources />;

  render() {
    const { isFormSubmitted } = this.state;

    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    );
  }
}

export default LoginForm;
