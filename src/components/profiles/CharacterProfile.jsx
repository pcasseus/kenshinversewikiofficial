import React, {
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import characterData from "../data/characters";
import AccessIntro from "./AccessIntro";
import ProfileBody from "./ProfileBody";
import { useIntroPhase } from "./intro/useIntroPhase";

const CharacterProfile = () => {
  const { slug } = useParams();
  const character = characterData[slug];

  const [selectedAbility, setSelectedAbility] =
    useState(null);
  const [selectedTrait, setSelectedTrait] =
    useState(null);
  const [subVisible, setSubVisible] = useState({});

  const {
    phase,
    replayKey,
    markIntroComplete,
  } = useIntroPhase();

  const resetScroll = () => {
    window.scrollTo(0, 0);

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const scrollingElement =
      document.scrollingElement;

    if (scrollingElement) {
      scrollingElement.scrollTop = 0;
      scrollingElement.scrollLeft = 0;
    }
  };

  /*
   * Prevent the browser from restoring the previous
   * scroll position when moving between dossiers.
   */
  useEffect(() => {
    const previousRestoration =
      window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration =
        previousRestoration;
    };
  }, []);

  /*
   * Reset immediately whenever the character route
   * changes. useLayoutEffect fires before the browser
   * paints the new dossier.
   */
  useLayoutEffect(() => {
    resetScroll();

    setSelectedAbility(null);
    setSelectedTrait(null);
    setSubVisible({});
  }, [slug]);

  /*
   * The profile can appear after the intro/loading
   * phase, so reset again after the actual dossier
   * has entered the DOM.
   */
  useEffect(() => {
    if (phase !== "profile") {
      return undefined;
    }

    resetScroll();

    const firstFrame = requestAnimationFrame(() => {
      resetScroll();

      requestAnimationFrame(() => {
        resetScroll();
      });
    });

    const shortTimer = window.setTimeout(() => {
      resetScroll();
    }, 50);

    const finalTimer = window.setTimeout(() => {
      resetScroll();
    }, 200);

    return () => {
      cancelAnimationFrame(firstFrame);
      window.clearTimeout(shortTimer);
      window.clearTimeout(finalTimer);
    };
  }, [phase, slug]);

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      slug
    );

    const themeId = "character-theme";
    const existing =
      document.getElementById(themeId);

    if (existing) {
      existing.remove();
    }

    const link = document.createElement("link");
    link.id = themeId;
    link.rel = "stylesheet";
    link.href = "/CharacterProfile.css";

    document.head.appendChild(link);

    return () => {
      document.body.removeAttribute(
        "data-theme"
      );

      const cleanup =
        document.getElementById(themeId);

      if (cleanup) {
        cleanup.remove();
      }
    };
  }, [slug]);

  const toggleSub = (abilityName) => {
    setSubVisible((prev) => ({
      ...prev,
      [abilityName]:
        !prev[abilityName],
    }));
  };

  if (!character) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-4 text-center font-mono text-yellow-500">
        404 | Operative not found
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black font-mono text-white">
      {phase === "intro" && (
        <AccessIntro
          key={replayKey}
          name={character.name}
          shouldPlay
          forcePlay
          onComplete={markIntroComplete}
        />
      )}

      {phase === "profile" && (
        <ProfileBody
          character={character}
          subVisible={subVisible}
          toggleSub={toggleSub}
          selectedAbility={
            selectedAbility
          }
          setSelectedAbility={
            setSelectedAbility
          }
          selectedTrait={selectedTrait}
          setSelectedTrait={
            setSelectedTrait
          }
        />
      )}
    </div>
  );
};

export default CharacterProfile;