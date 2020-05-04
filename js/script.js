// TASK #1

// class Worker {
//     constructor(name, surname, rate, days, getSalary){
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//         this.getSalary;
//     }
//     getSalary(){
//         return this.rate * this.days
//     }
// }
// const worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name)
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary())


// TASK #2

// class Worker{
//     constructor(name, surname, rate, days){
//         this._name = name;
//         this._surname = surname;
//         this._rate = rate;
//         this._days = days;
//     }
//     get name(){
//         return this._name
//     }
//     get surname(){
//         return this._surname
//     }
//     get rate(){
//         return this._rate
//     }
//     get days(){
//         return this._days
//     }
//     getSalary(){
//         return this._days * this._rate
//     }
// }
// const worker = new Worker('Иван', 'Иванов', 10, 31)

// console.log(worker.name)
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary())


// TASK #3

// class Worker{
//     constructor(name, surname, rate, days){
//         this._name = name;
//         this._surname = surname;
//         this._rate = rate;
//         this._days = days;
//     }
//     get name (){
//         return this._name
//     }
//     get surname(){
//         return this._surname
//     }
//     set rate (value){
//         this._rate = value
//     }
//     get rate(){
//         return this._rate
//     }
//     set days (value){
//         this._days = value
//     }
//     get days(){
//         return this._days
//     }
//     getSalary(){
//         return this._rate * this._days
//     }
// }
// const worker = new Worker('Иван', 'Иванов', 10, 31)
// console.log(worker.name)
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary())

// worker.rate = 20
// worker.days = 10
// console.log(worker.getSalary())