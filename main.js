// Using named exports to determine which function to import
import { Folder1Function, AnotherFunction } from './folder1/index.js';
import { Folder2Function } from './folder2/index.js';
import { Folder3Function } from './folder3/index.js';

const data = [
  {
    id: 1,
    title: 'title 2',
    description: 'this is description 2',
  },
  {
    id: 2,
    title: 'title 3',
    description: 'this is description 3',
  },
  {
    id: 3,
    title: 'title 4',
    description: 'this is description 4',
  },
];

const result = [
  {
    id: 0,
    title: 'title 1',
    description: 'this is description 1',
  },
];


const mainFunction = async () => {
  return 'I\'m a function from main.js';
}

const outputResult = async () => {
  try {
    const responses = [Folder1Function('test1'), Folder2Function(data, result), Folder3Function('test3')];
    // Uses Promise.all to execute code in parallel
    const [ response1, response2, response3 ] = await Promise.all(responses);
    console.log(`2. From Folder 1 - ${response1} received | ${AnotherFunction()}`);
    console.log(`3. From Folder 2 - ${response2.map(item => item.description).join(' | ')} received`);
    console.log(`4. From Folder 3 - ${response3} received`);
  } catch (error) {
    console.log(error);
  } finally {
    // Still gets executed either try or catch is executed
    const mainResponse = await mainFunction();
    console.log(`5. From main.js - ${mainResponse}`);
  }
}

outputResult();
