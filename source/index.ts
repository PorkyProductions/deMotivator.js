/**
 * @license
 * Copyright 2023, PorkyProductions, and contributors
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

import { insults, profaneInsults } from "./insults";
import generateInsult, { insultAt } from "./generateinsult";
import {
  type __DeMotivator,
  type Insult,
  type CreateArrayConfig,
} from "./typings";

export { insults, generateInsult, insultAt };


/**
 * createArray is a new function itroduced in version 12 that creates a custom insult array based on a configuration you provide.
 * @param {CreateArrayConfig} configuration an object that has two properties: profane, and original. Both of which accept a boolean value
 * @since 12.0.0
 * @see CreateArrayConfig
 * @returns {Insult[]} an array of insults
 */
export const createArray = (configuration: CreateArrayConfig): Insult[] => {
  if (configuration.profane && !configuration.original) {
    return profaneInsults as Insult[];
  } else if (configuration.profane && configuration.original) {
    return insults.concat(profaneInsults) as Insult[];
  } else {
    return insults as Insult[];
  }
};

export const deMotivator: __DeMotivator = {
  insults: insults,
  profaneInsults: profaneInsults,
  createArray: createArray,
  generateInsult: generateInsult,
  insultAt: insultAt,
};
export default deMotivator;

/**
 * A class version of the `deMotivator` object
 * @see deMotivator
 * @export
 * @class DeMotivator
 * @typedef {DeMotivator}
 * @implements {__DeMotivator}
 */
export class DeMotivator implements __DeMotivator {
  insults: Insult[] = insults;
  profaneInsults: Insult[] = profaneInsults;
  private __createBasicArray(): Insult[] {
    return createArray({ original: true, profane: false }) as Insult[];
  }
  public createArray(configuration: CreateArrayConfig): Insult[] {
    return createArray(configuration);
  }
  public generateInsult(array: Insult[] = this.__createBasicArray()): Insult {
    return generateInsult(array);
  }
  public insultAt(position: number,array: Insult[] = this.__createBasicArray()): Insult {
    return insultAt(position, array);
  }
}
