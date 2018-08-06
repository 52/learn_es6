export const url = 'https://js.foundation'
export const apiKey = '123456';
//-- above line is named export
//-- import syntax:
//-- `import {apiKey} from './src/config'`


// const apiKey = '123456';
// export default apiKey;
//-- above line is default export
//-- `import api_key from './src/config'`

//-- a module can have only `1` default export, and many named exports


// export named function
export function sayHi(name){
  console.log(`Hi there, ${name}`);
}
