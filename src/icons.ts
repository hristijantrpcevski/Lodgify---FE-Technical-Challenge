import { addCollection, type IconifyIcon } from "@iconify/react/dist/offline";
import Clipboard from "@iconify/icons-fluent/clipboard-text-ltr-20-regular";
import ChevronUp from "@iconify/icons-fluent/chevron-up-28-regular";

//* https://docs.iconify.design/icon-components/react/add-icon.html
//* http://icon-sets.iconify.design/fluent/ library for the icons
//* HERE WE CAN IMPLEMENT CUSTOM ICONS

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type IconPrefix = "regular" | "solid";

export type BaseIconName = `${IconPrefix}:${IconName}`;

export type IconName = "clipboard" | "chevron-up";

addCollection({
  prefix: "regular",
  icons: {
    clipboard: Clipboard,
  } as PartialRecord<IconName, IconifyIcon>,
});

addCollection({
  prefix: "solid",
  icons: {
    "chevron-up": ChevronUp,
  } as PartialRecord<IconName, IconifyIcon>,
});
