import type { IconProps } from "@iconify/react/dist/offline";
import { Icon as BaseIcon } from "@iconify/react/dist/offline";

import type { BaseIconName } from "@/icons";

interface Props extends IconProps {
  icon: BaseIconName;
}

export default function Icon(props: Props) {
  return <BaseIcon {...props} />;
}
