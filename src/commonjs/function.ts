// 函数的声明，和java有很多相似之处，但是书写方式略有不同
    
// 普通声明
    function firstFunction1(age:number):number {
        return age;
    }
    console.log(firstFunction1(2));

// 函数表达式
    let secondFunction2 = function(age:number): number {
        return age;
    }
    //上面的是进行类型推导的，实际上是下面这种形式
    let secondFunction3: (age:number) => number =  function(age:number): number {
        return age;
    }
    console.log(secondFunction2(2));

// 可选参数
    function thirdFunction3(age: number, name?:String) :string {
        return '个人信息：' + age + name;
    }
    console.log(thirdFunction3(1,'张三'));
    console.log(thirdFunction3(2));

// 函数默认值
    function fourFunction4(age: number, gender: string = '男', name?:String) :string {
        return '个人信息：' + age + gender + name;
    }
    console.log(fourFunction4(1,'女','张三'));
    console.log(fourFunction4(3,undefined,'张三'));
    console.log(fourFunction4(2));


// 剩余参数
    function fiveFunction5(age: number,...items:number[]) :string {
        let sum = 0;
        items.forEach(item=> {
            sum += item;
        }) 
        return '个人信息：' + age +' '+sum;
    }
    console.log(fiveFunction5(1,2,3,4,5,6));
    console.log(fiveFunction5(3));
    console.log(fiveFunction5(2,45,6));


// 接口定义函数的外观
    interface Ishape {
       (age:number, name: string) :string,  
    }
    let sixFunction6:Ishape;
    sixFunction6 = function(age: number,name: string): string {
        return ' age: ' + age + ' name : ' +name;
    }
    console.log(sixFunction6(1,'张三'));
    console.log(sixFunction6(3, '李四'));
    console.log(sixFunction6(2, '王五'));

// 函数重载

function getPersonMessage(x: string): string;
function getPersonMessage(x: number): Number;
function getPersonMessage(x: (number | string)): Number | string {
    if(typeof x == 'number') {
        return  x;
    }else {
        return 'name: ' + x;
    }
}
console.log(getPersonMessage('张三'));
console.log(getPersonMessage(3));
