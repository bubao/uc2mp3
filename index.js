/**
 * @description: 
 * @author: bubao
 * @date: 2021-03-04 01:48:32
 * @last author: bubao
 * @last edit time: 2021-03-04 03:38:35
 */

/**
 * @description
 * @author bubao
 * @date 2021-03-04
 * @param {Buffer} buffer uc! buffer data
 * @param {Function} 
 */
function translation(buffer, callback = cb) {
	process.nextTick(middler(buffer, callback))
}
/**
 * @description
 * @author bubao
 * @date 2021-03-04
 * @param {NodeJS.ErrnoException|Null} [error=NodeJS.ErrnoException]
 * @param {Buffer|Null} [result=null]
 */
function cb(error, result){}
/**
 * @description core
 * @author bubao
 * @date 2021-03-04
 * @param {Buffer} buffer
 * @returns {Buffer}
 */
function core(buffer) {
	if (!Buffer.isBuffer(buffer)) {
		return false;
	}
	return buffer.map(value => value ^ 0xA3);
}

/**
 * @description middle function
 * @author bubao
 * @date 2021-03-04
 * @param {Buffer} buffer
 * @param {Function} cb
 * @returns {Function}
 */
function middler(buffer, cb) {
	return () => {
		const result = core(buffer);
		result? cb(null, result):cb("buffer", null);
	}
}


module.exports = translation