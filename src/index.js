const fs = require("fs"); //* Module is defined for file jobs.
let messageadd; //* 'messageadd' function is defined.

module.exports = class xiyudb {
   
    constructor(filePath){

        this.jsonFilePath = filePath || "./xiyudb.json";
        this.data = {};

        if(!fs.existsSync(this.jsonFilePath)){
            fs.writeFileSync(this.jsonFilePath, "{}", "utf-8");
        } else {
            this.fetchDataFromFile();
        }}

    fetchDataFromFile(){
        const savedData = JSON.parse(fs.readFileSync(this.jsonFilePath));
        if(typeof savedData === "object"){
        this.data = savedData}}
                
    saveDataToFile(){
    fs.writeFileSync(this.jsonFilePath, JSON.stringify(this.data, null, 2), "utf-8")}

    on(fonksiyon , config) {
        if(fonksiyon=="ready"){
        let message;
        if(config.message){
        message = config.message
        console.log(message)}
        else throw Error("Ready message is undefined or unreadable.")}

        if(fonksiyon=="dataAdd"){
        if(config.message){
        messageadd = config.message}
        else {
            throw Error("dataAdd message is undefined or unreadable.")
        }
        }}

    fetch(key){
        if(!key) throw Error("The value that can be brought is not specified.");
        return this.data[key]}

    has(key){
        if (!key) throw Error("The value to be conditioned was not specified.");
        return Boolean(this.data[key])}

    set(key, value){
        this.data[key] = value;
        if (!key) throw Error("The value to change was not found.");
        if (!value) throw Error("The value to change was not found.");
        this.saveDataToFile()}
   
    delete(key){
        if (!key) throw Error("The value to change was not found.");
        delete this.data[key];
        this.saveDataToFile()}

    add(key, count){
        if (!count) throw Error("No value was found to be added.");
        if (!key) throw Error("No value was found to be added.");
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] += count;
        this.saveDataToFile();
        if(messageadd) {
        console.log(messageadd)}}

    subtract(key, count){
        if (!count) throw Error("The value to be extracted was not found.");
        if (!key) throw Error("The value to be extracted was not found.");
        if(!this.data[key]) this.data[key] = 0;
        this.data[key] -= count;
        this.saveDataToFile()}

    push(key, element){
        if (!element) throw Error("The value is not found.");
        if (!key) throw Error("The value is not found.");
        if (!this.data[key]) this.data[key] = [];
        this.data[key].push(element);
        this.saveDataToFile()}

    clear(){
        this.data = {};
        this.saveDataToFile()}
    
    math(key , transaction , key2) {
        if(!key) throw TypeError("The first number was not found.")
        if(!key2)throw TypeError("The second number was not found.")
        if(!) throw TypeError("The transaction was not entered.")
        let number = parseInt(number)
        let number2 = parseInt(number2)       
        if(transaction=="+") {
        return number + number2}     
        if(transaction=="-") {
        return number - number2}       
        if(transaction=="*") {
        return number * number2}   
        if(transaction=="/") {
        return number / number2}
        else {
        throw Error("This transaction is undefined. (Please contact to xiyuDB support)")}}
}
