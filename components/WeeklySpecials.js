import styled, { useTheme } from "styled-components";

import { RichText } from "./RichText";
import BrandShape from "./svg/bkg-shape-3.svg";
import { Border } from "./Border";
import { Heading } from "./Heading";
import { Currency } from "./Currency";
import { Paragraph } from "./Paragraph";

const Outer = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

const TitleBox = styled.div`
  background-color: ${(props) => props.theme.darkTheme.background};
  color: ${(props) => props.theme.darkTheme.body};
  display: flex;
  font-size: clamp(1rem, 1vw + 1rem, 1.2rem);
  justify-content: center;
  line-height: 1.33;
  padding: 3rem 2rem;
  position: relative;
  width: 100%;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 5%;
    width: 40%;
  }

  em {
    border-bottom: 2px solid ${(props) => props.theme.lightTheme.secondary};
    font-style: normal;
  }
`;

const SpecialsBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8% 7% 6% 10%;
  color: ${(props) => props.theme.darkTheme.body};

  font-size: clamp(1rem, 1vw + 1rem, 1.2rem);
  line-height: 1.33;
  font-family: ${(props) => props.theme.fonts.display};
  font-weight: 400;

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    margin-top: 3rem;
    margin-left: -2rem;
    width: calc(60% + 3rem);
  }
`;

const List = styled.ul`
  list-style: none;
  position: relative;
  z-index: 2;
`;

const ListItem = styled.li`
  color: ${(props) => props.theme.lightTheme.lightBody};
  margin-bottom: ${(props) => props.theme.spacers.xlg};
`;

export const WeeklySpecials = ({ slice }) => {
  const { title_override: title, intro_override: intro } = slice.primary;
  const theme = useTheme();


  return (
    slice.items.length > 0 ?
      <Outer>
        <TitleBox>
          <Border />
          <div>
            <Heading as={'h2'} level={2} styles={{ color: 'inherit', fontSize: '2.5rem', fontWeight: '300' }}>
              {title || <>Weekly <em>Specials</em></>}
            </Heading>
            {intro ? <RichText field={intro} /> : <Paragraph styles={{ fontSize: 'inherit' }}>Time your visit to take advantage of these generous offers</Paragraph>}
          </div>
        </TitleBox>
        <SpecialsBox>
          <BrandShape
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              color: theme.lightTheme.cardBackground,
            }}
          />
          <List>
            {slice.items.map(
              item => (
                <ListItem key={item.id}>
                  {
                    item.price ?
                      <Heading as="p" level={3} styles={{ marginBottom: '0.25rem' }}>
                        {item.day}
                      </Heading> : null
                  }
                  {
                    item.offer ?
                      <Heading as={'p'} level={2} styles={{ marginBottom: '0.5rem' }}>
                        {item.offer}
                      </Heading> : null
                  }
                  {item.price ? <Paragraph><Currency amount={item.price} /></Paragraph> : null}
                  <RichText
                    field={item.description}
                  />
                </ListItem>
              )
            )}
          </List>
        </SpecialsBox>
      </Outer >
      : <></>
  );
};
