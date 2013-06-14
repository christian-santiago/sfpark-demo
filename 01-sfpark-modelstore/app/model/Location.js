Ext.define('sfpark.model.Location', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
			{
				name: 'TYPE',
				type: 'string'
			},
			{
				name: 'OPSID',
				type: 'string'
			},
			{
				name: 'NAME',
				type: 'string'
			},
			{
				name: 'DESC',
				type: 'string'
			},
			{
				name: 'INTER',
				type: 'string'
			},
			{
				name: 'TEL',
				type: 'string'
			},
			{
				name: 'LOC',
				type: 'string'
			},
			{
				name: 'OPHRS'	
			}
		]
	}
});