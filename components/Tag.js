import styled from "styled-components";

const TagSpan = styled.span`
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  background-color: ${(props) => props.theme.lightTheme.accent};
  color: ${(props) => props.theme.lightTheme.heading};
  border-radius: 0.5rem;
`;

export const Tag = ({ children }) => <TagSpan>{children}</TagSpan>;
