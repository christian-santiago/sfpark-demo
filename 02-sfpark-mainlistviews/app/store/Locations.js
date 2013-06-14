Ext.define('sfpark.store.Locations', {
	extend: 'Ext.data.Store',
	xtype: 'locationstore',
	
	requires: [
		'Ext.data.proxy.JsonP'
	],
	
	xtype:  'locationstore',
	
	config: {
		model: 'sfpark.model.Location',
		autoLoad: true,
		grouper: {
            groupFn: function(record) {
                return record.get('TYPE').toLowerCase() + ' street';
            },
            sortProperty: 'NAME'
        },
		proxy: {
			type: 'jsonp',
			url: 'http://mobilerwcdev01.gene.com/sfpark/locations.php?radius=0.5&uom=mile&response=jsonp&lat=37.7849903&long=-122.4067316',
			reader: {
				type: 'json',
				rootProperty: 'AVL',
				idProperty: 'OSPID'
			}
		}
	}
});