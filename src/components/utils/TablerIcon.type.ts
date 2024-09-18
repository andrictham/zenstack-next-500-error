// WORKAROUND for broken types in `@tabler/icons-react`
// See: https://github.com/tabler/tabler-icons/issues/1035#issuecomment-1997198857

import { type Icon, type IconProps } from "@tabler/icons-react";

export type TablerIcon = React.ForwardRefExoticComponent<
  Omit<IconProps, "ref"> & React.RefAttributes<Icon>
>;
