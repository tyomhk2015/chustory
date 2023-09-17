/**
 * Resolving warning logs that appear at server-side, when useLayoutEffect is used.
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * 
 * The code left for the future use.
 */

import { useEffect, useLayoutEffect } from 'react'

/**
 * This is checked not only on client-side but also on server-side.
 * The result of 'typeof window' is 'string' on the server-side, not boolean.
 */
export const useCustomEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
