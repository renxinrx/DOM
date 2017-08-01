# DOM 事件处理 事件对象
<b>事件处理程序</b>
  <ol>
    <li>HTML事件处理程序：直接写在html代码中的，html和js不解耦，修改时麻烦</li>
    <li>DOM0级事件处理程序：脱离html，写在script标签中，修改的时候可以少修改一点</li>
    <li>DOM2级事件处理程序：定义了两个方法用于处理指定和删除事件处理程序的操作。
    <b>addEventListener()和removeEventListener().他们都接受三个参数，要处理的事件名，作为事件处理程序的函数和布尔值（true表示在捕获阶段执行和false表示在冒泡阶段执行，这是默认情况）</b>
    </li>
    <li>IE事件处理程序：比较低版本的ie浏览器支持的，比如ie8及以下版本。
      <b>两个方法attachEvent()添加事件。detachEvent()删除事件。他们接收两个参数：事件处理程序的名称和事件处理程序的函数</b>
    </li>
  </ol>
  <b>事件对象</b>
  <b>1.DOM中的事件对象</b>
  <ol>
    <li>type属性用于获取事件类型</li>
    <li>target属性用于获取时间目标</li>
    <li>stopPropagation()方法用于阻止事件冒泡</li>
    <li>preventDefault()方法阻止事件的默认行为</li>
  </ol>
  <b>IE中的事件对象</b>
  <ol>
    <li>type属性用于获取事件类型</li>
    <li>srcElement属性，用于获取事件的目标</li>
    <li>cancleBubble属性用于阻止事件冒泡。设置为true标识阻止冒泡，设置为false标识不阻止冒泡</li>
    <li>returnValue属性，用于阻止事件的默认行为，设置为false标识阻止时间的默认行为</li>
  </ol>
  <b>鼠标有关</b>
  <ol>
    <li>onmousedown()鼠标任何形式的按下</li>
    <li>onmousemove()鼠标移动</li>
    <li>clientX,clientY  通过事件对象获取的当前鼠标x，y指针</li>
  </ol>
  
  ###封住一个DOM2级事件处理函数。兼容主流，ie低版本。封装函数的时候定义一个对象，函数作为这个对象的方法来使用。具体见代码。
