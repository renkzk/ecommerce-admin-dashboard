import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

interface Loading {
  state: 'loading';
}

interface Loaded<T> {
  state: 'loaded';
  data: T;
}

interface Errored {
  state: 'error';
  error: Error;
}

type LoadingState<T = unknown> = Loading | Loaded<T> | Errored;

// About "createStateStream"
// Use this function with async pipe
// Async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.

export function createStateStream<T>(
  source$: Observable<T>
): Observable<LoadingState<T>> {
  return source$.pipe(
    map((data) => ({ state: 'loaded', data } as Loaded<T>)),
    catchError((error) => of({ state: 'error', error } as Errored)),
    startWith({ state: 'loading' } as Loading)
  );
}
