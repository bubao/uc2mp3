/**
 * @description: 
 * @author: bubao
 * @date: 2021-03-04 02:22:58
 * @last author: bubao
 * @last edit time: 2021-03-04 03:29:39
 */
const fs = require("fs");
const { promisify } = require("util");
const translation = require("../index")
const transPromise = promisify(translation);
const ReadFile = promisify(fs.readFile);

(async () => {
	const data = await ReadFile("./1.uc!");
	console.time("1");
	transPromise(data).then(async result => {
		console.timeEnd("1");
	}).catch((error)=>{
		console.timeEnd("1");
		console.error(error);
	})
})();

(async ()=>{
	const data = await ReadFile("./2.uc!");
	console.time("2");
	translation(data,async(error,result)=>{
		console.timeEnd("2");
	})
})();