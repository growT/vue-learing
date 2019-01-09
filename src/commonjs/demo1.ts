function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Jane User";

let ss = greeter(user); 
console.log(ss);

// new Boolean() 返回的是一个对象，而不是boolean值
let booleanObject: Object  = new Boolean(1);
console.log(booleanObject);

// 使用 any可以声明任意值，可以访问任意值的方法和属性而不报错，并且返回的值的类型也是任意值
// 未声明任何类型的变量默认为任意值
let anyThing: any = '12';
console.log(anyThing.name);
console.log(anyThing.getName());
console.log(anyThing.age);

// 类型推断
let myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;

// 联合类型属性和方法的访问
function getLength(someThing: Number | String) : Number{
    return someThing.length;
}
let myFavoriteNumber: Number | String;
myFavoriteNumber = 'String';
console.log(myFavoriteNumber.length);

// 接口
interface Person {
    name: string,
    age: number,
}

// 正确
let zhangsan : Person = {
    name: '张三',
    age: 12,
}

// 多加属性 错误
let lisi : Person = {
    name: '李四',
    age: 12,
    gender: '男',
}

// 少加属性 错误
let wangwu : Person = {
    name: '王五',
}

// 可选属性
interface PersonWithOptionalAttribute {
    name: string,
    age?: number,
}

let mazi: PersonWithOptionalAttribute = {
    name: '麻子'
}

// 任意属性
interface PersonWithAny {
    name: string,
    age?: number,
    [propName: string]: string | Number,
}

// 增加gender 正确
let child1: PersonWithAny = {
    name: '小孩',
    gender: '男'
}

// 只读属性
interface PersonWithReadOnly {
    readonly id: number,
    name: string,
    age?: number,
    [propName: string]: string | Number,
}

let child2: PersonWithReadOnly = {
    id: 23,
    name: '小孩2'
}


// 数组的表示
// 普通表示
let arrayObj1: number[] = [1,2,4,5];
let arrayObj2: number[] = [1,2,4,5,'6'];
let arrayObj3: (number|string)[] = [1,2,4,5,'6'];

//泛型
let arrayObj4: Array<number> = [1,2,4];

//任意类型
let arrayObj5: any[] = [1,'2',new Boolean(1)];

//接口表示
interface INumberArray {
    [index: number] : Number,
}
let arrayObj6: INumberArray = [1,2,4,'4'];


//类数组有自己的接口类型 这个不知道为什出错
function gg() {
    let args：IArguments  = arguments;
}

//类型断言
function getLengthbyType(someThing: Number | string) : Number|string{
    if((<string>someThing).length) {
        return (<string>someThing).length
    }else {
        return someThing;
    }
}
console.log(getLengthbyType(2));
console.log(getLengthbyType('hhhhhhhhhsss'));


