Ext.define('sfpark.view.LocationsList', {
    extend: 'Ext.dataview.List',
    xtype: 'locations',
    
    config: {
    	itemId: 'locations',
    	title: 'Available Parking',
	    store: 'Locations',
	    grouped: true,
	    itemTpl: '<div>{NAME} <p>{INTER}</p></div>'
    }
});