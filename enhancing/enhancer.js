module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  
  if (item.enhancement >= 0 && item.enhancement < 20 ){
    return {...item, enhancement: item.enhancement + 1};
  }else if (enhancement = 20) {
    return {...item}
  }else {
    return "No item return"
  }
}

function fail(item) {
  if(item.enhancement < 15){
    return {...item, durability: item.durability - 5};
  }else if (item.enhancement >= 15){
    return {...item, durability: item.durability - 10};
  }else if (item.enhancement > 17 || item.enhancement == 20){
    return{...item, enhancement: item.enhancement - 1};
  }
}

function repair(item) {
 
      return { ...item,
        durability: 100,
      }
  
}

function get(item) {
  return { ...item };
}
