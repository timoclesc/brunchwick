import styled from "styled-components";
import { Tag } from "./Tag";

const TagWrapper = styled.div(props => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: props.theme.spacers.xs,
  ...props.styles
}));


export const Tags = ({ tags, styles }) => {
  return (
    <TagWrapper styles={styles}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagWrapper>
  );
};
