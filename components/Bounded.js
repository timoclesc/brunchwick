import styled from 'styled-components';

const Outer = styled.div`
  padding: 3rem 2rem;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.layout.maxWidth};
  margin: 0 auto;
  text-align: ${props => props.align}
`;
export const Bounded = ({
  as = 'section',
  size = 'base',
  align = 'left',
  children,
  wrapperStyles,
  innerStyles,
}) => {
  return (
    <Outer as={as}>
      <Inner align={align}>
        {children}
      </Inner>
    </Outer >
  );
};
