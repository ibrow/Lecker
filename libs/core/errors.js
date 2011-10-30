/**
 * Errors
 * Different errors used throughout the application. Going for different
 * errors so can have more fine grain control than always throwing a 
 * normal "Error"
 **/

var Database = function(msg) {
    this.name = 'Database Error';
    console.log(msg);
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}
Database.prototype.__proto__ = Error.prototype;




exports.Database = Database;

