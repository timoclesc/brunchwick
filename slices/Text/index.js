import * as prismicH from "@prismicio/helpers";

import { Bounded } from "../../components/Bounded";
import { FeatureText } from "../../components/FeatureText";

const Text = ({ slice }) => {
  return (
    <Bounded as="section">
      {prismicH.isFilled.richText(slice.primary.text) && (
        <FeatureText text={slice.primary.text} svg="none" />
      )}
    </Bounded>
  );
};

export default Text;
