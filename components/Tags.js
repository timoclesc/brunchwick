import styled from "styled-components";
import { Tag } from "./Tag";

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tags = ({ tags }) => {
  return (
    <TagWrapper>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagWrapper>
  );
};
