function add(a, b) {
    // このコメントを解除するとeslintのエラーになる。
    // error  'aaa' is not defined 
    // aaa = 123;

    return a + b;
}

module.exports = { add };
