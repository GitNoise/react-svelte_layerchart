import { readable } from "svelte/store";
import { reaction } from "mobx";

/**
 * Converts a MobX observable property to a Svelte-readable store.
 *
 * @param {function} mobxGetter - A function that returns the MobX observable property to track.
 * @returns {Readable} - A Svelte-readable store synchronized with the MobX property.
 */
export function mobxToSvelte(mobxGetter) {
  return readable(mobxGetter(), (set) => {
    // Create a MobX reaction to update the Svelte store
    const dispose = reaction(mobxGetter, (value) => {
      set(value); // Update Svelte store when MobX state changes
    });

    // Cleanup when the Svelte store is unsubscribed
    return dispose;
  });
}
