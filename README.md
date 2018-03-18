##day01
###完成内容
	1）使用vue-cli脚手架创建应用
	2）底部路由导航完成（使用vue-router）
	3）头部搜索和导航滑动
###问题
	1）在使用路由组件时，APP中未写router-view标签
	2）头部导航使用better-scroll插件时，采用ul-li布局，ul宽度设置错误，导致不能进行滑动
	3）布局不熟练  
	
##day02
###完成内容
	router-link添加class属性无效
	给routerlink添加样式，直接将router-link的结构位置写成a标签来添加样式；
	某一样式的激活通过定义router-link-active
###问题
  首页定位，去除广告后自动上移
###解决
  广告和下部内容自动排列，下部内容绝对定位，指定top为广告高度，
  bottom为底部高度，并设置overflow为hidden，然后内部内容通过
  better-scroll形成滚动，再将头部设置绝对定位；  
  
###day03
"1）使用mock模拟获取后台数据并完成分类数据的动态获取；
2）完成首页部分组件的拆分"
进度
1）分类页面的数据获取；
2）首页组件的部分拆分
###day04 
1）父元素使用opacity，子元素会继承父元素的透明度，这种写法就算给子元素重新赋值opacity：1；他也同样会继承父元素opacity的值；
1）使用rgba（）；
####day05
1)getElementsByClassName ,获取的是某一元素的class值，而将此方法写在了vfor之后的元素上，得到的是一系列数组，是不能获取到其class属性值的；
2）当通过滑动的高度来和所有容器的top值进行比较时获取index，进而判断是否和ABCD中某一index是否相等，增加ABCD的样式时，最后一项Z样式不显示
#####解决
1）分清结构，得到某一个元素
2）滚动高度不够，可以在判断条件中给scrollY加一个数值解决



