import React from 'react';
import { ArgTypes } from 'storybook/internal/types';

import { Meta, StoryObj } from '@storybook/react';
import { DocsPage, Markdown, Source, Subtitle } from '@storybook/blocks';

import { story } from '../utils/variables/story';

import { Switch } from './Switch';

const SWITCH_MODULE_SCSS_STYLES = `
.wrapper {
  &[error] {};
  &[disabled] {};
}

.label {
  &[error] {};
  &[disabled] {};
}

input.input[type='checkbox'] {
  /* switch circle */
  &::before {};

  /* checked switch circle */
  &:checked::before {};

  /* switch line indicator */
  &::after {};

  /* checked switch line indicator */
  &:checked::after {};

  &[error] {};
  &[disabled] {};
}
`;

const SWITCH_SCSS_STYLES = `
.className {
  &[error] {};
  &[disabled] {};

  .className-label {
    &[error] {};
    &[disabled] {};
  }

  .className-input[type='checkbox'] {
    /* switch circle */
    &::before {};

    /* checked switch circle */
    &:checked::before {};

    /* switch line indicator */
    &::after {};

    /* checked switch line indicator */
    &:checked::after {};

    &[error] {};
    &[disabled] {};
  }
}

`;

const meta = {
  component: Switch,
  title: 'Athomic/Switch',
  tags: ['autodocs'],
  args: {
    label: 'Switch',
  },
  argTypes: {
    onChage: story.onChange,
    label: story.title,
    defaultToggle: story.boolean,
    required: story.boolean,
    stile: story.stile,
    labelPosition: story.labelPosition,
    disabled: story.boolean,
    error: story.stringError,
  } as ArgTypes,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => {
        return (
          <>
            <Subtitle>
              Please to style your custom Switch component use the mockup
              bellow. below.
            </Subtitle>
            <Markdown>Guide styles | .module.scss</Markdown>
            <Source language="css" code={SWITCH_MODULE_SCSS_STYLES} />

            <Markdown>Guide styles | .scss</Markdown>
            <Source language="css" code={SWITCH_SCSS_STYLES} />
            <DocsPage />
          </>
        );
      },
    },
  },
} satisfies Meta<typeof Switch>;
export default meta;

type TStory = StoryObj<typeof meta>;
export const Default: TStory = {};
export const Error: TStory = { args: { error: true } };
export const DefaultCheck: TStory = { args: { defaultToggle: true } };
export const DefaultDisabled: TStory = { args: { disabled: true } };

export const Primary: TStory = { args: { stile: 'primary' } };
export const PrimaryCheck: TStory = {
  args: {
    stile: 'primary',
    defaultToggle: true,
  },
};
export const PrimaryDisabled: TStory = {
  args: {
    stile: 'primary',
    disabled: true,
  },
};

export const Mute: TStory = { args: { stile: 'mute' } };
export const MuteCheck: TStory = {
  args: {
    stile: 'mute',
    defaultToggle: true,
  },
};
export const MuteDisabled: TStory = {
  args: {
    stile: 'mute',
    disabled: true,
  },
};
