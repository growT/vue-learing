//类型别名
type stringName = string;
type stringResolve = () => string;
type stringAndResolve = stringName | stringResolve;
function testTypeName(n: stringAndResolve) : stringName {
    if(typeof n === 'string') {
        return n;
    }else {
        n();
    }
}

//字符串字面量
type allowName = 'click' | 'scroll' | 'mouseover';

function handleEvent(elem: Element, event: allowName) {

}

//元组
let firstTuple:[string, number] = ['name', 2]; 

console.log(firstTuple[0].toString());
console.log(firstTuple[1].toFixed(2));

//越界的数据页只能是 元组中规定的类型

// firstTuple[3] = true;
// firstTuple[4] = '我越界了';


//枚举

enum days {sun = 1,mon,tue,wed,thu,fri,sta}

console.log(days[0]);
console.log(days.sun);
console.log(days[1]);
console.log(days.mon);

//类和接口和java中很相似
interface Alert{
    notice():String,
}

class Door {
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    public getName() {
        return this.name;
    }
    public setName(name: string){
        this.name = name;
    }
}

class AlertDoor extends Door implements Alert {
    constructor(name: string){
        super(name);
        //类的继承需要使用super（）来调用父类的属性和方法，当然子类也已经拥有了父类的方法
    }
    notice(){
        console.log( this.getName() + ' 门开了');
        return '门开了'
    }
}

let redAlertDoor = new AlertDoor('红色的门');
redAlertDoor.notice();
let greenAlertDoor = new AlertDoor('绿色的门');
greenAlertDoor.notice();

//泛型

function getGenericName<T>(name: string, value: T) : T {
    console.log(name + ' ' + value);
    return value;
}
getGenericName('name1','张三');
getGenericName<String>('name2','李四');
getGenericName<Number>('age',23);

class RandomClass<T> {
    public name: T;
    constructor(name: T) {
        this.name = name;
    }
}

let randomClass1 = new RandomClass<String>('张三')
console.log(randomClass1.name);

let randomClass2 = new RandomClass<Number>(2)
console.log(randomClass2.name);

