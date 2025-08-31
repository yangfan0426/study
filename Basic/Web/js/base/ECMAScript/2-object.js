/**
 * JavaScript Object 示例
 * 展示对象的各种用法和方法
 */

// 1. 创建对象
console.log('=== 1. 创建对象 ===');
// 对象字面量（最常用的方式）
const person = {
    name: '张三',
    age: 30,
    city: '北京'
};
console.log('使用对象字面量创建:', person);

// 使用 new Object() 创建
const car = new Object();
car.brand = 'Toyota';
car.model = 'Camry';
car.year = 2022;
console.log('使用构造函数创建:', car);

// 使用构造函数创建
function Book(title, author) {
    this.title = title;
    this.author = author;
}

const book1 = new Book('JavaScript高级程序设计', 'Nicholas C. Zakas');
console.log('使用自定义构造函数创建:', book1);

// 2. 访问对象属性
console.log('\n=== 2. 访问对象属性 ===');
const user = {
    name: '李四',
    age: 25,
    'full-address': '北京市朝阳区xxx街道'
};

console.log('使用点表示法访问name:', user.name);
console.log('使用方括号表示法访问age:', user['age']);
console.log('使用方括号表示法访问特殊键名:', user['full-address']);
console.log('访问不存在的属性:', user.salary); // undefined

// 3. 修改对象属性
console.log('\n=== 3. 修改对象属性 ===');
const product = {
    name: '手机',
    price: 3999
};
console.log('原始产品:', product);

// 修改现有属性
product.price = 3599;
console.log('修改价格后:', product);

// 添加新属性
product.color = '黑色';
product['weight'] = '200g';
console.log('添加属性后:', product);

// 删除属性
delete product.weight;
console.log('删除weight属性后:', product);

// 4. 对象方法
console.log('\n=== 4. 对象方法 ===');
const calculator = {
    result: 0,
    
    add: function(num) {
        this.result += num;
        return this;
    },
    
    subtract: function(num) {
        this.result -= num;
        return this;
    },
    
    getResult: function() {
        return this.result;
    },
    
    // ES6 简写方法
    multiply(num) {
        this.result *= num;
        return this;
    },
    
    reset() {
        this.result = 0;
        return this;
    }
};

// 使用对象方法
const calcResult = calculator.add(10).multiply(2).subtract(5).getResult();
console.log('计算器结果:', calcResult);

// 5. 对象遍历
console.log('\n=== 5. 对象遍历 ===');
const student = {
    name: '王五',
    age: 20,
    major: '计算机科学',
    grade: '大三'
};
console.log('学生对象:', student);

// 使用 for...in 循环遍历对象属性
console.log('使用 for...in 遍历:');
for (let key in student) {
    console.log(`  ${key}: ${student[key]}`);
}

// 获取所有属性名
const keys = Object.keys(student);
console.log('所有属性名:', keys);

// 获取所有属性值
const values = Object.values(student);
console.log('所有属性值:', values);

// 获取所有键值对
const entries = Object.entries(student);
console.log('所有键值对:', entries);

// 6. 对象解构
console.log('\n=== 6. 对象解构 ===');
const userProfile = {
    username: 'js_dev',
    email: 'js_dev@example.com',
    location: '上海',
    skills: ['JavaScript', 'HTML', 'CSS']
};
console.log('用户资料:', userProfile);

// 解构赋值
const { username, email } = userProfile;
console.log('解构 username 和 email:', username, email);

// 重命名变量
const { location: city } = userProfile;
console.log('重命名 location 为 city:', city);

// 默认值
const { username: name, level = '初级' } = userProfile;
console.log('带默认值的解构:', name, level);

// 嵌套解构
const company = {
    name: '科技公司',
    address: {
        city: '深圳',
        district: '南山区'
    }
};
console.log('公司对象:', company);

const { address: { city: companyCity } } = company;
console.log('嵌套解构 companyCity:', companyCity);

// 7. 对象复制与合并
console.log('\n=== 7. 对象复制与合并 ===');
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// 浅拷贝
const shallowCopy = Object.assign({}, obj1);
console.log('浅拷贝 obj1:', shallowCopy);

// 对象合并
const merged = Object.assign({}, obj1, obj2);
console.log('合并 obj1 和 obj2:', merged);

// ES6 扩展运算符
const copied = { ...obj1 };
const merged2 = { ...obj1, ...obj2, e: 5 };
console.log('使用扩展运算符复制:', copied);
console.log('使用扩展运算符合并:', merged2);

// 演示示例
console.log('\n=== 演示示例 ===');
const demoObject = {
    name: 'JavaScript',
    type: '编程语言',
    versions: [5, 6, 7, 8, 9, 10, 11],
    
    getInfo() {
        return `${this.name} ${this.type}`;
    }
};

console.log('对象信息:', demoObject);
console.log('调用方法:', demoObject.getInfo());
console.log('对象属性名:', Object.keys(demoObject));