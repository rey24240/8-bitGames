var swfobject = {};

swfobject.embedSWF = function(url, cont, width, height){
    var ruffle = window.RufflePlayer.newest(),
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
            width: width,
            height: height,
            style: 'width: ' + (typeof width === 'string' && width.endsWith('%') ? width : width + 'px') + '; height: ' + (typeof height === 'string' && height.endsWith('%') ? height : height + 'px'),
        });

    player.load({ url: url });
}
