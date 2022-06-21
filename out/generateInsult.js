/*


Copyright (C) 2022, PorkyProductions and contributors
Licensed under the Apache-2.0 license. See LICENSE file in the project root for full license information.



*/
import { insults } from './array';
export default function GenerateInsult() {
    return insults[Math.floor(Math.random() * insults.length)];
}
