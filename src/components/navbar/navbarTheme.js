export function getNavbarTheme(pathname) {
    if (pathname === "/lore/history" || pathname.startsWith("/lore/history/")) {
      return {
        key: "history",
  
        border: "border-amber-600",
        activeText: "text-amber-300",
        hoverText: "hover:text-amber-300",
        marker: "bg-amber-400",
        markerGlow: "shadow-[0_0_8px_rgba(251,191,36,0.9)]",
  
        buttonBorder: "border-amber-500/70",
        buttonText: "text-amber-300",
        buttonHover: "hover:bg-amber-500/10",
  
        mobileBorder: "border-amber-700",
        mobileMutedBorder: "border-amber-900",
        mobileBackground: "bg-amber-950/20",
        mobileActiveBackground: "bg-amber-500/10",
        mobileActiveBorder: "border-amber-400",
  
        statusText: "text-amber-500",
        divider: "border-amber-800",
      };
    }
  
    if (pathname === "/lore/tech" || pathname.startsWith("/lore/tech/")) {
      return {
        key: "tech",
  
        border: "border-cyan-500",
        activeText: "text-cyan-300",
        hoverText: "hover:text-cyan-300",
        marker: "bg-cyan-400",
        markerGlow: "shadow-[0_0_8px_rgba(34,211,238,0.9)]",
  
        buttonBorder: "border-cyan-500/70",
        buttonText: "text-cyan-300",
        buttonHover: "hover:bg-cyan-500/10",
  
        mobileBorder: "border-cyan-700",
        mobileMutedBorder: "border-cyan-900",
        mobileBackground: "bg-cyan-950/20",
        mobileActiveBackground: "bg-cyan-500/10",
        mobileActiveBorder: "border-cyan-400",
  
        statusText: "text-cyan-500",
        divider: "border-cyan-800",
      };
    }
  
    if (pathname === "/lore/races" || pathname.startsWith("/lore/races/")) {
      return {
        key: "races",
  
        border: "border-green-500",
        activeText: "text-green-300",
        hoverText: "hover:text-green-300",
        marker: "bg-green-400",
        markerGlow: "shadow-[0_0_8px_rgba(74,222,128,0.9)]",
  
        buttonBorder: "border-green-500/70",
        buttonText: "text-green-300",
        buttonHover: "hover:bg-green-500/10",
  
        mobileBorder: "border-green-700",
        mobileMutedBorder: "border-green-900",
        mobileBackground: "bg-green-950/20",
        mobileActiveBackground: "bg-green-500/10",
        mobileActiveBorder: "border-green-400",
  
        statusText: "text-green-500",
        divider: "border-green-800",
      };
    }
  
    if (
      pathname === "/lore/leaderboard" ||
      pathname.startsWith("/lore/leaderboard/")
    ) {
      return {
        key: "leaderboard",
  
        border: "border-orange-500",
        activeText: "text-orange-300",
        hoverText: "hover:text-orange-300",
        marker: "bg-orange-400",
        markerGlow: "shadow-[0_0_8px_rgba(251,146,60,0.9)]",
  
        buttonBorder: "border-orange-500/70",
        buttonText: "text-orange-300",
        buttonHover: "hover:bg-orange-500/10",
  
        mobileBorder: "border-orange-700",
        mobileMutedBorder: "border-orange-900",
        mobileBackground: "bg-orange-950/20",
        mobileActiveBackground: "bg-orange-500/10",
        mobileActiveBorder: "border-orange-400",
  
        statusText: "text-orange-500",
        divider: "border-orange-800",
      };
    }
  
    if (pathname === "/characters" || pathname.startsWith("/characters/")) {
      return {
        key: "characters",
  
        border: "border-green-500",
        activeText: "text-green-300",
        hoverText: "hover:text-green-300",
        marker: "bg-green-400",
        markerGlow: "shadow-[0_0_8px_rgba(74,222,128,0.9)]",
  
        buttonBorder: "border-green-500/70",
        buttonText: "text-green-300",
        buttonHover: "hover:bg-green-500/10",
  
        mobileBorder: "border-green-700",
        mobileMutedBorder: "border-green-900",
        mobileBackground: "bg-green-950/20",
        mobileActiveBackground: "bg-green-500/10",
        mobileActiveBorder: "border-green-400",
  
        statusText: "text-green-500",
        divider: "border-green-800",
      };
    }
  
    if (pathname === "/broadcast" || pathname.startsWith("/broadcast/")) {
      return {
        key: "broadcast",
  
        border: "border-cyan-500",
        activeText: "text-cyan-300",
        hoverText: "hover:text-cyan-300",
        marker: "bg-cyan-400",
        markerGlow: "shadow-[0_0_8px_rgba(34,211,238,0.9)]",
  
        buttonBorder: "border-cyan-500/70",
        buttonText: "text-cyan-300",
        buttonHover: "hover:bg-cyan-500/10",
  
        mobileBorder: "border-cyan-700",
        mobileMutedBorder: "border-cyan-900",
        mobileBackground: "bg-cyan-950/20",
        mobileActiveBackground: "bg-cyan-500/10",
        mobileActiveBorder: "border-cyan-400",
  
        statusText: "text-cyan-500",
        divider: "border-cyan-800",
      };
    }
  
    return {
      key: "default",
  
      border: "border-yellow-500",
      activeText: "text-yellow-400",
      hoverText: "hover:text-yellow-300",
      marker: "bg-yellow-400",
      markerGlow: "shadow-[0_0_8px_rgba(250,204,21,0.9)]",
  
      buttonBorder: "border-yellow-500/60",
      buttonText: "text-yellow-400",
      buttonHover: "hover:bg-yellow-500/10",
  
      mobileBorder: "border-yellow-700",
      mobileMutedBorder: "border-yellow-900",
      mobileBackground: "bg-yellow-950/20",
      mobileActiveBackground: "bg-yellow-500/10",
      mobileActiveBorder: "border-yellow-400",
  
      statusText: "text-yellow-500",
      divider: "border-yellow-800",
    };
  }