// src/components/navbar/navItems.js

export const navItems = [
    {
      label: "Character Gallery",
      path: "/characters",
      matchPaths: ["/characters"],
    },
    {
      label: "Lore",
      path: "/lore",
      matchPaths: ["/lore"],
    },
    {
      label: "Trilogy I",
      path: "/trilogy-1",
      matchPaths: ["/trilogy-1"],
    },
    {
      label: "Broadcast",
      path: "/broadcast",
      matchPaths: ["/broadcast"],
    },
    {
      label: "About the Creator",
      path: "/about",
      matchPaths: ["/about"],
    },
  ];
  
  export function isNavItemActive(pathname, item) {
    return item.matchPaths.some((path) => {
      if (path === "/") {
        return pathname === "/";
      }
  
      return pathname === path || pathname.startsWith(`${path}/`);
    });
  }