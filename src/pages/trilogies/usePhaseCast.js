import { book1Cast } from "./cast/book1Cast";
import { book2Cast } from "./cast/book2Cast";
import { book3Cast } from "./cast/book3Cast";

export function usePhaseCast(phase) {
  let cast = {
    main: [],
    supporting: [],
    antagonists: [],
  };

  if (phase === 1) cast = book1Cast;
  if (phase === 2) cast = book2Cast;
  if (phase === 3) cast = book3Cast;

  return {
    mainCast: cast.main ?? [],
    supportingCast: cast.supporting ?? [],
    antagonistCast: cast.antagonists ?? [],
  };
}
