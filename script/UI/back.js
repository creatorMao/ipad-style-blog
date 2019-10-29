(function(){
    if(window.modObj)
    {
        window.modObj.mouseBack=function () {
            var that = this;
            $("body").bind('mousedown', function (e) {//追踪鼠标位置
                that.dataStore.pointStart = e.pageY;

                $("body").bind('mousemove', function (e) {//追踪鼠标位置
                });
            });

            $("body").bind('mouseup', function (e) {//追踪鼠标位置
                that.dataStore.pointEnd = e.pageY;

                //清除
                $("body").unbind('mousemove');

                if (that.dataStore.pointStart - that.dataStore.pointEnd > 100) {
                    window.parent.modObj.backDesktop();
                }
            });
        }

        window.modObj.mouseBack();
    }
})();