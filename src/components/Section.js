import { FeedbackContainer } from './Feedback.Styled';

const Section = ({ title, children }) => {
  return (
    <div>
      <FeedbackContainer>
        <h2>{title}</h2>
        {children}
      </FeedbackContainer>
    </div>
  );
};

export default Section;
