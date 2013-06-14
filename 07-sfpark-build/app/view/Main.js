Ext.define('sfpark.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',
        requires: [
		'Ext.dataview.List',
		'Ext.field.Search'
    ],
    config: {
    	items: [
    		{
	    		xtype: 'toolbar',
	    		docked: 'top',
	    		items: [
	    			{
		    			xtype: 'searchfield',
		    			centered: true,
		    			itemId: 'addressfield'
	    			}
	    		]	
    		},
    		{
    			xtype:'locations'
    		}
    	]
   }
});
