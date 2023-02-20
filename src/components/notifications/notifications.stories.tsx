import React from "react";
import {Meta, Story} from  "@storybook/react";
import Notifications, { NotificationsProps } from "./notifications";

const Template: Story<NotificationsProps> = (args) =>(
<Notifications {...args} />
);
export const Basic= Template.bind({})
Basic.args ={}
export default {
    title: "notificaciones",
    component: Notifications
} as Meta;