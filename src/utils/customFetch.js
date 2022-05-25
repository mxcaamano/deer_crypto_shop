let ok = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        if (ok) {
            setTimeout(() => {
                resolve(task)
            }, time);
        } 
        else {
            reject("Error")
        }
    });
}

export default customFetch;