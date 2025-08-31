/**
 * JavaScript Set 和 Map 示例
 * 展示Set和Map数据结构的各种用法和方法
 */

// 1. 创建 Set
console.log('=== 1. 创建 Set ===');
// 创建空的 Set
const emptySet = new Set();
console.log('空的 Set:', emptySet);

// 从数组创建 Set（自动去重）
const setFromArr = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log('从数组创建的 Set:', setFromArr);

// 从字符串创建 Set
const setFromString = new Set('hello');
console.log('从字符串创建的 Set:', setFromString);

// Set 可以包含任何类型的值
const mixedSet = new Set([1, 'hello', true, null, undefined, {name: '张三'}]);
console.log('包含不同类型元素的 Set:', mixedSet);

// 2. Set 的操作方法
console.log('\n=== 2. Set 的操作方法 ===');
const fruits = new Set();
console.log('初始 fruits Set:', fruits);

// 添加元素
fruits.add('苹果');
fruits.add('香蕉');
fruits.add('橙子');
console.log('添加元素后:', fruits);

// 添加重复元素（不会生效）
fruits.add('苹果');
console.log('再次添加苹果后的大小:', fruits.size);

// 检查是否存在某个元素
console.log('是否包含香蕉:', fruits.has('香蕉'));
console.log('是否包含葡萄:', fruits.has('葡萄'));

// 删除元素
fruits.delete('香蕉');
console.log('删除香蕉后是否还包含香蕉:', fruits.has('香蕉'));

// 清空所有元素
// fruits.clear();
// console.log('清空后大小:', fruits.size);

// 3. Set 的遍历
console.log('\n=== 3. Set 的遍历 ===');
const colors = new Set(['红色', '绿色', '蓝色']);
console.log('colors Set:', colors);

// 使用 for...of 遍历
console.log('使用 for...of 遍历:');
for (const color of colors) {
    console.log(`  ${color}`);
}

// 使用 forEach 遍历
console.log('使用 forEach 遍历:');
colors.forEach(function(value) {
    console.log(`  ${value}`);
});

// 转换为数组
const colorArray = [...colors];
console.log('转换为数组:', colorArray);

// 获取 Set 大小
console.log('Set 大小:', colors.size);

// 4. Set 的实际应用
console.log('\n=== 4. Set 的实际应用 ===');
// 数组去重
const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log('原数组:', numbers);
console.log('去重后数组:', uniqueNumbers);

// 求交集
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
console.log('集合 A:', setA);
console.log('集合 B:', setB);

const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log('交集:', intersection);

// 求并集
const union = new Set([...setA, ...setB]);
console.log('并集:', union);

// 求差集
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log('差集:', difference);

// 5. 创建 Map
console.log('\n=== 5. 创建 Map ===');
// 创建空的 Map
const emptyMap = new Map();
console.log('空的 Map:', emptyMap);

// 从数组创建 Map
const mapFromArr = new Map([
    ['name', '张三'],
    ['age', 25],
    ['city', '北京']
]);
console.log('从数组创建的 Map:', mapFromArr);

// Map 的键可以是任何类型
const objKey = {};
const funcKey = function() {};
const map = new Map([
    [objKey, '对象作为键'],
    [funcKey, '函数作为键'],
    [1, '数字作为键'],
    ['string', '字符串作为键']
]);
console.log('键为不同类型的 Map:', map);

// 6. Map 的操作方法
console.log('\n=== 6. Map 的操作方法 ===');
const user = new Map();
console.log('初始 user Map:', user);

// 设置键值对
user.set('name', '李四');
user.set('age', 30);
user.set('isActive', true);
console.log('设置键值对后:', user);

// 获取值
console.log('获取 name:', user.get('name'));

// 检查是否存在键
console.log('是否存在 age 键:', user.has('age'));

// 获取 Map 大小
console.log('Map 大小:', user.size);

// 删除键值对
user.delete('isActive');
console.log('删除 isActive 后的大小:', user.size);

// 清空所有键值对
// user.clear();
// console.log('清空后大小:', user.size);

// 7. Map 的遍历
console.log('\n=== 7. Map 的遍历 ===');
const settings = new Map([
    ['theme', 'dark'],
    ['language', 'zh-CN'],
    ['notifications', true]
]);
console.log('settings Map:', settings);

// 使用 for...of 遍历
console.log('使用 for...of 遍历:');
for (const [key, value] of settings) {
    console.log(`  ${key} = ${value}`);
}

// 遍历键
console.log('遍历键:');
for (const key of settings.keys()) {
    console.log(`  ${key}`);
}

// 遍历值
console.log('遍历值:');
for (const value of settings.values()) {
    console.log(`  ${value}`);
}

// 使用 forEach 遍历
console.log('使用 forEach 遍历:');
settings.forEach(function(value, key) {
    console.log(`  ${key} -> ${value}`);
});

// 转换为数组
const entriesArray = [...settings];
console.log('转换为数组:', entriesArray);

// 8. WeakSet 和 WeakMap
console.log('\n=== 8. WeakSet 和 WeakMap ===');
// WeakSet 只能存放对象，且不会阻止垃圾回收
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log('WeakSet 中是否包含 obj:', weakSet.has(obj));

// WeakMap 的键必须是对象，值可以是任意类型
const weakMap = new WeakMap();
const keyObj = {};
weakMap.set(keyObj, '关联的数据');
console.log('WeakMap 中 keyObj 对应的值:', weakMap.get(keyObj));

// WeakSet 和 WeakMap 都没有 size 属性，也不能遍历
// 它们主要用于防止内存泄漏的场景

// 9. Set 和 Map 与传统对象/数组的比较
console.log('\n=== 9. Set 和 Map 与传统对象/数组的比较 ===');
// 对象 vs Map
// 1. 键的类型：对象只能使用字符串/Symbol作为键，Map可以使用任意类型
const objCompare = {};
objCompare[true] = 'boolean key'; // true 被转换为字符串 "true"
objCompare[1] = 'number key';     // 1 被转换为字符串 "1"
objCompare[{a: 1}] = 'object key'; // [object Object]

const mapCompare = new Map();
mapCompare.set(true, 'boolean key');
mapCompare.set(1, 'number key');
mapCompare.set({a: 1}, 'object key');

console.log('对象键会被转换为字符串:', objCompare);
console.log('Map 可以使用任意类型作为键:', mapCompare);

// 2. 大小获取：对象需要手动计算，Map有size属性
console.log('对象键的数量:', Object.keys(objCompare).length);
console.log('Map 的大小:', mapCompare.size);

// 数组 vs Set
// 1. 唯一性：数组可以包含重复元素，Set自动去重
const arr = [1, 2, 2, 3, 3];
const set = new Set(arr);

console.log('数组可以包含重复元素:', arr);
console.log('Set 自动去重:', [...set]);

// 2. 查找：数组使用 indexOf/includes（O(n)），Set使用has（O(1)）
console.log('数组查找(时间复杂度O(n)):', arr.includes(2));
console.log('Set 查找(时间复杂度O(1)):', set.has(2));

// 演示示例
console.log('\n=== 演示示例 ===');
// Set 示例
const demoSet = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log('Set 示例:', demoSet);
console.log('Set 大小:', demoSet.size);

// Map 示例
const demoMap = new Map();
demoMap.set('name', 'JavaScript');
demoMap.set('type', '编程语言');
demoMap.set('createdYear', 1995);

console.log('Map 示例:', demoMap);
console.log('Map 大小:', demoMap.size);
console.log('Map 中 name 的值:', demoMap.get('name'));

// 实际应用：数组去重
const duplicateArray = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueArray = [...new Set(duplicateArray)];
console.log('去重前:', duplicateArray);
console.log('去重后:', uniqueArray);