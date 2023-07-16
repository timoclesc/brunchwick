import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "./Banner";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Banner> = {
  title: "Molecule/Banner",
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    title: "Hello world",
    date: new Date(),
  },
};
