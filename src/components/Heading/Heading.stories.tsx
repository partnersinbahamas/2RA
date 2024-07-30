import { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';
import { story } from '../utils/variables/story';
import { ArgTypes } from 'storybook/internal/types';

const meta = {
  title: 'Athomic/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: { level: 1 },
  argTypes: {
    level: { control: { type: 'number', min: 1, max: 6 } },
    children: story.children,
  } as ArgTypes,
} satisfies Meta<typeof Heading>;
export default meta;

type TStory = StoryObj<typeof meta>;

export const h1: TStory = { args: { level: 1 } };
export const h2: TStory = { args: { level: 2 } };
export const h3: TStory = { args: { level: 3 } };
export const h4: TStory = { args: { level: 4 } };
export const h5: TStory = { args: { level: 5 } };
export const h6: TStory = { args: { level: 6 } };
