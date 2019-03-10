const {src,dest,parallel} =require("gulp")


function javascript() {
    return "helllo"
}
exports.javascript =javascript;
exports.default =parallel(javascript)