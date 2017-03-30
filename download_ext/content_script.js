
function downloadURL(url, filename, callback){
    console.log("Download!")
    chrome.runtime.sendMessage({
        download_url : url,
        filename : filename
    },function(){
        if(typeof callback == 'function'){
            callback();
        }
    })
}

function downloadImg(){
    console.log("downloadImg")
    var img = document.getElementById("screenshot")
    var filename = img.getAttribute('filename')

    // note: I'm assuming that the callback gets called before
    // downloadImg is called again. If you want to capture frames
    // faster, you'll have to do something a bit more clever, like
    // give the images id of screenshot1, screenshot2, etc.
    downloadURL(img.src, filename, function(){
	img.parentElement.removeChild(img)
    })
}

window.onload = function(){
    var btn = document.createElement('button');
    btn.id = 'download_btn';
    btn.style.visibility = 'hidden'
    document.body.appendChild(btn);
    btn.addEventListener('click',function(){
	downloadImg();
    })
    console.log("Loaded exte")
}
