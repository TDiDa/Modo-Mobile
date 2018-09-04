import * as React from 'react';
import classNames from 'classnames';
import createFromIconfontCN from './IconFont';
import { svgBaseProps } from './utils';
import warning from '../_util/warning';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_821530_ie0kr3bhns.js',
});

export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
  ['aria-hidden']?: string;
}

export interface IconProps {
  type?: string;
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  component?: React.ComponentType<CustomIconComponentProps>;
  viewBox?: string;
  spin?: boolean;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  svgClassName?: string;
  prefixCls?: string;
}

const Icon: React.SFC<IconProps> = props => {
  const {
    // affect outter <i>...</i>
    className,

    // affect inner <svg>...</svg>
    type,
    component: Component,
    viewBox,
    spin,

    // children
    children,

    ...restProps
  } = props;

  warning(
    Boolean(type || Component || children),
    'Icon should have `type` prop or `component` prop or `children`.',
  );

  const classString = classNames(
    {
      [`m-icon`]: true,
      [`m-icon-${type}`]: Boolean(type),
    },
    className,
  );

  const svgClassString = classNames({
    [`m-icon-spin`]: !!spin || type === 'loading',
  });

  let innerNode;

  // component > children > type
  if (Component) {
    const innerSvgProps: CustomIconComponentProps = {
      ...svgBaseProps,
      className: svgClassString,
      viewBox,
    };
    if (!viewBox) {
      delete innerSvgProps.viewBox;
    }

    innerNode = <Component {...innerSvgProps}>{children}</Component>;
  }

  if (children) {
    warning(
      Boolean(viewBox) ||
        (React.Children.count(children) === 1 && React.Children.only(children).type === 'use'),
      'Make sure that you provide correct `viewBox`' +
        ' prop (default `0 0 1024 1024`) to the icon.',
    );
    const innerSvgProps: CustomIconComponentProps = {
      ...svgBaseProps,
      className: svgClassString,
    };
    innerNode = (
      <svg {...innerSvgProps} viewBox={viewBox}>
        {children}
      </svg>
    );
  }

  if (typeof type === 'string') {
    innerNode = <IconFont className={svgClassString} type={`icon-${type}`} />;
  }

  return (
    <i {...restProps} className={classString}>
      {innerNode}
    </i>
  );
};

export type IconType = typeof Icon & {
  createFromIconfontCN: typeof createFromIconfontCN;
};

Icon.displayName = 'Icon';
(Icon as IconType).createFromIconfontCN = createFromIconfontCN;

export default Icon as IconType;