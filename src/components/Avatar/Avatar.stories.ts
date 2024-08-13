import { Meta, StoryObj } from '@storybook/react';

import HDLogo from '../../images/logos/hd-logo-dark-small.png';
import { Avatar } from '../Avatar/Avatar';
import { story } from '../utils/variables/story';
import { ArgTypes } from 'storybook/internal/types';

/**
 * Avatar conponent with user picture and fullname.
 */

const meta = {
  title: 'Athomic/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    abbreviation: 'HD',
    anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
    stile: 'default',
  },
  argTypes: {
    firstName: story.name,
    lastName: story.name,
    abbreviation: story.abbreviation,
    badged: story.badged,
    disabled: story.disabled,
    src: story.src,
    onClick: story.onClick,
    stile: story.stile,
    size: story.size,
    status: story.status,
    badgeContent: { control: 'text' },
    error: story.stringError,
    anchorOrigin: {
      control: {
        type: 'object', // indicate that is an object
        keys: {
          horizontal: {
            type: 'select',
            options: ['left', 'right'],
          },
          vertical: {
            type: 'select',
            options: ['top', 'bottom'],
          },
        },
      },
    },
  } as ArgTypes,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Please to style your custom input component use the mockup bellow.
### Guide styles
  .scss

    .component {
      .component-avatar {
        &[disabled] {}
        &[error] {};
      };

      .component-badge {
        &[status="statusProp"] {
          &[disabled] {};
          &[error] {};
        };
      };

      .component-abbreviation {
        &[error] {};
        &[disabled] {};
      };
    };
    

.module.scss

  use the "div" prefix to make the class more specific

    div.avatar {
      &[disabled] {};
      &[error] {};
    };

    .badge {
      &[status="statusProp"] {
        &[disabled] {};
        &[error] {};
      };
    };

    .abbreviation {
      &[error] {};
      &[disabled] {};
    };
`,
      },
    },
  },
} satisfies Meta<typeof Avatar>;
export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  args: {
    size: 'medium',
  },
};
export const Muted: TStory = {
  args: {
    size: 'medium',
    stile: 'mute',
  },
};
export const Disabled: TStory = {
  args: {
    size: 'medium',
    disabled: true,
    badged: true,
  },
};
export const Error: TStory = {
  args: {
    size: 'medium',
    badged: true,
    error: true,
  },
};
export const Primary: TStory = {
  args: {
    size: 'medium',
    stile: 'primary',
    status: 'primary',
    badged: true,
  },
};
export const PrimaryDisabled: TStory = {
  args: {
    size: 'medium',
    stile: 'primary',
    status: 'primary',
    badged: true,
    disabled: true,
  },
};
export const PrimaryError: TStory = {
  args: {
    size: 'medium',
    stile: 'primary',
    status: 'primary',
    badged: true,
    error: true,
  },
};
export const Badged: TStory = {
  args: {
    size: 'medium',
    badged: true,
  },
};
export const Online: TStory = {
  args: {
    size: 'medium',
    status: 'online',
    badged: true,
  },
};
// status stories
export const NotHere: TStory = {
  args: {
    size: 'medium',
    status: 'not-here',
    badged: true,
  },
};
export const Busy: TStory = {
  args: {
    size: 'medium',
    status: 'busy',
    badged: true,
  },
};
export const Sleep: TStory = {
  args: {
    size: 'medium',
    status: 'sleep',
    badged: true,
  },
};
// status stories
export const BackgroundImage: TStory = {
  args: {
    size: 'large',
    src: HDLogo,
  },
};
