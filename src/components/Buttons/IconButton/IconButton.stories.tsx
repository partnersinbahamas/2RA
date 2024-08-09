import { Meta, StoryObj } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs';
import { Markdown, Source, Subtitle } from '@storybook/blocks';
import { DataTreeIcon } from '../../Icons';
import { story } from '../../utils/variables/story';
import { COOL_GRAY_100 } from '../../Colors/colors';
import IconButton from './IconButton';
import { ArgTypes } from 'storybook/internal/types';

const ICONBUTTON_MODULE_SCSS_STYLES = `
.wrapper {
  &[error] {};
  &[disabled] {};
}

button.button {
  &[error] {};
  &[disabled] {};
}

label.label {
  &[error] {};
  &[disabled] {};
}

.ripple {
  &[error] {};
}
`;

const ICONBUTTON_SCSS_STYLES = `
.class {
  &[error] {};
  &[disabled] {};

  .class-button {
    &[error] {};
    &[disabled] {};
  }

  .class-label {
    &[error] {};
    &[disabled] {};
  }

  .class-ripple {
    &[error] {};
  }
}
`;

const meta = {
  title: 'Athomic/Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      page: () => {
        return (
          <>
            <Subtitle>
              Please to style your custom IconButton component use the mockup
              below.
            </Subtitle>
            <Markdown>Guide styles | .module.scss</Markdown>
            <Source language="css" code={ICONBUTTON_MODULE_SCSS_STYLES} />

            <Markdown>Guide styles | .scss</Markdown>
            <Source language="css" code={ICONBUTTON_SCSS_STYLES} />
            <DocsPage />
          </>
        );
      },
    },

    code: 'if (true) return;',
  },
  args: {
    labelPosition: 'bottom',
    children: <DataTreeIcon />,
  },
  argTypes: {
    children: story.children,
    size: story.size,
    label: story.title,
    onClick: story.onClick,
    stile: story.stile,
    backgroundColor: story.backgroundColor,
    showLabel: story.boolean,
    labelPosition: story.labelPosition,
    disabled: story.disabled,
    error: story.stringError,
  } as ArgTypes,
} satisfies Meta<typeof IconButton>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Default: TStory = { args: { children: <DataTreeIcon /> } };
export const DefaultLabel: TStory = {
  args: {
    stile: 'default',
    label: 'Default',
    showLabel: true,
  },
};

export const DefaultDisabled: TStory = {
  args: {
    stile: 'default',
    label: 'Default',
    showLabel: true,
    disabled: true,
  },
};

export const Primary: TStory = {
  args: {
    stile: 'primary',
  },
};

export const PrimaryLabel: TStory = {
  args: {
    stile: 'primary',
    label: 'Primary',
    showLabel: true,
  },
};

export const PrimaryDisabled: TStory = {
  args: {
    stile: 'primary',
    label: 'Primary',
    showLabel: true,
    disabled: true,
  },
};

export const Mute: TStory = { args: { stile: 'mute' } };
export const MuteLabel: TStory = {
  args: {
    stile: 'mute',
    label: 'Mute',
    showLabel: true,
  },
};

export const MuteDisabled: TStory = {
  args: {
    stile: 'mute',
    label: 'Mute',
    showLabel: true,
    disabled: true,
  },
};

export const Backgroup: TStory = {
  args: {
    backgroundColor: COOL_GRAY_100,
    children: <DataTreeIcon />,
  },
};
