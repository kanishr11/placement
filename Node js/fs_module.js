const fs = require("fs");

// const fs_data =  fs.readFileSync('./data.json');

// const update = JSON.parse(fs_data)

// console.log(update)

// update.rate = 6;

// fs.writeFileSync('./data.json',JSON.stringify(update))


// console.log(update)
// console.log(1)

// setTimeout(()=>{
//     console.log("Hey kanish");
// })
// console.log(2)

// fs.readFile('./data.json',(error,file)=>{
//     console.log(JSON.parse(file))
// })



fs.readFile('./todo.json',(file)=>{
        const data = JSON.parse(file);
        console.log(data)
})




try{
    const fs_data =  fs.readFileSync('./todo.json');

const update = JSON.parse(fs_data)

console.log(update)
}catch(parseError){
    console.log(parseError)
}

console.log("Finished")