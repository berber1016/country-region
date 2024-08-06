"use client";

import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  [key: string]: string;
}

const Link: React.FC<LinkProps> = ({ href, title, ...props }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NextLink href={href} legacyBehavior passHref>
      <NavigationMenuLink
        className={navigationMenuTriggerStyle()}
        active={isActive}
      >
        {title}
      </NavigationMenuLink>
    </NextLink>
  );
};

export default Link;
