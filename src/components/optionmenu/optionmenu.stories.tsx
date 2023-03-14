import React from "react";
import {Meta, Story} from  "@storybook/react";
import Optionmenu, {OptionmenuProps} from "./optionmenu";


const Template: Story<OptionmenuProps> = (args) =>(
<Optionmenu {...args} />
);
export const Basic= Template.bind({})
Basic.args= {}
export default {
    title: "Optionmenu",
    component: Optionmenu
} as Meta;
function MiComponente() {
    return (
      <div className="mi-clase">
        Contenido de mi componente
      </div>
    );
  }


