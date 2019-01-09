var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function testTypeName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        n();
    }
}
function handleEvent(elem, event) {
}
//元组
var firstTuple = ['name', 2];
console.log(firstTuple[0].toString());
console.log(firstTuple[1].toFixed(2));
//越界的数据页只能是 元组中规定的类型
// firstTuple[3] = true;
// firstTuple[4] = '我越界了';
//枚举
var days;
(function (days) {
    days[days["sun"] = 1] = "sun";
    days[days["mon"] = 2] = "mon";
    days[days["tue"] = 3] = "tue";
    days[days["wed"] = 4] = "wed";
    days[days["thu"] = 5] = "thu";
    days[days["fri"] = 6] = "fri";
    days[days["sta"] = 7] = "sta";
})(days || (days = {}));
console.log(days[0]);
console.log(days.sun);
console.log(days[1]);
console.log(days.mon);
var Door = /** @class */ (function () {
    function Door(name) {
        this.name = name;
    }
    Door.prototype.getName = function () {
        return this.name;
    };
    Door.prototype.setName = function (name) {
        this.name = name;
    };
    return Door;
}());
var AlertDoor = /** @class */ (function (_super) {
    __extends(AlertDoor, _super);
    function AlertDoor(name) {
        return _super.call(this, name) || this;
        //类的继承需要使用super（）来调用父类的属性和方法，当然子类也已经拥有了父类的方法
    }
    AlertDoor.prototype.notice = function () {
        console.log(this.getName() + ' 门开了');
        return '门开了';
    };
    return AlertDoor;
}(Door));
var redAlertDoor = new AlertDoor('红色的门');
redAlertDoor.notice();
var greenAlertDoor = new AlertDoor('绿色的门');
greenAlertDoor.notice();
//泛型
function getGenericName(name, value) {
    console.log(name + ' ' + value);
    return value;
}
getGenericName('name1', '张三');
getGenericName('name2', '李四');
getGenericName('age', 23);
var RandomClass = /** @class */ (function () {
    function RandomClass(name) {
        this.name = name;
    }
    return RandomClass;
}());
var randomClass1 = new RandomClass('张三');
console.log(randomClass1.name);
var randomClass2 = new RandomClass(2);
console.log(randomClass2.name);
