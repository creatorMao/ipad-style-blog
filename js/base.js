/**
 * 定义公共工具类对象
 */
(function(){
    if(!window.commonTools)
    {
        window.commonTools={};
    }
})();

/**
 * 日期处理
 */
(function () {
    var dateHelper = {
        //获取星期几
        getDay:function(isConvertToText) {
           var dt=new Date();
           var day=dt.getDay();
           if(isConvertToText)
           {
                var weekDay=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
                return weekDay[day];
           }
           return day;
        },
        //获取时间 几点几分
        getTime:function (split) {
            var dt=new Date();
           if(!split)
           {
                split=":";
           }
           return dt.getHours()+split+dt.getMinutes();
        },
        //获取某月某日
        getDate:function(){
            var dt=new Date();
            return (dt.getMonth()+1)+"月"+(dt.getDate())+"日";
        }
    };
    window.commonTools.dateHelper = dateHelper;
}());

/**
 * ajax请求
 */
(function () {
    var ajaxHelper = {
        ajax:function() {
           
        }
    };
    window.commonTools.ajaxHelper = ajaxHelper;
}());

