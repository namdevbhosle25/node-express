const user = "MEAN Academy"

const add=(n1,n2)=>{
    console.log(n1+n2);
}

// 1st Way to export module file

/* module.exports.name = user
module.exports.addition = add */

// 2nd Way to export module file
module.exports={
    name:user,
    addition: add
}