import React from "react";
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
      <div className="w-full h-screen bg-gradient-to-br from-blue-400 to-pink-300">
        <div className="flex justify-center flex-wrap text-white">
          <div className="w-full mt-16 mb-12 text-3xl text-center flex justify-center">
            <h1>How drunk are you?</h1>
          </div>
          <form className="w-80">
            <label>Gender</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-50 rounded-md box-border mt-1 mb-4 resize-y"
              name="gender"
              onChange={this.handleChange}
            />

            <label>Weight (kg)</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-50 rounded-md box-border mt-1 mb-4 resize-y"
              name="weight"
              onChange={this.handleChange}
            />

            <label>How many standard drinks?</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-50 rounded-md box-border mt-1 mb-4 resize-y"
              name="standardDrinksCount"
              onChange={this.handleChange}
            />

            <label>How long ago did you start drinking?</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-50 rounded-md box-border mt-1 mb-4 resize-y"
              name="timeStartedDrinking"
              onChange={this.handleChange}
            />

            <input
              type="submit"
              className="bg-gray-400 text-white py-3 px-5 border-none rounded-md cursor-pointer hover:bg-gray-600"
              value="Submit"
              onClick={this.calculateBAC}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
