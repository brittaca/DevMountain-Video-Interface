angular.module('vidInterface')

.controller('watchCtrl', function($scope, video) {

	$scope.video = video.data;

	$scope.playlist = [];

	$scope.baseFile = 'http://54.200.225.18:1935/vods3/_definst_/mp4:amazons3/webdevvideos/'

	$scope.populatePlaylist = function() {
		for (var i = 0; i < $scope.video.playlist.length; i++) {
			if ($scope.playlist.indexOf($scope.video.playlist[i] === -1) ) {
				$scope.playlist.push($scope.video.playlist[i]);
			}
		} console.log($scope.playlist);
	}

	$scope.populatePlaylist();

	$scope.playerInstance = jwplayer("myElement");

	$scope.playlistItem = {};

  	$scope.loadPlaylistItem = function() { 
		$scope.playlistItems = [];
			for(var i = 0; i < $scope.playlist.length; i++) {
				$scope.playlistItems.push($scope.playlist[i]);
				$scope.playlistItem = $scope.playlist[i];
			}
		    	$scope.playerInstance.playlistItem(playlistItem);
            	$scope.playerInstance.play();
    }

	$scope.loadVideo = function(playlistItem) { 
		$scope.playerInstance.setup({
			playlist: {
				file: $scope.baseFile + playlistItem.file + '.mp4/playlist.m3u8'
		},
		height: 360,
		width: 640
	})
    	$scope.playerInstance.load({
            file: $scope.baseFile + playlistItem.file + ".mp4/playlist.m3u8",
            title: playlistItem.title
		});
        $scope.playerInstance.play();
    }

});






	var playerInstance = jwplayer("myElement");
        playerInstance.setup({
            playlist: [{
                        file: 'http://54.200.225.18:1935/vods3/_definst_/mp4:amazons3/webdevvideos/meet_hire.mp4/playlist.m3u8',
                        title: 'Meet & Hire'
                        },
                        {
                        file: 'http://54.200.225.18:1935/vods3/_definst_/mp4:amazons3/webdevvideos/e.mp4/playlist.m3u8',
                        title: 'Dave Smith Big O'
                        }],
                height: 360,
                width: 640,
                // listbar: {
                //  position: "right",
                //  size: 200
                // },
                // primary: 'html5'
            });

            function loadVideo(playItem1, playItem2, playItem3) { 
                playerInstance.load([{
                    // file: "http://54.200.225.18:1935/vods3/_definst_/mp4:amazons3/webdevvideos/"+playItem1+".mp4/playlist.m3u8"
                                file: "http://54.200.225.18:1935/vods3/_definst_/mp4:amazons3/webdevvideos/"+playItem1+".mp4/playlist.m3u8",
                                title: playItem1
                            },
                            {
                                file: "http://54.200.225.18:1935/vods3/_definst_/mp4:amazons3/webdevvideos/"+playItem2+".mp4/playlist.m3u8",
                                // title: playItem2
                            },
                            {
                                file: "http://54.200.225.18:1935/vods3/_definst_/mp4:amazons3/webdevvideos/"+playItem3+".mp4/playlist.m3u8",
                                // title: playItem3
                           

                            // ],
        //          // file: "http://54.200.225.18:1935/vods3/_definst_/mp4:amazons3/webdevvideos/"+playItem1+".mp4/playlist.m3u8",
        //          // title: "Test",
                }]);
                playerInstance.play();
                };

            function loadPlaylistItem(myIndex) { 
                playerInstance.playlistItem(myIndex);
                playerInstance.play();
            };

// })