//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  return function (...args) {
    const hash = md5(args);
    let objectInCache = cache.find((objectInCache) => objectInCache.hash === hash);
      if (objectInCache) {
        console.log("Из кэша: " + objectInCache.value);
        return "Из кэша: " + objectInCache.value;
      }

    const value = func(...args);
    cache.push({ hash, value });
    if (cache.length > 5) {
        cache.shift();
    }  
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;
}
}
//Задача № 2
function debounceDecoratorNew(func, delay) {

  let timeoutId = null;
  return function(...args){
    if(timeoutId){
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      console.log(func(...args));
    }, delay);
    return func(...args);
  }
}

function spy(func) {
  function wrapper(...args){
    wrapper.count.push(args);
    return func(...args);
  }
    wrapper.count = [];

    return wrapper;
}