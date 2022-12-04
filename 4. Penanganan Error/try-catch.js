// try-catch
// try{
// 	console.log('ok');
// 	errorCodes;	// ini error karena undefine
// 	console.log('end block'); // ini tidak di jalankan dan langsung berpindah di block catch
// }catch(err){
// 	console.log(err.name);
// 	console.log(err.message);
// 	console.log(err.stack);
// }

// try-catch-finally
try{
	console.log('Ini awal block try');
	console.log('Ini akhir block try');
}catch(err) {
	console.log('Ini tidak dijalankan');
}finally{
	console.log('Akan tetap dieksekusi');
}

