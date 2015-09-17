$(function () {
	$('#container').waterfall({
        itemCls: 'item',
        colWidth: 222,
        gutterWidth: 15,
        gutterHeight: 15,
        checkImagesLoaded: false,
        maxPage:9,
        isAnimated: true,
        animationOptions: {
        },
        path: function(page) {
            return 'data/data1.json?page=' + page;
        },
        callbacks: {
        	loadingStart: function ($loading) {
        		$loading.show();
        	},
        	renderData: function (data, dataType) {
        		var tpl,
		            template;

		        if ( dataType === 'json' ||  dataType === 'jsonp'  ) { // json或jsonp格式
		            tpl = $('#waterfall-tpl').html();
		            template = Handlebars.compile(tpl);
		            return template(data);
		        } else { // html格式
		            return data;
		        }
        	}
        }
    });
    // $("#container").data('waterfall');
    console.log($("#container").data());
});