import {uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

import {apiKey as key, url, sayHi} from './src/config';

console.log(key, url);

sayHi("Jack");

const age = [1, 2, 3, 3, 2, 5];

console.log(uniq(age));
