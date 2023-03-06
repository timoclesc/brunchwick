import Link from "next/link";
import { PrismicLink } from "@prismicio/react";
import styled from "styled-components";

const ButtonEl = styled.button((props) => {
  const sizes = {
    sm: "1rem",
    md: "1.625rem",
  };
  const { lightTheme, animation, spacers } = props.theme;
  return {
    "> *": {
      fontSize: sizes[props.size],
      backgroundImage: `linear-gradient(to top, ${lightTheme.link} 0%, ${lightTheme.link} 100%)`,
      backgroundSize: "100% 10px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0% 100%",
      transition: `background-size ${animation.easing} ${animation.duration}`,
      ...props.styles,

      "&::after": {
        content: props.isReversed ? "none" : "'➳'",
        display: "inline-block",
        paddingInlineStart: "1ch",
        transition: `transform ${animation.easing} ${animation.duration}`,
      },

      "&::before": {
        content: props.isReversed ? "'←'" : "none",
        display: "inline-block",
        paddingInlineEnd: "1ch",
        transition: `transform ${animation.easing} ${animation.duration}`,
      },

      "&:hover": {
        backgroundSize: "100% 100%",

        "&::after": {
          transform: `translate(${spacers.xs})`,
        },

        "&::before": {
          transform: `translate(-${spacers.xs})`,
        },
      },
    },
  };
});

export const Button = ({
  as = "button",
  field,
  size = "md",
  isReversed = false,
  styles,
  children,
}) => {
  if (as === "a") {
    return (
      <PrismicLink
        field={field}
        internalComponent={(props) => (
          <ButtonEl as={"span"} size={size} isReversed={isReversed}>
            <Link {...props} />
          </ButtonEl>
        )}
      >
        {children}
      </PrismicLink>
    );
  } else {
    return (
      <ButtonEl as={as} size={size} isReversed={isReversed} styles={styles}>
        {children}
      </ButtonEl>
    );
  }
};
