/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;

if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  console.warn(
    'You are using a whole package of modo-mobile, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}

export { default as Button } from './button';
export { default as Icon } from './icon/index';
export { default as NoticeBar } from './notice-bar';
export { default as Agree } from './agree';
export { default as List } from './list';
export { default as Stepper } from './stepper';
export { default as Popup } from './popup';
export { default as NumberKeyboard } from './number-keyboard';
export { default as ActivityIndicator } from './activity-indicator';
export { default as InputItem } from './input-item';
export { default as Picker } from './picker';
export { default as version } from './version';
