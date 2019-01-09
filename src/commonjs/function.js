// 函数的声明，和java有很多相似之处，但是书写方式略有不同
// 普通声明
function firstFunction1(age) {
    return age;
}
console.log(firstFunction1(2));
// 函数表达式
var secondFunction2 = function (age) {
    return age;
};
//上面的是进行类型推导的，实际上是下面这种形式
var secondFunction3 = function (age) {
    return age;
};
console.log(secondFunction2(2));
// 可选参数
function thirdFunction3(age, name) {
    return '个人信息：' + age + name;
}
console.log(thirdFunction3(1, '张三'));
console.log(thirdFunction3(2));
// 函数默认值
function fourFunction4(age, gender, name) {
    if (gender === void 0) { gender = '男'; }
    return '个人信息：' + age + gender + name;
}
console.log(fourFunction4(1, '女', '张三'));
console.log(fourFunction4(3, undefined, '张三'));
console.log(fourFunction4(2));
// 剩余参数
function fiveFunction5(age) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    var sum = 0;
    items.forEach(function (item) {
        sum += item;
    });
    return '个人信息：' + age + ' ' + sum;
}
console.log(fiveFunction5(1, 2, 3, 4, 5, 6));
console.log(fiveFunction5(3));
console.log(fiveFunction5(2, 45, 6));
var sixFunction6;
sixFunction6 = function (age, name) {
    return ' age: ' + age + ' name : ' + name;
};
console.log(sixFunction6(1, '张三'));
console.log(sixFunction6(3, '李四'));
console.log(sixFunction6(2, '王五'));
function getPersonMessage(x) {
    if (typeof x == 'number') {
        return x;
    }
    else {
        return 'name: ' + x;
    }
}
console.log(getPersonMessage('张三'));
console.log(getPersonMessage(3));
