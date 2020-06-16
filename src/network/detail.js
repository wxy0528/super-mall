import {request} from "./request"
export function getdetail(id){
    return request({
        url:"/detail",
        params:{
            iid:id
        }
    })
}
// 商品基本信息
export class Goods{
    constructor(iteminfo,columns,service){
        this.desc=iteminfo.title,
        this.price=iteminfo.price,
        this.oldPrice=iteminfo.oldPrice,
        this.discount=iteminfo.discountDesc,
        this.newPrice=iteminfo.price,
        this.discountBgColor=iteminfo.discountBgColor
        this.columns= columns,
        this.service= service
    }
}

// 店铺基本信息
// export class Shop{
//     constructor(shopInfo){
//         this.shopLogo=shopInfo.shopLogo
//     }
// }


// es6中使用类
class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
}
const p =new Person('why',18)
console.log(p.name)



