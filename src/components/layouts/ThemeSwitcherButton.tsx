import { ICON_STROKE } from "@/app/theming";
import { ActionIcon, Menu, rem, useMantineColorScheme } from "@mantine/core";
import {
  IconBrightnessHalf,
  IconCheck,
  IconMoon,
  IconShadow,
  IconSunFilled,
} from "@tabler/icons-react";

export const ThemeSwitcherButton = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Menu
      shadow="md"
      width={180}
      position="bottom-end"
      offset={4}
      transitionProps={{ transition: "pop-top-right", duration: 100 }}
    >
      <Menu.Target>
        <ActionIcon
          variant="light"
          aria-label="Toggle light and dark modes"
          size="lg"
        >
          <IconBrightnessHalf />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Set theme to…</Menu.Label>

        <Menu.Item
          leftSection={
            <IconSunFilled
              stroke={ICON_STROKE}
              style={{ width: rem(24), height: rem(24) }}
            />
          }
          rightSection={
            colorScheme === "light" ? (
              <IconCheck style={{ width: rem(16), height: rem(16) }} />
            ) : null
          }
          onClick={() => setColorScheme("light")}
        >
          Light
        </Menu.Item>

        <Menu.Item
          leftSection={
            <IconMoon
              stroke={ICON_STROKE}
              style={{ width: rem(24), height: rem(24) }}
            />
          }
          rightSection={
            colorScheme === "dark" ? (
              <IconCheck style={{ width: rem(16), height: rem(16) }} />
            ) : null
          }
          onClick={() => setColorScheme("dark")}
        >
          Dark
        </Menu.Item>

        <Menu.Item
          leftSection={
            <IconShadow
              stroke={ICON_STROKE}
              style={{ width: rem(24), height: rem(24) }}
            />
          }
          rightSection={
            colorScheme === "auto" ? (
              <IconCheck style={{ width: rem(16), height: rem(16) }} />
            ) : null
          }
          onClick={() => setColorScheme("auto")}
        >
          System
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ThemeSwitcherButton;
