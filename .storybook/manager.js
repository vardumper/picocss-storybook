import { addons } from "@storybook/manager-api";
import picocss from "./picocss";

addons.setConfig({
  theme: picocss,
});
