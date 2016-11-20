var CheckObject = {
    checkName: function(){ console.log("验证姓名")},
    checkEmail: function(){ console.log("验证邮箱")},
    checkPassword: function(){ console.log("验证密码")}
};



CheckObject.checkName();
Function.prototype.addMethod = function (name, fn){
    this[name] = fn;
    return this;
};
var methods = function () {};
methods.addMethod('checkName',function () {
    console.log("验证姓名2");
    return this;
}).addMethod('checkEmail',function () {
    console.log("验证邮箱2");
    return this;
});

var Book = function (id,bookname,price) {
    this.id=id;
    this.bookname=bookname;
    this.price=price;
}
var book = new Book(10,"javascript", 50);
console.log(book.bookname)
