import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { story } from '../../utils/variables/story';
import { ArgTypes } from 'storybook/internal/types';
import { DocsPage, Markdown, Source, Subtitle } from '@storybook/blocks';

const BUTTON_BOTH_SCSS_STYLES = `
button.button {
  &[disabled] {};
  &[error] {};
}
`;

const meta = {
  title: 'Athomic/Buttons/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    size: story.size,
    type: story.buttonType,
    onClick: story.onClick,
    className: story.className,
    title: story.title,
    disabled: story.disabled,
    error: story.stringError,
  } as ArgTypes,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => {
        return (
          <>
            <Subtitle>
              Please to style your custom Button component use the mockup
              below.
            </Subtitle>
            <Markdown>Guide styles | .module.scss & .scss</Markdown>
            <Source language="css" code={BUTTON_BOTH_SCSS_STYLES} />
            <DocsPage />
          </>
        );
      },
    },
  }
} satisfies Meta<typeof Button>;
export default meta;

type TStory = StoryObj<typeof meta>;

export const Default: TStory = {};
export const Error: TStory = { args: { error: true } };
export const DefaultDisabled: TStory = { args: { disabled: true } };

export const Primary: TStory = { args: { stile: 'primary' } };
export const PrimaryDisabled: TStory = {
  args: {
    stile: 'primary',
    disabled: true,
  },
};

export const Mute: TStory = { args: { stile: 'mute' } };
export const MuteDisabled: TStory = {
  args: {
    stile: 'mute',
    disabled: true,
  },
};
