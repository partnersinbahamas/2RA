import { IStoryControl } from '../types/types';

// NOTE: story controls-options object;
export const story: IStoryControl = {
  // controles
  name: { control: 'text' },
  abbreviation: { control: 'text' },
  title: { control: 'text' },
  stringValue: { control: 'text' },
  badged: { control: 'boolean' },
  disabled: { control: 'boolean' },
  stringError: { control: 'text' },
  backgroundColor: { control: 'color' },
  className: { control: 'text' },
  src: { control: 'text' },
  children: { control: 'child' },
  boolean: { control: 'boolean' },

  // options
  stile: {
    control: 'inline-radio',
    options: ['primary', 'default', 'mute'],
  },
  size: {
    control: 'inline-radio',
    options: ['small', 'medium', 'large'],
  },
  status: {
    control: 'inline-radio',
    options: ['online', 'default', 'not-here', 'busy', 'sleep', 'primary'],
  },
  inputType: {
    control: 'radio',
    options: ['text', 'password', 'email', 'number'],
  },
  buttonType: {
    control: 'inline-radio',
    options: ['button', 'submit', 'reset'],
  },
  labelPosition: {
    control: 'inline-radio',
    options: ['top', 'bottom', 'left', 'right'],
  },

  //handles
  onClick: { action: 'clicked' },
  onChange: { action: 'changed' },
};
