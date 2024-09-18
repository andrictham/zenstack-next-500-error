"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ICON_STROKE, outfit } from "@/app/theming";
import { type TablerIcon } from "@/components/utils/TablerIcon.type";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import {
  Burger,
  Button,
  Group,
  Title,
  UnstyledButton,
  useComputedColorScheme,
} from "@mantine/core";

import classes from "./HeaderNav.module.css";

const ThemeSwitcherButton = dynamic(
  () => import("@/components/layouts/ThemeSwitcherButton"),
  {
    ssr: false,
  },
);

interface IHeaderNavProps {
  opened: boolean;
  toggle: () => void;
  navLinks: {
    icon: TablerIcon;
    label: string;
    destination: string;
  }[];
}

export const HeaderNav: React.FC<IHeaderNavProps> = ({
  opened,
  toggle,
  navLinks,
}) => {
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  const currentRoute = usePathname();

  const mainLinks = navLinks
    .filter((link) => link.destination !== "/")
    .map((link) => (
      <UnstyledButton
        key={link.label}
        className={
          currentRoute?.startsWith(`${link.destination}`)
            ? `${classes.NavLink} ${classes.NavLinkSelected}`
            : classes.NavLink
        }
        component={Link}
        href={link.destination}
      >
        <div className={classes.mainLinkInner}>
          <link.icon
            size={16}
            className={classes.mainLinkIcon}
            stroke={ICON_STROKE}
          />
          <span>{link.label}</span>
        </div>
      </UnstyledButton>
    ));

  return (
    <header className={classes.header}>
      <Group
        gap="xs"
        p="sm"
        justify="space-between"
        align="center"
        classNames={{ root: classes.root }}
      >
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            pt={7}
            aria-label="Toggle navigation menu"
          />

          <Link href="/">
            <Title
              className={classes.brandmark}
              order={1}
              size="h3"
              fw={500}
              ff={outfit.style.fontFamily}
            >
              ZenDo
            </Title>
          </Link>

          <Group gap={4} visibleFrom="sm">
            {mainLinks}
          </Group>
        </Group>

        <Group gap="xs" align="center">
          <Group visibleFrom="sm">
            <ThemeSwitcherButton />
          </Group>
          <SignedIn>
            <Group justify="space-between" align="center">
              <Group visibleFrom="sm">
                <UserButton
                  appearance={{
                    baseTheme:
                      computedColorScheme === "dark" ? dark : undefined,
                  }}
                  afterSignOutUrl="/"
                />
              </Group>
            </Group>
          </SignedIn>
          <SignedOut>
            <SignUpButton mode="modal">
              <Button variant="light">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
        </Group>
      </Group>
    </header>
  );
};

export default HeaderNav;
