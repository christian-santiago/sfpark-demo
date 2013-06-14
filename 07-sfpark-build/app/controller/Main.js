Ext.define('sfpark.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [

    ],
    config: {
        refs: {
        	locationsList: 'locations',
        	parkingMap: 'map',
        	mainView: 'mainview',
        	searchBar: 'mainview toolbar',
        	searchField: 'mainview #addressfield'      	
        },
        control: {
        	locationsList: {
	        	itemtap: 'showDetails'
	        },
        	searchField: {
	        	change: 'searchAddress'
        	}   
		}
    },
    
    showDetails: function(locations,index,target,record) {
	  	this.getMainView().setActiveItem({xtype:'parkingmap',data:record.getData()});
    },
    searchAddress: function(field, newval, oldval) {
	 	var address = field.getValue(),
	 	geocoder = new google.maps.Geocoder(), 
	 	thelist = this.getLocationsList(),
	 	mainview = this.getMainView(),
	 	locations = Ext.getStore('Locations'),
	 	lat,
	 	lon;
	 	
		if (address != '') {
			geocoder.geocode( {'address': address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					console.log(results[0]);
					var coords = results[0].geometry.location; 
					lat = coords.jb;
					lon = coords.kb

					locations.getProxy().setUrl('http://mobilerwcdev01.gene.com/sfpark/locations.php?radius=0.5&uom=mile&response=jsonp&lat='+lat+'&long='+lon);
				
					//error check and message if no parking is available
					locations.load(function(records){
						var count = records.length;
						if (count < 1) {
							console.log('No Records');
							Ext.Msg.alert('No Parking Available','You\'ll have to take your chances')
						}
						return;
					});
				
					//if the current active item is details, go back.
					console.log(mainview.getActiveItem().getItemId());
					if (mainview.getActiveItem().getItemId() === 'parkingmap') {
						mainview.pop(thelist);
					}
					thelist.refresh();
		
				} else {
					alert('Geocode was not successful for the following reason: ' + status);
				}
			});
		}
    }
    /*
    launch: function () {

    }
    */
});
