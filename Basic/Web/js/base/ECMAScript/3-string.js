/**
 * JavaScript String 示例
 * 展示字符串的各种用法和方法
 */

// 1. 创建字符串
console.log('=== 1. 创建字符串 ===');
// 使用单引号
const str1 = 'Hello World';
console.log('单引号字符串:', str1);

// 使用双引号
const str2 = "JavaScript";
console.log('双引号字符串:', str2);

// 使用反引号（模板字符串）
const str3 = `Template String`;
console.log('模板字符串:', str3);

// 使用 String 构造函数
const str4 = new String('构造函数创建');
console.log('构造函数创建:', str4);

// 空字符串
const emptyStr = '';
console.log('空字符串:', emptyStr);

// 2. 字符串基本操作
console.log('\n=== 2. 字符串基本操作 ===');
const text = 'JavaScript 是一种编程语言';
console.log('文本:', text);

// 获取字符串长度
console.log('字符串长度:', text.length);

// 访问字符（使用索引）
console.log('第一个字符:', text[0]);
console.log('第一个字符(使用charAt):', text.charAt(0));

// 获取字符的 Unicode 值
console.log('第一个字符的Unicode值:', text.charCodeAt(0));

// 拼接字符串
const part1 = 'Hello';
const part2 = 'World';
const greeting = part1 + ' ' + part2; // 使用 + 操作符
const greeting2 = `${part1} ${part2}`; // 使用模板字符串
console.log('使用+操作符拼接:', greeting);
console.log('使用模板字符串拼接:', greeting2);

// 3. 字符串常用方法
console.log('\n=== 3. 字符串常用方法 ===');
const message = 'Hello JavaScript World';
console.log('消息:', message);

// 转换大小写
console.log('转大写:', message.toUpperCase());
console.log('转小写:', message.toLowerCase());

// 查找子字符串
console.log('查找JavaScript的位置:', message.indexOf('JavaScript'));
console.log('是否包含Script:', message.includes('Script'));
console.log('是否以Hello开头:', message.startsWith('Hello'));
console.log('是否以World结尾:', message.endsWith('World'));

// 截取字符串
console.log('截取前5个字符:', message.slice(0, 5));
console.log('截取中间部分:', message.substring(6, 16));
console.log('使用substr截取:', message.substr(6, 10)); // 注意: substr已废弃

// 替换字符串
console.log('替换JavaScript为TypeScript:', message.replace('JavaScript', 'TypeScript'));

// 去除空白字符
const spacedText = '  Hello World  ';
console.log('原始文本:', spacedText);
console.log('去除两端空白:', spacedText.trim());
console.log('去除开头空白:', spacedText.trimStart());
console.log('去除结尾空白:', spacedText.trimEnd());

// 4. 模板字符串
console.log('\n=== 4. 模板字符串 ===');
const name = '张三';
const age = 25;

// 基本用法
const greetingTemplate = `你好，我是${name}，今年${age}岁`;
console.log('基本模板字符串:', greetingTemplate);

// 表达式
const a = 5;
const b = 10;
console.log('表达式模板:', `a + b = ${a + b}`);

// 多行字符串
const multiline = `
这是第一行
这是第二行
这是第三行
`;
console.log('多行字符串:', multiline);

// 嵌套模板
const price = 100;
const tax = 0.08;
const total = `价格明细:
商品价格: $${price}
税费: $${price * tax}
总计: $${price * (1 + tax)}
`;
console.log('嵌套模板:', total);

// 5. 字符串分割与连接
console.log('\n=== 5. 字符串分割与连接 ===');
const fruits = '苹果,香蕉,橙子,葡萄';
console.log('水果字符串:', fruits);

// 分割字符串
const fruitArray = fruits.split(',');
console.log('分割后的数组:', fruitArray);

// 连接数组为字符串
const joined = fruitArray.join(' | ');
console.log('用|连接:', joined);

// 重复字符串
const repeatStr = 'Hello '.repeat(3);
console.log('重复字符串:', repeatStr);

// 6. 字符串编码与解码
console.log('\n=== 6. 字符串编码与解码 ===');
const url = 'https://example.com/search?q=JavaScript&lang=zh';
console.log('原始URL:', url);

// URL 编码
const encoded = encodeURIComponent(url);
console.log('编码后:', encoded);

// URL 解码
const decoded = decodeURIComponent(encoded);
console.log('解码后:', decoded);

// Base64 编码
const textToEncode = 'Hello World';
const base64Encoded = btoa(textToEncode);
console.log('Base64编码:', base64Encoded);

// Base64 解码
const base64Decoded = atob(base64Encoded);
console.log('Base64解码:', base64Decoded);

// 7. 正则表达式与字符串
console.log('\n=== 7. 正则表达式与字符串 ===');
const emailText = '联系邮箱: example@test.com';
console.log('邮件文本:', emailText);

// 匹配
const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const match = emailText.match(emailPattern);
console.log('匹配到的邮箱:', match[0]);

// 搜索
const hasEmail = emailPattern.test(emailText);
console.log('是否包含邮箱:', hasEmail);

// 替换
const phoneText = '电话: 138-0000-0000';
const cleanPhone = phoneText.replace(/-/g, '');
console.log('清理后的电话:', cleanPhone);

// 分割
const csvLine = '张三,25,工程师';
const fields = csvLine.split(',');
console.log('CSV字段分割:', fields);

// 演示示例
console.log('\n=== 演示示例 ===');
const demoString = 'JavaScript学习指南';
console.log('原始字符串:', demoString);
console.log('字符串长度:', demoString.length);
console.log('转为大写:', demoString.toUpperCase());
console.log('是否包含"学习":', demoString.includes('学习'));

// 模板字符串示例
const topic = '字符串';
const description = 'JavaScript中的重要数据类型';
const template = `今天学习的是${topic}，它是${description}。`;
console.log('模板字符串:', template);