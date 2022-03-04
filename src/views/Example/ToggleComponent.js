import React, { Component } from 'react';

class ToggleComponent extends Component {
  state = {
    showParagraph: false,
  };

  courses = [
    { name: 'Reactjs', cost: 400 },
    { name: 'Nodejs', cost: 500 },
    { name: 'FullStack', cost: 1000 },
  ];

  handleShowParagraph = () => {
    this.setState({ showParagraph: true });
  };

  handleHideParagraph = () => {
    this.setState({ showParagraph: false });
  };

  render() {
    return (
      <div>
        {this.courses.map((course, index) => {
          return (
            course.cost >= 500 && (
              <p key={index}>
                {course.name} - {course.cost}
              </p>
            )
          );
        })}
        {this.state.showParagraph ? (
          <>
            lorem ipsum dolor sit amet!
            <div>
              <button onClick={this.handleHideParagraph}>Hide</button>
            </div>
          </>
        ) : (
          <div>
            <button onClick={this.handleShowParagraph}>Show</button>
          </div>
        )}
      </div>
    );
  }
}

export default ToggleComponent;
