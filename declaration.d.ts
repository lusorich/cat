declare module '*.scss' {
  const content: Record<string, string>;
  // eslint-disable-next-line no-restricted-syntax
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  // eslint-disable-next-line no-restricted-syntax
  export default content;
}

declare module '*.png';

declare module '*.jpg';

type SvgrComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: React.FC<React.SVGProps<SVGSVGElement>>;
  // eslint-disable-next-line no-restricted-syntax
  export default src;
}
