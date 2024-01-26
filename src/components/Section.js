import { FeedbackContainer } from './Feedback.Styled';
import React, { Component } from 'react';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <FeedbackContainer>
          <h2>{title}</h2>
          {children}
        </FeedbackContainer>
      </div>
    );
  }
}

export default Section;
