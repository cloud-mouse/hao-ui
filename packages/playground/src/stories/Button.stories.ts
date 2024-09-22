import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn } from '@storybook/test'

import { HaoButton } from 'hao-ui'
import components from 'hao-ui/components'
import { template } from 'lodash-es'

type Story = StoryObj<typeof HaoButton> & { argTypes: ArgTypes }

const meta: Meta<typeof HaoButton> = {
  title: 'Components/Button',
  component: HaoButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
}

const container = (val: string) => `
<div style="margin: 5px">
${val}
</div>
` 
export const Default: Story & { args: { content: string} }= {
  argTypes: {
    content: {
      control: 'text',
    }
  },
  args: {
    type: 'primary',
    content: 'Button',
  },
  render: (args: any) => ({
    components: { HaoButton },
    setup() { 
      return { args }
    },
    template: container(`<hao-button v-bind="args">{{args.content}}</hao-button`)
  }) 
}
export default meta

export const Primary: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: 'text',
    }
  },
  args: {
    type: 'primary',
    content: 'primary',
  },
  render: (args: any) => ({
    components: { HaoButton },
    setup() { 
      return { args }
    },
    template: container(`<hao-button v-bind="args">{{args.content}}</hao-button`)
  })
}

export const Success: Story = {
  argTypes: {
    content: {
      control: 'text',
    }
  },
  args: {
    type: 'success',
    content: 'success',
  },
  render: (args: any) => ({
    components: { HaoButton },
    setup() { 
      return { args }
    },
    template: container(`<hao-button v-bind="args">{{args.content}}</hao-button`)
  })
}