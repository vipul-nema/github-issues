// ddjfdjlfdfdfd
var Data = {};

function setDat(org, repo){
	return org +repo;
};


function getData( org, repo, cb){
	// var url = "https://api.github.com/repos/org/repo/issues"
	// url.replace(/repo/i, repo);
	// url.replace(/org/i, org);
	url =  "https://api.github.com/repos/"+org+"/"+repo+"/issues";

	if(!Data[org+repo]){
		$.get( url, function( data ) {
			Data[org+repo] = data;
			cb(data);
		});
	}else{
		cb(Data[org+repo]);
	}
	
}