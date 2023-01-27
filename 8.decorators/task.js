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
  let firstCall = true;

  function makeEmptyTimeout() {
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, delay);
  }

  function wrapper(...args){
    wrapper.allCount++;
    if (firstCall) {
      firstCall = false;
      // убеждаемся, что следующие вызовы в течении делэя будут отменены
      makeEmptyTimeout();
      wrapper.count = 1;
      func(...args);
    } else {
      // если процесс уже был запущен, то отменяем
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // планируем новый процесс
      timeoutId = setTimeout(() => {
        timeoutId = null;
        wrapper.count++;
        func(...args);
      }, delay);
    }
  }
  wrapper.allCount = 0;
  wrapper.count = 0;

  return wrapper;
};