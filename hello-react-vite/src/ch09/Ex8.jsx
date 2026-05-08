import styled, { css } from 'styled-components';

const cardVariants = {
  primary: css`
    border-left: 4px solid #1f84e8;
    background: #e8f1fc;
  `,
  secondary: css`
    border-left: 4px solid #bf28ff;
    background: #fce8e8;
  `,
};

const CardWrapper = styled.div`
  border-radius: 10px;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 360px;
  margin: 1rem auto;

  ${(props) => cardVariants[props.variant] || cardVariants.primary}
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: #333;
`;

const CardContent = styled.p`
  margin: 0;
  color: #555;
  line-height: 1.6;
`;

const Ex8 = ({ title, content, variant = 'primary' }) => {
  return (
    <CardWrapper variant={variant}>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardWrapper>
  );
};

export default Ex8;
