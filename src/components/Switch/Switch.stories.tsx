import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { story } from '../utils/variables/story';
import { ArgTypes } from 'storybook/internal/types';
import { DocsPage, Subtitle } from '@storybook/blocks';

const meta = {
  component: Switch,
  title: 'Athomic/Switch',
  tags: ['autodocs'],
  args: {
    label: 'Switch',
  },
  argTypes: {
    onClick: story.onClick,
    label: story.title,
    defaultToggle: story.boolean,
    required: story.boolean,
    stile: story.stile,
    labelPosition: story.labelPosition,
    disabled: story.boolean,
  } as ArgTypes,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => {
        return (
          <>
            <Subtitle>
              Please to style your custom Input component use the mockup bellow.
              below.
            </Subtitle>
            {/* <Markdown>Guide styles | .module.scss</Markdown>
            <Source language="css" code={INPUT_MODULE_SCSS_STYLES} />

            <Markdown>Guide styles | .scss</Markdown>
            <Source language="css" code={INPUT_SCSS_STYLES} /> */}
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
