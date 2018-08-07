import {uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

import {apiKey as key, url, sayHi} from './src/config';
import User, {createURL, gravatar} from './src/user';

console.log(key, url);

sayHi("Jack");

const age = [1, 2, 3, 3, 2, 5];

console.log(uniq(age));


const user = new User('Jane Doe', 'jane@local.com', 'jane.com');

console.log(createURL(user.name));
console.log(gravatar(user.email));
