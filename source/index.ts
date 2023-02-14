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

import { insults } from './insults';
import generateInsult, { insultAt } from './generateinsult';
import { type __DeMotivator, type Insult } from './typings';

export { insults, generateInsult, insultAt };

export const deMotivator: __DeMotivator = {
  insults: insults,
  generateInsult: generateInsult,
  insultAt: insultAt,
}; 
export default deMotivator

export class DeMotivator implements __DeMotivator {
  insults: Insult[] = insults;
  public generateInsult(): Insult {
    return generateInsult();
  }
  public insultAt(position: number): Insult {
    return insultAt(position);
  }
}