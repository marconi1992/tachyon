var tachyon = require( './index' )

exports.handler = function( event, context ) {
	var key = event.key
	var bucket = event.bucket
	var args = event.args
	var region = event.region
	tachyon( region, bucket, key, args, function( err, data, info ) {
		if ( err ) {
			context.fail( err )
		}
		context.succeed( {
			data: new Buffer( data ).toString( 'base64' ),
			format: info.format,
			size: info.size
		} )
		data = null
		info = null
		err = null
	} )
}