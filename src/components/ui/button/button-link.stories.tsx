import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonLink } from "./button-link";

const meta = {
  title: "UI/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Visit Blog",
    href: "/blog",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
