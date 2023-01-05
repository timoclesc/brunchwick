import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";

import styled from 'styled-components';

const Strong = styled.strong`
  font-weight: 700;
`;

const Ol = styled.ol`
  margin-block-end: ${props => props.theme.spacers.xlg};
  padding-inline-start: 1rem;

  & li:last-child {
    padding-block-end: 0
  }
`;

const Ul = styled.ul`
  margin-block-end: ${props => props.theme.spacers.xlg};
  padding-inline-start: 1rem;

  & li:last-child {
    padding-block-end: 0
  }
`;

const Li = styled.li`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Pre = styled.pre`
  padding: 2rem;
  background-color: ${props => props.theme.color.lightGrey};
  font-size: 1rem;
  border-radius: 0.25rem;
  margin-block-end: ${props => props.theme.spacers.xlg};
`;

export const richTextComponents = {
  heading1: ({ children }) => <Heading as="h1">{children}</Heading>,
  heading2: ({ children }) => <Heading as="h2">{children}</Heading>,
  heading3: ({ children }) => <Heading as="h3">{children}</Heading>,
  heading4: ({ children }) => <Heading as="h5">{children}</Heading>,
  paragraph: ({ children, styles }) => <Paragraph as="p" styles={styles}>{children}</Paragraph>,
  oList: ({ children }) => (
    <Ol>{children}</Ol>
  ),
  oListItem: ({ children }) => (
    <Li>{children}</Li>
  ),
  list: ({ children }) => (
    <Ul>{children}</Ul>
  ),
  listItem: ({ children }) => (
    <Li>{children}</Li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <Strong>{children}</Strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      style={{
        paddingBlockEnd: '0.125rem',
        borderBottom: '1px solid black',
      }}
    >
      {children}
    </PrismicLink>
  ),
};

export const RichText = ({ field }) => {
  return (
    <PrismicRichText
      field={field}
      components={{
        richTextComponents,
      }}
    />
  );
};
