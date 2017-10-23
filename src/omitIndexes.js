import { contains, curry, addIndex, reject } from 'ramda';

/**
 * Returns a partial copy of an array omitting the indexes specified.
 *
 * @func omitIndexes
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.1|v1.18.1}
 * @category List
 * @sig [i] -> [a] -> [a]
 * @see {@link http://ramdajs.com/docs/#omit|omit}
 * @param {!Array} indexes The array of indexes to omit from the new array
 * @param {!Array} list The array to copy from
 * @return {!Array} The new array with indexes not on it
 * @example
 *
 * RA.omitIndexes([-1, 1, 3], ['a', 'b', 'c', 'd']); //=> ['a', 'c']
 */

// helpers
const rejectIndexed = addIndex(reject);
const containsIndex = curry((indexes, val, index) => contains(index, indexes));

const omitIndexes = curry((indexes, list) => rejectIndexed(containsIndex(indexes), list));

export default omitIndexes;
