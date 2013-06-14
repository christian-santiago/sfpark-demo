Ext.define('sfpark.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [

    ],
    config: {
        refs: {
        	locationsList: 'locations',
        	parkingMap: 'map',
        	mainView: 'mainview'        	
        },
        control: {
        	locationsList: {
	        	itemtap: 'showDetails'
	        }        
		}
    },
    
    showDetails: function(locations,index,target,record) {
	  	this.getMainView().setActiveItem({xtype:'parkingmap',data:record.getData()});
    },
    launch: function () {

    }
});
