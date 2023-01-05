import * as prismicH from "@prismicio/helpers";

import { Bounded } from "../../components/Bounded";
import { RichText } from "../../components/RichText";

const Text = ({ slice }) => {
  return (
    <Bounded as="section">
      {prismicH.isFilled.richText(slice.primary.text) && (
        <div className="font-serif leading-relaxed md:text-xl md:leading-relaxed">
          <RichText field={slice.primary.text} />
        </div>
      )}
    </Bounded>
  );
};

export default Text;
