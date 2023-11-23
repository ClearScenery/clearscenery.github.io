import{_ as e,r as i,o as l,c as t,b as n,d as c,e as p,a as s}from"./app-d8328856.js";const o="/hcie-img/route/static-route-1.png",d={},u=n("blockquote",null,[n("p",null,"VRP系统介绍")],-1),r={href:"https://zhuanlan.zhihu.com/p/180214934",target:"_blank",rel:"noopener noreferrer"},v=s(`<p>命令：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>system-view/sy:  进入系统视图
q/quit:  从当前视图退回倒上一个视图
ctrl+z:  从当前视图退回到用户视图
interface 接口名称: 进入到接口视图,如 interface GigabitEthernet 0/0/0
ospf/其他协议：进入到协议视图，如： opsf 10
sysname/sy: 命名设备，在系统视图下，如：sy r1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令等级：</p><table><thead><tr><th>用户等级</th><th>命令等级</th><th>名称</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>访问级</td></tr><tr><td>1</td><td>0 and 1</td><td>监控级</td></tr><tr><td>2</td><td>0,1 and 2</td><td>配置级</td></tr><tr><td>3-15</td><td>0,1,2 and 3</td><td>管理级</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 无用户模式</span>
<span class="token punctuation">[</span>AR1-ui-vty0-4<span class="token punctuation">]</span>authentication-mode password 
Please configure the login password <span class="token punctuation">(</span>maximum length <span class="token number">16</span><span class="token punctuation">)</span>:duidui2
<span class="token comment"># 配置命令等级为3</span>
<span class="token punctuation">[</span>AR1-ui-vty0-4<span class="token punctuation">]</span>user privilege level <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3A：认证，授权，审计/计费</p><blockquote><p>路由介绍</p></blockquote><p>路由表： 路由器寻址转发时查询路由表。根据路由进行具体的转发。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入系统模式</span>
<span class="token operator">&lt;</span>Huawei<span class="token operator">&gt;</span>sy
Enter system view, <span class="token builtin class-name">return</span> user view with Ctrl+Z.
<span class="token comment"># 显示路由表</span>
<span class="token punctuation">[</span>Huawei<span class="token punctuation">]</span>display <span class="token function">ip</span> routing-table 
Route Flags: R - relay, D - download to fib
------------------------------------------------------------------------------
Routing Tables: Public
         Destinations <span class="token builtin class-name">:</span> <span class="token number">4</span>        Routes <span class="token builtin class-name">:</span> <span class="token number">4</span>        

Destination/Mask    Proto   Pre  Cost      Flags NextHop         Interface

      <span class="token number">127.0</span>.0.0/8   Direct  <span class="token number">0</span>    <span class="token number">0</span>           D   <span class="token number">127.0</span>.0.1       InLoopBack0
      <span class="token number">127.0</span>.0.1/32  Direct  <span class="token number">0</span>    <span class="token number">0</span>           D   <span class="token number">127.0</span>.0.1       InLoopBack0
<span class="token number">127.255</span>.255.255/32  Direct  <span class="token number">0</span>    <span class="token number">0</span>           D   <span class="token number">127.0</span>.0.1       InLoopBack0
<span class="token number">255.255</span>.255.255/32  Direct  <span class="token number">0</span>    <span class="token number">0</span>           D   <span class="token number">127.0</span>.0.1       InLoopBack0

<span class="token punctuation">[</span>Huawei<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>网段路由（掩码小于32）</li><li>主机路由（掩码等于32），标识一个精确的IP地址</li></ul><p>路由表默认有四条默认路由：</p><ul><li>127.0.0.0/8</li><li>127.0.0.1/32</li><li>127.255.255.255/32</li><li>255.255.255.255/32</li></ul><p>路由表的形成：</p><ul><li>直连路由（某一个主机配置IP之后会多出三条直连路由） <ul><li>主机路由</li><li>广播路由</li><li>网段路由</li></ul></li><li>静态路由</li><li>动态路由</li></ul><p>主机配置IP之后，物理接口关闭，直连路由就会消失，物理接口开启，直连路由就会存在(模拟拔网线)</p><p>路由匹配原则：最长掩码匹配原则</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Huawei<span class="token punctuation">]</span>dis <span class="token function">ip</span> routing-table
Route Flags: R - relay, D - download to fib
------------------------------------------------------------------------------
Routing Tables: Public
         Destinations <span class="token builtin class-name">:</span> <span class="token number">4</span>        Routes <span class="token builtin class-name">:</span> <span class="token number">4</span>        

Destination/Mask    Proto   Pre  Cost      Flags NextHop         Interface

      <span class="token number">127.0</span>.0.0/8   Direct  <span class="token number">0</span>    <span class="token number">0</span>           D   <span class="token number">127.0</span>.0.1       InLoopBack0
      <span class="token number">127.0</span>.0.1/32  Direct  <span class="token number">0</span>    <span class="token number">0</span>           D   <span class="token number">127.0</span>.0.1       InLoopBack0
<span class="token number">127.255</span>.255.255/32  Direct  <span class="token number">0</span>    <span class="token number">0</span>           D   <span class="token number">127.0</span>.0.1       InLoopBack0
<span class="token number">255.255</span>.255.255/32  Direct  <span class="token number">0</span>    <span class="token number">0</span>           D   <span class="token number">127.0</span>.0.1       InLoopBack0

<span class="token punctuation">[</span>Huawei<span class="token punctuation">]</span>in g0/0/0
<span class="token punctuation">[</span>Huawei-GigabitEthernet0/0/0<span class="token punctuation">]</span>dis <span class="token function">ip</span> <span class="token keyword">in</span> br
*down: administratively down
^down: standby
<span class="token punctuation">(</span>l<span class="token punctuation">)</span>: loopback
<span class="token punctuation">(</span>s<span class="token punctuation">)</span>: spoofing
The number of interface that is UP <span class="token keyword">in</span> Physical is <span class="token number">3</span>
The number of interface that is DOWN <span class="token keyword">in</span> Physical is <span class="token number">1</span>
The number of interface that is UP <span class="token keyword">in</span> Protocol is <span class="token number">1</span>
The number of interface that is DOWN <span class="token keyword">in</span> Protocol is <span class="token number">3</span>

Interface                         IP Address/Mask      Physical   Protocol  
GigabitEthernet0/0/0              unassigned           up         down      
GigabitEthernet0/0/1              unassigned           up         down      
GigabitEthernet0/0/2              unassigned           down       down      
NULL0                             unassigned           up         up<span class="token punctuation">(</span>s<span class="token punctuation">)</span>     
<span class="token punctuation">[</span>Huawei-GigabitEthernet0/0/0<span class="token punctuation">]</span>shutdown
Jan <span class="token number">24</span> <span class="token number">2023</span> 00:39:53-08:00 Huawei %%01IFPDT/4/IF_STATE<span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>:Interface GigabitEt
hernet0/0/0 has turned into DOWN state.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>路由表介绍</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      路由加表原则：“最优加表” == 如何衡量路由最优
            如果目的网络及掩码信息不一致，则都会加表；如果一致才会比较
            比较形成路由的优先级数值，越小越优

      路由查表原则：最长掩码匹配
            本地如果有多个匹配的路由，会按照掩码最长的进行转发
      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Destination/Mask: 目的地/掩码，代表目标路由条目</p><p>Proto: 路由协议</p><ul><li>直连路由Direct</li><li>静态路由Static</li></ul><p>Pre: 路由优先级（越小越优）</p><ul><li>直连路由：0</li><li>静态路由：60</li><li>OSPF: 10</li></ul><p>Cost: 开销 (不同路由协议cost值计算方式不同)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      直连路由/静态路由 cost =0

      如果优先级一致，则比较cost

      优先级和开销一致，则是等价路由，都会加表。可以做负载分担
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由匹配逻辑： 目的地址和路由条目目的地址匹配，相同取掩码最长得进行匹配</p>`,27),m=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"小记"),n("p",null,"1、 Lookback: 环回口，逻辑接口，设备不导，接口一直可用，一般用于BGP建立邻居使用"),n("p",null,"2、 0.0.0.0/0 --默认路由/缺省路由"),n("p",null,"3、 默认匹配所有地址")],-1),b=s(`<p>直连路由：无法进行非直连的通信</p><p>静态路由：手动配置</p><blockquote><p>静态路由配置</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ip route-static 目标网络 掩码 下一跳地址</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>浮动静态路由（路由备份）</p></blockquote><p>特殊地址： 0.0.0.0 作用：1.未指定地址-DHCP发送报文 2.路由层面：全网所有地址</p><p>127.0.0.1 作用：用于设备内部TCP/IP协议栈适用</p><p>适用场景：</p><p>网关配置默认路由需要配置多个下一跳</p><p>主备线路带宽不一样大，不能做负载均衡</p><p><img src="`+o+`" alt="浮动场景"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># preference设置优先级</span>

<span class="token function">ip</span> route-static <span class="token number">0.0</span>.0.0 <span class="token number">0.0</span>.0.0 <span class="token number">20.1</span>.1.1 preference <span class="token number">64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function k(h,g){const a=i("ExternalLinkIcon");return l(),t("div",null,[u,n("p",null,[n("a",r,[c("https://zhuanlan.zhihu.com/p/180214934"),p(a)])]),v,m,b])}const f=e(d,[["render",k],["__file","route.html.vue"]]);export{f as default};
