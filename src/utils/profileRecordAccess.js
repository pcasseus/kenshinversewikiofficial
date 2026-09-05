export const CURRENT_RELEASE = "KVI";
export const LEGACY_CURRENT_BOOK = 1;

export const DOSSIER_STAGES = [
  "beginning",
  "middle",
  "end",
];

export const STAGE_ORDER = {
  beginning: 0,
  middle: 1,
  end: 2,
};

export const normalizeStage = (
  stage
) => {
  if (
    typeof stage !== "string"
  ) {
    return "beginning";
  }

  const normalized =
    stage
      .trim()
      .toLowerCase();

  return Object.prototype.hasOwnProperty.call(
    STAGE_ORDER,
    normalized
  )
    ? normalized
    : "beginning";
};

export const normalizeBooks = (
  books
) => {
  if (Array.isArray(books)) {
    return books;
  }

  if (
    books !== undefined &&
    books !== null
  ) {
    return [books];
  }

  return [];
};

export const isLegacyBookMatch = (
  entryBooks,
  selectedBooks = [
    LEGACY_CURRENT_BOOK,
  ]
) => {
  const normalizedEntryBooks =
    normalizeBooks(
      entryBooks
    );

  if (
    normalizedEntryBooks.length ===
    0
  ) {
    return true;
  }

  if (
    Array.isArray(
      selectedBooks
    ) &&
    selectedBooks.length > 0
  ) {
    return normalizedEntryBooks.some(
      (book) =>
        selectedBooks.includes(
          book
        )
    );
  }

  return normalizedEntryBooks.includes(
    LEGACY_CURRENT_BOOK
  );
};

export const isCurrentRelease = (
  entry,
  selectedBooks = [
    LEGACY_CURRENT_BOOK,
  ]
) => {
  if (!entry) {
    return false;
  }

  if (entry.release) {
    const releases =
      Array.isArray(
        entry.release
      )
        ? entry.release
        : [entry.release];

    return releases.includes(
      CURRENT_RELEASE
    );
  }

  if (
    entry.legacyBooks !==
    undefined
  ) {
    return isLegacyBookMatch(
      entry.legacyBooks,
      selectedBooks
    );
  }

  if (
    entry.books !== undefined
  ) {
    return isLegacyBookMatch(
      entry.books,
      selectedBooks
    );
  }

  return true;
};

export const getDiscoveryStage = (
  entry
) =>
  normalizeStage(
    entry?.discovery ||
      "beginning"
  );

export const isDiscoveredByStage = (
  entry,
  activeStage = "beginning"
) => {
  const discovery =
    getDiscoveryStage(entry);

  const current =
    normalizeStage(
      activeStage
    );

  return (
    STAGE_ORDER[discovery] <=
    STAGE_ORDER[current]
  );
};

export const isRecordVisible = (
  entry,
  activeStage = "beginning",
  selectedBooks = [
    LEGACY_CURRENT_BOOK,
  ]
) =>
  isCurrentRelease(
    entry,
    selectedBooks
  ) &&
  isDiscoveredByStage(
    entry,
    activeStage
  );

export const filterRecords = (
  entries,
  activeStage = "beginning",
  selectedBooks = [
    LEGACY_CURRENT_BOOK,
  ]
) =>
  Array.isArray(entries)
    ? entries
        .filter(Boolean)
        .filter((entry) =>
          isRecordVisible(
            entry,
            activeStage,
            selectedBooks
          )
        )
    : [];

export const isHumanRace = (
  race
) => {
  if (
    typeof race !== "string"
  ) {
    return false;
  }

  return (
    race
      .trim()
      .toLowerCase() ===
    "human"
  );
};

export const getLatestRevealedStage = (
  selectedStage,
  revealedStages
) => {
  const selected =
    normalizeStage(
      selectedStage
    );

  const selectedOrder =
    STAGE_ORDER[selected];

  const revealed =
    revealedStages instanceof
    Set
      ? revealedStages
      : new Set([
          "beginning",
        ]);

  const available =
    DOSSIER_STAGES.filter(
      (stage) =>
        revealed.has(stage) &&
        STAGE_ORDER[stage] <=
          selectedOrder
    );

  return (
    available[
      available.length - 1
    ] || "beginning"
  );
};