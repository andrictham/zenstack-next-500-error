"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ICON_STROKE } from "@/app/theming";
import { type TablerIcon } from "@/components/utils/TablerIcon.type";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import {
  Group,
  Stack,
  UnstyledButton,
  useComputedColorScheme,
} from "@mantine/core";

import ThemeSwitcherButton from "../ThemeSwitcherButton";
import classes from "./SideNav.module.css";

type NavLink = {
  icon: TablerIcon;
  label: string;
  destination: string;
};

interface IMenuItemProps {
  isSelected: boolean;
  link: NavLink;
}

const MenuItem: React.FC<IMenuItemProps> = ({ isSelected, link }) => {
  return (
    <UnstyledButton
      key={link.label}
      className={
        isSelected
          ? `${classes.NavLink} ${classes.NavLinkSelected}`
          : classes.NavLink
      }
      component={Link}
      href={link.destination}
    >
      <div className={classes.mainLinkInner}>
        <link.icon
          size={24}
          className={classes.mainLinkIcon}
          stroke={ICON_STROKE}
        />
        <span>{link.label}</span>
      </div>
    </UnstyledButton>
  );
};

interface ISideNavProps {
  opened: boolean;
  close: () => void;
  navLinks: NavLink[];
}

export const SideNav: React.FC<ISideNavProps> = ({ close, navLinks }) => {
  const currentRoute = usePathname() ?? "";

  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  // NOTE: useState & useEffect: Workaround for detecting change in path
  // Close mobile menu when user navigates to another route

  const currentPathname = usePathname();
  const [pathname, setPathname] = useState(currentPathname);

  useEffect(() => {
    if (currentPathname !== pathname) {
      close();
      setPathname(currentPathname);
    }
  }, [currentPathname, pathname, close]);

  const homeLink = navLinks
    .filter((link) => link.destination === "/")
    .map((link) => (
      <MenuItem
        key={link.label}
        isSelected={currentRoute === `${link.destination}`}
        link={link}
      />
    ));

  const mainLinks = navLinks
    .filter((link) => link.destination !== "/")
    .map((link) => (
      <MenuItem
        key={link.label}
        isSelected={currentRoute.startsWith(`${link.destination}`)}
        link={link}
      />
    ));

  return (
    <Stack gap="lg">
      <Group py="xs" justify="space-between">
        <ThemeSwitcherButton />
        <UserButton
          appearance={{
            baseTheme: computedColorScheme === "dark" ? dark : undefined,
          }}
          afterSignOutUrl="/"
          afterMultiSessionSingleSignOutUrl="/library"
          afterSwitchSessionUrl="/library"
        />
      </Group>

      <Stack gap="sm">
        {homeLink}
        {mainLinks}
      </Stack>
    </Stack>
  );
};

export default SideNav;
