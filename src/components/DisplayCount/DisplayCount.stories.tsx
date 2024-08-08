import { Meta, StoryObj } from '@storybook/react';
import DisplayCount from './DisplayCount';
import { story } from '../utils/variables/story';
import { Description, DocsPage, Source } from '@storybook/blocks';

const DISPLAY_COUNT_MODULES_SCSS_STYLES = `
.displayCount {
  .displayCount-variables {};
  .displayCount-x {};
  .displayCount-y {};
}
`;

const DISPLAY_COUNT_SCSS_STYLES = `
.displayCount {  
  &-variables {};
  &-x {};
  &-y {};
}
`;

const meta = {
  title: 'Displays/DisplayCount',
  component: DisplayCount,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      page: () => {
        return (
          <>
            <Description>
              {`/* Please to style your custom DisplayCount component use the mockup below. */`}
            </Description>

            <Description markdown={`## Guide styles | .module.scss`} />
            <Source language="css" code={DISPLAY_COUNT_MODULES_SCSS_STYLES} />

            <Description markdown={`## Guide styles | .scss`} />
            <Source language="css" code={DISPLAY_COUNT_SCSS_STYLES} />
            <DocsPage />
          </>
        );
      },
    },
  },
  args: {
    text: 'Display X of Y',
    x: 10,
    y: 0,
  },
  argTypes: {
    stile: story.stile,
    text: { control: 'text' },
    x: { control: 'text' } || { control: 'number' },
    y: { control: 'text' } || { control: 'number' },
    fixTo: { control: 'text' },
    className: story.className,
  },
} satisfies Meta<typeof DisplayCount>;
export default meta;

type TStory = StoryObj<typeof meta>;

export const Default: TStory = { args: {} };
export const Primary: TStory = { args: { stile: 'primary' } };
export const mute: TStory = { args: { stile: 'mute' } };
