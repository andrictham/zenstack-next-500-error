"use client";

import { AppShell, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHome } from "@tabler/icons-react";

import HeaderNav from "./Header/HeaderNav";
import SideNav from "./SideNav/SideNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();

  const navLinks = [
    {
      icon: IconHome,
      label: "Home",
      destination: "/",
    },
  ];

  return (
    <>
      <AppShell
        header={{ height: 59 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        padding="0"
      >
        <AppShell.Header withBorder={false}>
          <HeaderNav opened={opened} toggle={toggle} navLinks={navLinks} />
        </AppShell.Header>
        <AppShell.Main>
          <Drawer
            opened={opened}
            onClose={close}
            withCloseButton={false}
            size={200}
            overlayProps={{ backgroundOpacity: 0.7, blur: 4 }}
          >
            <SideNav opened={opened} close={close} navLinks={navLinks} />
          </Drawer>
          {children}
        </AppShell.Main>
      </AppShell>
    </>
  );
}
