# 27.inherit
3 way do the inherit

```
function P(){}

function C(){}
```
## 0001 

```
// 1
C.prototype = P.prototype;
// test 
var c1 = new C();
c1 instanceof C // true
c1 instanceof P // true
C.prototype.xx = "xxxx"
c.xx // "xxxx"
var p = new P();
p.xx // "xxxx"

// 2
C.prototype = new P();
// test 
var c1 = new C();
c1 instanceof C // true
c1 instanceof P // true
C.prototype.xx = "xxxx"
c.xx // "xxxx"
var p = new P();
p.xx // undefined

// 3
//function F(){};
//F.prototype = P.prototype;
//var f = new F();
//C.prototype = f;
C.prototype = Object.create(P.prototype);
// test 
var c1 = new C();
c1 instanceof C // true
c1 instanceof P // true


// run this cmd in browser
``` 