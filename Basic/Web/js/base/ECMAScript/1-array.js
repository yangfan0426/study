/**
 * JavaScript Array 示例
 * 展示数组的各种用法和方法
 * 
 * 时间和空间复杂度说明：
 * n = 数组长度
 * m = 另一个数组的长度（在涉及两个数组的操作中）
 * k = 满足条件的元素数量（在过滤操作中）
 */

// 1. 创建数组
console.log('=== 1. 创建数组 ===');
// 使用数组字面量创建数组（推荐方式）
// 时间复杂度: O(n) 空间复杂度: O(n) - n为元素数量
const fruits = ['苹果', '香蕉', '橙子'];
console.log('使用字面量创建数组:', fruits);

// 使用 Array 构造函数创建数组
// 时间复杂度: O(n) 空间复杂度: O(n) - n为参数数量
const numbers = new Array(1, 2, 3, 4, 5);
console.log('使用构造函数创建数组:', numbers);

// 创建空数组
// 时间复杂度: O(1) 空间复杂度: O(1)
const emptyArray = [];
const anotherEmptyArray = new Array();
console.log('空数组:', emptyArray, anotherEmptyArray);

// 2. 访问数组元素
console.log('\n=== 2. 访问数组元素 ===');
const colors = ['红色', '绿色', '蓝色'];
console.log('第一个颜色:', colors[0]);
console.log('第二个颜色:', colors[1]);
console.log('第三个颜色:', colors[2]);
console.log('数组长度:', colors.length);

// 通过索引访问元素
// 时间复杂度: O(1) 空间复杂度: O(1)
console.log('通过索引访问第一个颜色:', colors[0]);

// 通过 at() 方法访问元素 (ES2022)
// 时间复杂度: O(1) 空间复杂度: O(1)
console.log('通过 at() 访问最后一个颜色:', colors.at(-1));

// 3. 修改数组元素
console.log('\n=== 3. 修改数组元素 ===');
const animals = ['猫', '狗', '鸟'];
console.log('原始动物数组:', animals);

// 通过索引修改元素
// 时间复杂度: O(1) 空间复杂度: O(1)
animals[1] = '兔子'; // 修改索引为1的元素
console.log('修改后的动物数组:', animals);

// 添加新元素到数组末尾 - push()
// 时间复杂度: O(1) 平均情况，O(n) 最坏情况（需要重新分配内存）
// 空间复杂度: O(1)
animals.push('鱼');
console.log('添加鱼后:', animals);

// 在数组开头添加元素 - unshift()
// 时间复杂度: O(n) - 需要移动所有现有元素
// 空间复杂度: O(1)
animals.unshift('马');
console.log('在开头添加马后:', animals);

// 4. 数组遍历方法
console.log('\n=== 4. 数组遍历方法 ===');
const items = ['书', '笔', '橡皮'];
console.log('遍历的数组:', items);

// 使用 for 循环遍历
// 时间复杂度: O(n) 空间复杂度: O(1)
console.log('使用 for 循环:');
for (let i = 0; i < items.length; i++) {
    console.log(`  ${i}: ${items[i]}`);
}

// 使用 for...of 循环遍历
// 时间复杂度: O(n) 空间复杂度: O(1)
console.log('使用 for...of 循环:');
for (const item of items) {
    console.log(`  ${item}`);
}

// forEach() - 对每个元素执行回调函数
// 时间复杂度: O(n) 空间复杂度: O(1)
console.log('使用 forEach 方法:');
items.forEach(function(item, index) {
    console.log(`  ${index}: ${item}`);
});

// 5. 数组方法按功能分类演示
console.log('\n=== 5. 数组方法按功能分类演示 ===');

// 5.1 添加/删除元素方法
console.log('\n--- 5.1 添加/删除元素方法 ---');

// push() - 添加元素到末尾
// 时间复杂度: O(1) 平均情况，O(n) 最坏情况 空间复杂度: O(1)
const arrPush = [1, 2];
console.log('原数组:', arrPush);
const newLengthPush = arrPush.push(3, 4);
console.log('push后数组:', arrPush); // [1, 2, 3, 4]
console.log('新长度:', newLengthPush); // 4

// pop() - 删除最后一个元素
// 时间复杂度: O(1) 空间复杂度: O(1)
const arrPop = [1, 2, 3];
console.log('原数组:', arrPop);
const popped = arrPop.pop();
console.log('pop返回值:', popped); // 3
console.log('pop后数组:', arrPop); // [1, 2]

// unshift() - 在开头添加元素
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrUnshift = [1, 2, 3];
console.log('原数组:', arrUnshift);
const newLengthUnshift = arrUnshift.unshift(4, 5);
console.log('unshift后数组:', arrUnshift); // [4, 5, 1, 2, 3]
console.log('新长度:', newLengthUnshift); // 5

// shift() - 删除第一个元素
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrShift = [1, 2, 3];
console.log('原数组:', arrShift);
const shifted = arrShift.shift();
console.log('shift返回值:', shifted); // 1
console.log('shift后数组:', arrShift); // [2, 3]

// splice() - 添加/删除元素
// 时间复杂度: O(n) 空间复杂度: O(n)
const arrSplice = ['Jan', 'March', 'April', 'June'];
console.log('原数组:', arrSplice);
arrSplice.splice(1, 0, 'Feb');
console.log('插入Feb后:', arrSplice); // ['Jan', 'Feb', 'March', 'April', 'June']

arrSplice.splice(4, 1, 'May');
console.log('替换June为May后:', arrSplice); // ['Jan', 'Feb', 'March', 'April', 'May']

// 5.2 搜索方法
console.log('\n--- 5.2 搜索方法 ---');

// indexOf() - 查找元素索引
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrIndexOf = ['apple', 'banana', 'cherry', 'apple'];
console.log('数组:', arrIndexOf);
console.log('第一个apple的索引:', arrIndexOf.indexOf('apple')); // 0
console.log('从索引2开始查找apple:', arrIndexOf.indexOf('apple', 2)); // 3

// lastIndexOf() - 从末尾查找元素索引
// 时间复杂度: O(n) 空间复杂度: O(1)
console.log('最后一个apple的索引:', arrIndexOf.lastIndexOf('apple')); // 3

// find() - 查找第一个满足条件的元素
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrFind = [1, 2, 3, 4, 5];
console.log('数组:', arrFind);
const foundElement = arrFind.find(element => element > 3);
console.log('第一个大于3的元素:', foundElement); // 4

// findIndex() - 查找第一个满足条件的元素索引
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrFindIndex = [1, 2, 3, 4, 5];
console.log('数组:', arrFindIndex);
const foundIndex = arrFindIndex.findIndex(element => element > 3);
console.log('第一个大于3的元素的索引:', foundIndex); // 3

// findLast() - 从末尾查找第一个满足条件的元素
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrFindLast = [1, 2, 3, 4, 5];
console.log('数组:', arrFindLast);
const foundLastElement = arrFindLast.findLast(element => element < 4);
console.log('从末尾开始第一个小于4的元素:', foundLastElement); // 3

// findLastIndex() - 从末尾查找第一个满足条件的元素索引
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrFindLastIndex = [1, 2, 3, 4, 5];
console.log('数组:', arrFindLastIndex);
const foundLastIndex = arrFindLastIndex.findLastIndex(element => element < 4);
console.log('从末尾开始第一个小于4的元素的索引:', foundLastIndex); // 2

// includes() - 判断是否包含某元素
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrIncludes = [1, 2, 3];
console.log('数组:', arrIncludes);
console.log('是否包含2:', arrIncludes.includes(2)); // true
console.log('是否包含4:', arrIncludes.includes(4)); // false

// 5.3 迭代方法
console.log('\n--- 5.3 迭代方法 ---');

// map() - 创建新数组
// 时间复杂度: O(n) 空间复杂度: O(n)
const arrMap = [1, 4, 9, 16];
console.log('数组:', arrMap);
const sqrtArr = arrMap.map(x => Math.sqrt(x));
console.log('开方后:', sqrtArr); // [1, 2, 3, 4]

// filter() - 筛选元素
// 时间复杂度: O(n) 空间复杂度: O(k) - k为满足条件的元素数量
const arrFilter = [1, 2, 3, 4, 5];
console.log('数组:', arrFilter);
const filtered = arrFilter.filter(num => num > 2);
console.log('大于2的元素:', filtered); // [3, 4, 5]

// reduce() - 归约计算
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrReduce = [1, 2, 3, 4];
console.log('数组:', arrReduce);
const sumReduce = arrReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('求和结果:', sumReduce); // 10

// reduceRight() - 从右到左归约计算
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrReduceRight = [[0, 1], [2, 3], [4, 5]];
console.log('数组:', arrReduceRight);
const flattened = arrReduceRight.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log('从右到左扁平化:', flattened); // [4, 5, 2, 3, 0, 1]

// every() - 检查是否所有元素都满足条件
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrEvery = [1, 2, 3, 4, 5];
console.log('数组:', arrEvery);
const isBelowThreshold = (currentValue) => currentValue < 10;
console.log('所有元素都小于10:', arrEvery.every(isBelowThreshold)); // true

// some() - 检查是否有元素满足条件
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrSome = [1, 2, 3, 4, 5];
console.log('数组:', arrSome);
const even = (element) => element % 2 === 0;
console.log('是否有偶数:', arrSome.some(even)); // true

// 5.4 复制和连接方法
console.log('\n--- 5.4 复制和连接方法 ---');

// slice() - 提取部分元素
// 时间复杂度: O(n) 空间复杂度: O(n)
const arrSlice = ['a', 'b', 'c', 'd', 'e'];
console.log('数组:', arrSlice);
console.log('slice(1, 3):', arrSlice.slice(1, 3)); // ['b', 'c']
console.log('slice(2):', arrSlice.slice(2)); // ['c', 'd', 'e']
console.log('slice(-2):', arrSlice.slice(-2)); // ['d', 'e']

// concat() - 连接数组
// 时间复杂度: O(n + m) 空间复杂度: O(n + m)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
console.log('数组1:', arr1);
console.log('数组2:', arr2);
console.log('数组3:', arr3);
console.log('arr1.concat(arr2):', arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6]
console.log('arr1.concat(arr2, arr3):', arr1.concat(arr2, arr3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 5.5 排序方法
console.log('\n--- 5.5 排序方法 ---');

// reverse() - 颠倒数组元素顺序
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrReverse = [1, 2, 3];
console.log('原数组:', arrReverse);
console.log('reverse后:', arrReverse.reverse()); // [3, 2, 1]
console.log('原数组也被修改:', arrReverse); // [3, 2, 1]

// sort() - 对数组元素排序
// 时间复杂度: O(n log n) 空间复杂度: O(log n)
const arrSort = ['March', 'Jan', 'Feb', 'Dec'];
console.log('原数组:', arrSort);
console.log('默认排序:', arrSort.sort()); // ['Dec', 'Feb', 'Jan', 'March']

const numbersSort = [1, 30, 4, 21, 100000];
console.log('数字数组:', numbersSort);
console.log('默认排序:', numbersSort.sort()); // [1, 100000, 21, 30, 4] - 按字符串排序
console.log('数字排序:', numbersSort.sort((a, b) => a - b)); // [1, 4, 21, 30, 100000]

// 5.6 填充方法
console.log('\n--- 5.6 填充方法 ---');

// fill() - 填充数组元素
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrFill = [1, 2, 3, 4, 5];
console.log('原数组:', arrFill);
console.log('arrFill.fill(0):', arrFill.fill(0)); // [0, 0, 0, 0, 0]
const arrFill2 = [1, 2, 3, 4, 5];
console.log('arrFill2.fill(6, 1, 3):', arrFill2.fill(6, 1, 3)); // [1, 6, 6, 4, 5]

// copyWithin() - 复制数组元素到同一数组的另一位置
// 时间复杂度: O(n) 空间复杂度: O(1)
const arrCopyWithin = [1, 2, 3, 4, 5];
console.log('原数组:', arrCopyWithin);
console.log('arrCopyWithin.copyWithin(0, 3):', arrCopyWithin.copyWithin(0, 3)); // [4, 5, 3, 4, 5]

// 5.7 扁平化方法
console.log('\n--- 5.7 扁平化方法 ---');

// flat() - 扁平化嵌套数组
// 时间复杂度: O(n) 空间复杂度: O(n)
const arrFlat = [1, 2, [3, 4, [5, 6]]];
console.log('原数组:', arrFlat);
console.log('arrFlat.flat():', arrFlat.flat()); // [1, 2, 3, 4, [5, 6]]
console.log('arrFlat.flat(2):', arrFlat.flat(2)); // [1, 2, 3, 4, 5, 6]

// flatMap() - 映射后扁平化
// 时间复杂度: O(n) 空间复杂度: O(n)
const arrFlatMap = [1, 2, 3];
console.log('数组:', arrFlatMap);
const flatMapped = arrFlatMap.flatMap(num => [num, num * 2]);
console.log('flatMap结果:', flatMapped); // [1, 2, 2, 4, 3, 6]

// 5.8 迭代器方法
console.log('\n--- 5.8 迭代器方法 ---');

// entries() - 返回键值对迭代器
// 时间复杂度: O(1) 空间复杂度: O(1)
const arrEntries = ['a', 'b', 'c'];
console.log('数组:', arrEntries);
const iteratorEntries = arrEntries.entries();
console.log('iteratorEntries.next().value:', iteratorEntries.next().value); // [0, 'a']
console.log('iteratorEntries.next().value:', iteratorEntries.next().value); // [1, 'b']
console.log('iteratorEntries.next().value:', iteratorEntries.next().value); // [2, 'c']

// keys() - 返回键迭代器
// 时间复杂度: O(1) 空间复杂度: O(1)
const arrKeys = ['a', 'b', 'c'];
console.log('数组:', arrKeys);
const iteratorKeys = arrKeys.keys();
for (const key of iteratorKeys) {
  console.log(`  Key: ${key}`); // 0, 1, 2
}

// values() - 返回值迭代器
// 时间复杂度: O(1) 空间复杂度: O(1)
const arrValues = ['a', 'b', 'c'];
console.log('数组:', arrValues);
const iteratorValues = arrValues.values();
for (const value of iteratorValues) {
  console.log(`  Value: ${value}`); // a, b, c
}

// 5.9 转换方法
console.log('\n--- 5.9 转换方法 ---');

// join() - 连接数组元素为字符串
// 时间复杂度: O(n) 空间复杂度: O(n)
const arrJoin = ['风', '雨', '过后', '见', '彩虹', '时'];
console.log('数组:', arrJoin);
console.log('默认连接:', arrJoin.join()); // 风,雨,过后,见,彩虹,时
console.log('用空格连接:', arrJoin.join(' ')); // 风 雨 过后 见 彩虹 时
console.log('用"-"连接:', arrJoin.join('-')); // 风-雨-过后-见-彩虹-时

// toString() - 转换为字符串
// 时间复杂度: O(n) 空间复杂度: O(n)
const arrToString = [1, 2, 'a', '1a'];
console.log('数组:', arrToString);
console.log('toString结果:', arrToString.toString()); // "1,2,a,1a"

// toLocaleString() - 转换为本地化字符串
// 时间复杂度: O(n) 空间复杂度: O(n)
const arrToLocaleString = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
console.log('数组:', arrToLocaleString);
console.log('toLocaleString:', arrToLocaleString.toLocaleString('en', {timeZone: 'UTC'}));

// 5.10 访问方法
console.log('\n--- 5.10 访问方法 ---');

// at() - 根据索引获取元素（支持负数索引）
// 时间复杂度: O(1) 空间复杂度: O(1)
const arrAt = [1, 2, 3, 4, 5];
console.log('数组:', arrAt);
console.log('arrAt.at(0):', arrAt.at(0)); // 1
console.log('arrAt.at(-1):', arrAt.at(-1)); // 5 (最后一个元素)

// 6. 静态方法
console.log('\n=== 6. 数组静态方法 ===');

// Array.from() - 从类数组对象或可迭代对象创建数组
// 时间复杂度: O(n) 空间复杂度: O(n)
console.log('\n--- Array.from() 方法 ---');
console.log('Array.from("foo"):', Array.from('foo')); // ['f', 'o', 'o']
console.log('Array.from([1, 2, 3], x => x + x):', Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]

// Array.isArray() - 判断是否为数组
// 时间复杂度: O(1) 空间复杂度: O(1)
console.log('\n--- Array.isArray() 方法 ---');
console.log('Array.isArray([1, 2, 3]):', Array.isArray([1, 2, 3])); // true
console.log('Array.isArray({foo: 123}):', Array.isArray({foo: 123})); // false

// Array.of() - 创建数组
// 时间复杂度: O(n) 空间复杂度: O(n)
console.log('\n--- Array.of() 方法 ---');
console.log('Array.of(1):', Array.of(1)); // [1]
console.log('Array.of(1, 2, 3):', Array.of(1, 2, 3)); // [1, 2, 3]
console.log('Array.of(undefined):', Array.of(undefined)); // [undefined]

// 7. 多维数组
console.log('\n=== 7. 多维数组 ===');
// 创建二维数组
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('二维数组:', matrix);
console.log('matrix[1][2]的值:', matrix[1][2]);

// 遍历二维数组
// 时间复杂度: O(m*n) 空间复杂度: O(1) - m为行数，n为列数
console.log('遍历二维数组:');
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`  matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}

// 8. 数组性能说明
console.log('\n=== 8. 数组性能说明 ===');
console.log('访问方法:');
console.log('  - 索引访问 [] 和 at(): O(1) 时间，O(1) 空间');
console.log('  - length 属性: O(1) 时间，O(1) 空间');
console.log('\n修改方法:');
console.log('  - push() 和 pop(): O(1) 时间，O(1) 空间');
console.log('  - unshift() 和 shift(): O(n) 时间，O(1) 空间');
console.log('  - splice(): O(n) 时间，O(1) 空间');
console.log('\n搜索方法:');
console.log('  - indexOf(), lastIndexOf(): O(n) 时间，O(1) 空间');
console.log('  - find(), findIndex(): O(n) 时间，O(1) 空间');
console.log('  - includes(): O(n) 时间，O(1) 空间');
console.log('\n迭代方法:');
console.log('  - forEach(): O(n) 时间，O(1) 空间');
console.log('  - map(): O(n) 时间，O(n) 空间');
console.log('  - filter(): O(n) 时间，O(k) 空间 (k为结果数组大小)');
console.log('  - reduce(): O(n) 时间，O(1) 空间');
console.log('\n复制方法:');
console.log('  - slice(): O(n) 时间，O(n) 空间');
console.log('  - concat(): O(n+m) 时间，O(n+m) 空间');
console.log('  - 扩展运算符 [...arr]: O(n) 时间，O(n) 空间');
console.log('\n排序方法:');
console.log('  - reverse(): O(n) 时间，O(1) 空间');
console.log('  - sort(): O(n log n) 平均时间，O(log n) 空间');

// 9. 演示示例
console.log('\n=== 9. 演示示例 ===');
const demoArray = ['JavaScript', 'HTML', 'CSS'];
console.log('原始数组:', demoArray);
console.log('数组长度:', demoArray.length);
console.log('第一个元素:', demoArray[0]);

// push() - 添加元素到末尾
// 时间复杂度: O(1) 空间复杂度: O(1)
demoArray.push('React');
console.log('添加React后:', demoArray);

// map() - 创建新数组
// 时间复杂度: O(n) 空间复杂度: O(n)
const upperCase = demoArray.map(item => item.toUpperCase());
console.log('转换为大写:', upperCase);