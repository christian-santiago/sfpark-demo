Ext.define("sfpark.view.Map", {
	extend: 'Ext.Map',
	xtype: 'parkingmap',
	

	config: {
		itemId: 'parkingmap',
		title: 'Open Spots',
		useCurrentLocation: false,
		autoUpdate: false,
		mapOptions: {
			zoom: 15,
			center : new google.maps.LatLng(37.8023,-122.4057), //Coit Tower
			navigationControl: true,
			navigationControlOptions: {style: google.maps.NavigationControlStyle.DEFAULT}
		},
		listeners: {
                maprender: function(mapobj, gmap) {
                	console.log("maprender event");
                	//the google map parameter passed by the maprender event is undefined: TOUCH-4556.
                	/*DEBUG
                	console.log("map",gmap);
                	console.log("map",mapobj.getMap());
                	*/
                	
                	var location = this.getData().LOC,
                	gmap = mapobj.getMap(),
                	name = this.getData().NAME,
                	inter = this.getData().INTER != null?this.getData().INTER:' ',
                	tokens = location.split(','),
                	lat = parseFloat(tokens[1]),
                	lon = parseFloat(tokens[0]),
                	position = new google.maps.LatLng(lat,lon),
                	infowindow = new google.maps.InfoWindow({content: '<span class="info">'+name+'</span><br/><span class="subinfo">'+inter+'</span>'});
                	
                	//console.log("location",position);
                	gmap.panTo(position);
                           
                    var marker = new google.maps.Marker({
                        position: position,
                        title : name,
                        //icon: 'resources/images/parking.png',
                        map: gmap
                    });
					
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(gmap, marker);
                    });
                   
                }
        }
	}
});
