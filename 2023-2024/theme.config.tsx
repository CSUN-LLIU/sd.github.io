import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

import Image from "next/image";
import Logo from "public/csun.png";

const config: DocsThemeConfig = {
  logo: (
    <span className="flex items-center gap-4">
      <Image src={Logo} alt="CSUN Logo" width={80} height={80} />
      <p className="text-csun-red mt-1 text-xs">COMP490</p>
    </span>
  ),
  search: { placeholder: "Search" },
  footer: { component: () => null },
  toc: { component: () => null },
  nextThemes: { forcedTheme: "light" },
  darkMode: false,
  primaryHue: 0,
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
  navigation: false,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | CSUN COMP490",
      };
    }
  },
};

export default config;
