import Button from './Button.vue';
import ButtonGroup from "./ButtonGroups.vue";
import { withInstall } from '@hao-ui/utils'

export const HaoButton = withInstall(Button);
export const HaoButtonGroup = withInstall(ButtonGroup);
export * from "./types";