// 封装成一个对象形式的，调用的时候就调用对象的相应属性方法
var until = {
	//根据类名获取对象 parent是父层的元素ID
	getElementsByClass:function(className,parent){
		var parent;
		if(parent){
			parent = document.getElementById(parent); //获取对象
		}else{
			parent = document
		};
		var arr = []; //存放parent下的查找到的className元素对象
		var list = parent.getElementsByTagName('*'); //获取到parent下的所有子元素对象
		var i,len = list.length;
		for(i=0;i<len;i++){
			if(list[i].className===className){
				arr.push(list[i]);
			}
		}
		return arr;
	},

	//绑定事件 elem目标元素，type事件类型名，handle是处理函数
	addEvent:function(elem,type,handle){
		// 兼容性
		if(elem.addEventListener){
			elem.addEventListener(type,handle);
		}else if(elem.attachEvent){
			elem.attachEvent('on'+type,handle);
		}else{
			// 比较古老的浏览器如ie5,ie6，既不支持attachEvent也不支持addEventListener
			elem['on'+type]=handle;
		}
	},

	//解除事件绑定 elem目标元素，type事件类型名，handle是处理函数
	removeEvent:function(elem,type,handle){
		// 兼容性
		if(elem.removeEventListener){
			elem.removeEventListener(type,handle);
		}else if(elem.detachEvent){
			elem.detachEvent('on'+type,handle);
		}else{
			// 比较古老的浏览器，既不支持attachEvent也不支持addEventListener
			elem['on'+type]=null;
		}
	},
	// 获取事件对象event,在ie低版本下需要使用window.event
	getEvent:function(e){
		var e = event || window.event;
	}
}