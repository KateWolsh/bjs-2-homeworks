function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i])) {
        return true;
    } else {
        return false;
    }
}


function getUsersNamesInAgeRange(users, gender) {
    return users
        .filter(user => user.gender === gender)
        .map(result => result.age)
        .reduce((acc, item, index, arr) => {
            acc += item
            if (index === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0);
}