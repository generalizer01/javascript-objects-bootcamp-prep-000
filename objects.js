var playlist = {Cent_30:'Gangsta',Kefha:'Wobbly',Duchess_Gogo:'Bridge_Face'};

function updatePlaylist(playlist,artname,songtitle) {
  playlist.artname = songtitle
  // or we could use playlist[artname] = songtitle
  return playlist
}

function removeFromPlaylist 