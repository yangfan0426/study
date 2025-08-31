/**
 * JavaScript Number 示例
 * 展示数字的各种用法和方法
 */

// 1. 创建数字
console.log('=== 1. 创建数字 ===');
// 整数
const integer = 42;
console.log('整数:', integer);

// 浮点数
const float = 3.14159;
console.log('浮点数:', float);

// 科学计数法
const sci = 1.23e5; // 等同于 123000
console.log('科学计数法:', sci);

// 使用 Number 构造函数
const num = new Number(100);
console.log('构造函数创建:', num);

// 特殊数值
const infinity = Infinity;
const negativeInfinity = -Infinity;
const notANumber = NaN;
console.log('无穷大:', infinity);
console.log('负无穷大:', negativeInfinity);
console.log('非数字:', notANumber);

// 八进制（以0o开头，ES6）
const octal = 0o755; // ES6 八进制表示法
console.log('八进制 0o755:', octal);

// 十六进制（以0x开头）
const hex = 0xFF; // 255
console.log('十六进制 0xFF:', hex);

// 二进制（以0b开头，ES6新增）
const binary = 0b1010; // 10
console.log('二进制 0b1010:', binary);

// 2. 数字的基本运算
console.log('\n=== 2. 数字的基本运算 ===');
const a = 10;
const b = 3;
console.log(`a = ${a}, b = ${b}`);

// 基本算术运算
console.log('加法 a + b:', a + b);
console.log('减法 a - b:', a - b);
console.log('乘法 a * b:', a * b);
console.log('除法 a / b:', a / b);
console.log('取模 a % b:', a % b);

// 幂运算 (ES2016)
console.log('幂运算 a ** 2:', a ** 2);

// 自增和自减
let counter = 1;
console.log('counter 初始值:', counter);
counter++; // 等同于 counter = counter + 1
console.log('自增后:', counter);

counter--;
console.log('自减后:', counter);

// 前置和后置
let x = 5;
console.log('x 初始值:', x);
console.log('前置自增 ++x:', ++x);
console.log('自增后 x:', x);

let y = 5;
console.log('y 初始值:', y);
console.log('后置自增 y++:', y++);
console.log('自增后 y:', y);

// 3. 数字方法和属性
console.log('\n=== 3. 数字方法和属性 ===');
const numValue = 123.456;
console.log('数字:', numValue);

// 转换为整数
console.log('向下取整 Math.floor:', Math.floor(numValue));
console.log('向上取整 Math.ceil:', Math.ceil(numValue));
console.log('四舍五入 Math.round:', Math.round(numValue));

// 保留小数位数
console.log('保留2位小数 toFixed(2):', numValue.toFixed(2));

// 数字转字符串
console.log('转为字符串 toString():', numValue.toString());
console.log('转为16进制字符串 toString(16):', numValue.toString(16));

// 解析字符串为数字
console.log('解析整数 parseInt("42px"):', parseInt('42px'));
console.log('解析浮点数 parseFloat("3.14kg"):', parseFloat('3.14kg'));

// 检查是否为有效数字
console.log('isNaN(NaN):', isNaN(NaN));
console.log('Number.isNaN("abc" / 2):', Number.isNaN('abc' / 2));

// 检查是否为整数
console.log('Number.isInteger(42):', Number.isInteger(42));
console.log('Number.isInteger(42.5):', Number.isInteger(42.5));

// 检查是否为有限数
console.log('isFinite(100):', isFinite(100));
console.log('isFinite(Infinity):', isFinite(Infinity));

// 4. Math 对象
console.log('\n=== 4. Math 对象 ===');
// 常用数学常量
console.log('圆周率 Math.PI:', Math.PI);
console.log('自然常数 Math.E:', Math.E);

// 常用数学函数
console.log('绝对值 Math.abs(-5):', Math.abs(-5));
console.log('平方根 Math.sqrt(16):', Math.sqrt(16));
console.log('幂运算 Math.pow(2, 3):', Math.pow(2, 3));
console.log('e的次方 Math.exp(1):', Math.exp(1));

// 三角函数
console.log('sin(π/2) Math.sin(Math.PI / 2):', Math.sin(Math.PI / 2));
console.log('cos(0) Math.cos(0):', Math.cos(0));
console.log('tan(π/4) Math.tan(Math.PI / 4):', Math.tan(Math.PI / 4));

// 对数函数
console.log('自然对数 Math.log(Math.E):', Math.log(Math.E));
console.log('以10为底的对数 Math.log10(100):', Math.log10(100));

// 随机数
console.log('随机数 Math.random():', Math.random());

// 获取范围内的随机整数
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('1到10之间的随机整数:', randomInt(1, 10));

// 最值
console.log('最大值 Math.max(1, 5, 3, 9, 2):', Math.max(1, 5, 3, 9, 2));
console.log('最小值 Math.min(1, 5, 3, 9, 2):', Math.min(1, 5, 3, 9, 2));

// 5. 数字精度问题
console.log('\n=== 5. 数字精度问题 ===');
// 浮点数精度问题
console.log('0.1 + 0.2:', 0.1 + 0.2);
console.log('0.1 + 0.2 == 0.3:', 0.1 + 0.2 == 0.3);

// 解决精度问题的方法
function add(a, b) {
    const aDigits = (a.toString().split('.')[1] || '').length;
    const bDigits = (b.toString().split('.')[1] || '').length;
    const factor = Math.pow(10, Math.max(aDigits, bDigits));
    return (a * factor + b * factor) / factor;
}

console.log('使用函数计算 0.1 + 0.2:', add(0.1, 0.2));

// 使用 toPrecision 控制精度
const result = 0.1 + 0.2;
console.log('使用 toPrecision(1) 控制精度:', result.toPrecision(1));
console.log('使用 toPrecision(2) 控制精度:', result.toPrecision(2));

// 使用 toFixed 控制小数位数
console.log('使用 toFixed(2) 控制小数位数:', result.toFixed(2));

// 6. 大整数 (BigInt)
console.log('\n=== 6. 大整数 (BigInt) ===');
// 超出 Number 安全整数范围的数字
console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);

// 使用 BigInt 处理大整数
const bigNumber = 123456789012345678901234567890n;
const anotherBigNumber = BigInt("123456789012345678901234567890");
console.log('BigInt 数字:', bigNumber);
console.log('字符串创建的 BigInt:', anotherBigNumber);

// BigInt 运算
console.log('BigInt 加法:', bigNumber + 1n);
console.log('BigInt 乘法:', bigNumber * 2n);
console.log('BigInt 除法:', bigNumber / 3n);

// 演示示例
console.log('\n=== 演示示例 ===');
const demoNumber = 123.456;
console.log('原始数字:', demoNumber);
console.log('四舍五入:', Math.round(demoNumber));
console.log('保留2位小数:', demoNumber.toFixed(2));
console.log('转为字符串:', demoNumber.toString());

// 随机数示例
const randomValue = Math.random();
console.log('随机数:', randomValue);
console.log('0-100随机整数:', Math.floor(randomValue * 101));

// 数学运算示例
console.log('Math.PI:', Math.PI);
console.log('sin(π/2):', Math.sin(Math.PI / 2));