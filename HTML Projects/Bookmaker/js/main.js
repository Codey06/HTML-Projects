// listen for the submit

document.getElementById('myform').addEventListener('submit', saveBookmark);


function saveBookmark(e){
  	var sitename=document.getElementById('siteName').value;
  	var siteurl=document.getElementById('siteUrl').value;
  	if (!sitename || !siteurl) {
  		alert('Please fill  in the form');

  		return false;
  	}
  
  	var bookmark={
  		name:sitename,
  		url:siteurl
  	}
  		console.log(bookmark);
  		if (localStorage.getItem('bookmarks') === null) {
	var bookmarks=[];
	bookmarks.push(bookmark);
	localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
}
else{
	var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));

	// Add bookmark to array
	bookmarks.push(bookmark);

	//Re-set back to localstorage
	localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
}
  	// Re-fetch book mark
	fetchBookmarks();
  	e.preventDefault();
  }
  //Delete Bookmar
  function deleteBookmark(url){
  	//get bookmark from local Storage
  	var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
  	//loop through bookmarks

  	for(var i=0; i<bookmarks.length;i++){
  		if(bookmarks[i].url==url){
  			//remove from array
  			bookmarks.splice(i,1);
  		}
  	}
  	//Re-set back to localstorage
	localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

	// Re-fetch book mark
	fetchBookmarks();
  }
  //fetch Bookmark
  function fetchBookmarks(){
  	var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
  	console.log(bookmarks);

  	//get out put id
  	var bookmarksResult= document.getElementById('bookmarksResult');

  	// //build Out-put

  	bookmarksResult.innerHTML=' ';
  	for (var i = 0; i <bookmarks.length; i++) {

  		var name=bookmarks[i].name;
  		var url=bookmarks[i].url;

  		bookmarksResult.innerHTML +='<div class="well">'+'<h3>'+name+

                                           '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> '+
                                           '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> '
                                         

  		                                     '</h3>'+'</div>';  	}
  }
  //
   // local storage tes
   // localStorage.setItem('test','helloWorld');
                              //    '<div class="well">'+

  		                          // '<h3>'+name+'</h3>'+'</div>';
  		                          // '<a class=" btn btn-default" target="_blank" href="'+url+'">Visit</a>'


