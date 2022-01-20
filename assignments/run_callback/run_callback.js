function RunCallback(a, b, cb) {
    var t=a+b;
    return cb(t);  // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
}

module.exports = RunCallback;
