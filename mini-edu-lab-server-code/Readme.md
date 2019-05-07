# 说明 

启动 json-server

json-server 可以直接把一个json文件托管成一个具备全RESTful风格的API，并支持跨域、jsonp、路由订制、数据快照保存等功能的 web 服务器。

```
# 如果失败了，尝试 sudo npm install -g json-server
npm install -g json-server
git clone https://github.com/2019-web/mini-edu-lab-server-code.git
cd mini-edu-lab-server-code
json-server --watch --port 5300 db.json
```

> 注意: db.json 内部都是测试数据，你也可以随意修改为自己的数据，方便测试。

```
# HTTP Get 请求，可以得到图片
http://localhost:5300/assets/images/course/network.png
```
