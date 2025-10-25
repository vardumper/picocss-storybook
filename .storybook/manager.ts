import { addons } from "@storybook/addons";
import picocss from "./picocss";

addons.setConfig({
  theme: picocss,
});

export { picocss as theme };
