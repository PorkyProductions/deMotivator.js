/**
* @license
* Copyright 2022, PorkyProductions, and contributors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import { Insult } from './typings';
import { insults } from './array';

/**
 * @returns a psuedorandom insult from the insult array.
 */
export default function GenerateInsult(): Insult {
	return insults[Math.floor(Math.random() * insults.length)];
}

/**
 * insultAt
 * @param {number} position
 * @returns {string} the insult at the position specified
 */
export const insultAt = (position: number): Insult => insults[position - 1];
