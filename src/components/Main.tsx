import React from "react";
import "./main.css";

class Main extends React.Component {
  state = {
    gender: "",
    weight: "",
    standardDrinksCount: "",
    timeStartedDrinking: "",
  };

  handleChange = (event: { target: { name: any; value: any } }) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  calculateBAC = () => {
    return "";
  };

  render() {
    return (
      <div className="page-container">
        <div className="centered-flex wrapped-flex text-white">
          <div className="title centered-flex">
            <h1>How drunk are you?</h1>
          </div>
          <form className="form-container">
            <label>Gender</label>
            <input type="text" name="gender" onChange={this.handleChange} />

            <label>Weight (kg)</label>
            <input type="text" name="weight" onChange={this.handleChange} />

            <label>How many standard drinks?</label>
            <input
              type="text"
              name="standardDrinksCount"
              onChange={this.handleChange}
            />

            <label>How long ago did you start drinking?</label>
            <input
              type="text"
              name="timeStartedDrinking"
              onChange={this.handleChange}
            />

            <input type="submit" value="Submit" onClick={this.calculateBAC} />
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
