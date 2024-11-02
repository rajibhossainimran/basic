// The search() method searches a string for a specified value and returns the position of the match
const text = 'My name is Md Rajib Hossain';
// const result = text.search('rajib');
const result = text.search(/rajib/i);
console.log(result);