import { FeedbackButton } from './Feedback.Styled';
import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map(option => (
          <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackButton>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
