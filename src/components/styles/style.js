import { css } from "frontity";

const customStyle = css`
  .wp-block-group {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .wp-block-image img {
    filter: var(--imgfilter);
  }
  
  .wp-block-group.has-background {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  
  .wp-block-group .wp-block-columns {
    margin-bottom: 0;
  }
`;
export default customStyle;