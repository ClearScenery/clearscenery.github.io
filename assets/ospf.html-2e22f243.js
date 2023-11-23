import{_ as e,o as i,c as n,a as l}from"./app-d8328856.js";const s="/hcie-img/ospf/statemachine.png",a={},d=l(`<h2 id="ospf介绍" tabindex="-1"><a class="header-anchor" href="#ospf介绍" aria-hidden="true">#</a> OSPF介绍</h2><p>OSPF(Open Shortest Path First): 开放式最短路径优先OSPF协议是IETF定义的一种基于链路状态的内部网关路由协议【IGP】</p><p>适用场景分析，动态路由协议分类：</p><pre><code>IGP协议：内部网关协议  AS内 OSPF  IS-IS

EGP协议：外部网关协议  AS间 BGP
</code></pre><p>AS介绍：AS：自治系统是一种网络架构，由一个统一的管理者构建的系统叫做一个AS</p><pre><code>运行相同的IGP协议，策略比较单一

公有AS: 网络系统 申请一个AS号
私有AS: 不需要申请
</code></pre><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p><code>LSA</code>: 链路状态通告</p><p><code>LSDB</code>: 链路状态数据库</p><p><code>邻居关系</code>: 邻居/邻接关系，先要建立关系，才能做数据同步（同步LSA）</p><p>起OSPF的每个设备LSDB都是一样的</p><p>LSDB中存放了备份信息，当路由表选路时，一条链路故障时，可以通过LSDB重新计算出最优备份链路</p><h3 id="报文" tabindex="-1"><a class="header-anchor" href="#报文" aria-hidden="true">#</a> 报文</h3><p>OSPF报文在一个广播域内进行传递。</p><p>OSPF报文(V2版本)封装在IP报文中，协议号为89</p><p>OSPF报文类型有5种</p><ul><li>1、HELLO报文(建立关系，维护关系)</li><li>2、DD(Database Description)报文(空DD：选举主从)，交互摘要信息</li><li>3、LSR(Link State Request)报文</li><li>4、LSU(Link State Update)报文</li><li>5、LSACK()报文</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PROTOCOL: 89
S-IP: 发送报文的出口地址
D-IP: 224.0.0.5 组播
TTL: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>ospf的配置参数</p><p>1、process-id: 进程号,本设备标识ospf进程的 进程号：本地有效</p><p>2、router-id: 产生LSA的路由器ID</p><p>Router-ID两种生产方式：</p><ul><li>1、人为配置</li><li>2、自动产生：系统的router-id -&gt; 设备自动产生的router-id(设备上第一个UP接口上配置的IP，多个同时UP接口，选取最大的IP)</li></ul><p>OSPF Router-ID特点：除非设备或进程重置，否则一旦确定就不会改变</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[R1]ospf 10 router-id 1.1.1.1
Info: The configuration succeeded. You need to restart the OSPF process to valid
ate the new router ID.
[R1-ospf-10]q
[R1]q
&lt;R1&gt;reset ospf process 
Warning: The OSPF process will be reset. Continue? [Y/N]:Y
&lt;R1&gt;sys
Enter system view, return user view with Ctrl+Z.
[R1]dis ospf peer 

  OSPF Process 10 with Router ID 1.1.1.1
[R1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、OSPF的area区域号：</p><ul><li>OSPF区域是基于端口划分的</li><li>区域号相同，则为相同区域</li><li>LSA：同步前提条件，必须是相同区域</li></ul><p><code>骨干区域：</code><strong>区域0</strong>，是ospf必须有的区域，是ospf第一个区域</p><p><code>非骨干区域：</code><strong>非0区域</strong></p><p>OSPF所有的操作都是基于接口的</p><p>4、ospf建立关系需要借助接口</p><p>network：宣告</p><ul><li>区域下宣告</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    格式：network 接口地址 接口网段反掩码
    12.1.1.1 255.255.255.0 正掩码
    反掩码： 255.255.255.255 - 255.255.255.0 = 0.0.0.255
    快捷方式：network 接口地址 0.0.0.0

    宣告所有接口（不推荐）
    network 0.0.0.0 0.0.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接口下宣告(前提：全局开启了ospf协议，建立了该进程，创建区域0)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>进入接口
ospf enable 10 area 0

例子：
[R1]int e0/0/0
[R1-Ethernet0/0/0]ospf enable 10 area 0
[R1-Ethernet0/0/0]dis this
#
interface Ethernet0/0/0
 ip address 12.1.1.1 255.255.255.0
 ospf enable 10 area 0.0.0.0
#
return
[R1-Ethernet0/0/0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h3><p>OSPF有7种状态：</p><p>当前OSPF协议与其他设备的OSPF协议处于什么状态</p><ul><li><p>Down</p></li><li><p>Init</p></li><li><p>2-way</p></li><li><p>Exstart</p></li><li><p>Exchange</p></li><li><p>Loading</p></li><li><p>Full</p></li></ul><p>处于2-way，建立了邻居关系</p><p>处于full，建立了邻接关系</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>R2-ospf-10-area-0.0.0.0<span class="token punctuation">]</span>dis ospf peer brief

  OSPF Process <span class="token number">10</span> with Router ID <span class="token number">20.1</span>.1.2
    Peer Statistic Information
 ----------------------------------------------------------------------------
 Area Id          Interface                        Neighbor <span class="token function">id</span>      State    
 <span class="token number">0.0</span>.0.0          Ethernet0/0/0                    <span class="token number">20.1</span>.1.1         Full        
 ----------------------------------------------------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>邻居状态机</p></blockquote><p><img src="`+s+'" alt="邻居状态机"></p><h3 id="报文-1" tabindex="-1"><a class="header-anchor" href="#报文-1" aria-hidden="true">#</a> 报文</h3><blockquote><p>Hello报文 ---用于建立邻居关系</p></blockquote><p>双方只发hello包</p><blockquote><p>DD报文 -- Loading状态</p></blockquote><p>DD报文是单播报文</p><p>假如多台设备组OSPF时两两同步LSA时，会出现重复发送的情况，且关系建立复杂。</p><p>为了减少ospf报文泛洪数量，ospf通过DR,BDR选举优化报文传输</p><ul><li>LSR</li><li>LSU</li><li>LSACK</li></ul><blockquote><p>最终full -- 邻接关系</p></blockquote><h4 id="dr-bdr选举" tabindex="-1"><a class="header-anchor" href="#dr-bdr选举" aria-hidden="true">#</a> DR BDR选举</h4><p>路由器每一个口都是一个广播域</p><p>每个广播域下会选举一个DR和一个BDR，其他设备（DR-Other）无需建立邻接关系，只需建立邻居关系</p><p>以太网口：广播型网络--接口类型</p><p>一个广播型网络中必须都有DR，可以没有BDR，否则无法生成ospf协议</p><blockquote><p>DR，BDR选取时间</p></blockquote><p>在2-way和Exstart之间选取</p><ul><li>1、知道网络中所有路由器</li><li>2、没有进行数据库交互之前</li></ul><p>Hello报文每隔10s发送一次，40s时间选举DR，期间还是Waiting</p><blockquote><p>DR，BDR选取策略</p></blockquote><p>1、接口的优先级、默认1 0-255 越大越优秀 Hello报文有</p><p>2、设备的RID Hello报文有</p><p>3、首先选取BDR</p><h4 id="主从选举" tabindex="-1"><a class="header-anchor" href="#主从选举" aria-hidden="true">#</a> 主从选举</h4><p>首先需要明确下，DR，BDR和主从没有任何关系。</p><h4 id="dr-bdr选举和主从选举区别" tabindex="-1"><a class="header-anchor" href="#dr-bdr选举和主从选举区别" aria-hidden="true">#</a> DR/BDR选举和主从选举区别</h4><p>1、阶段不同：</p><ul><li>DR/BDR选举在2-way状态。</li><li>主从选举在extart状态。</li></ul><p>2、选举方法不同：</p><ul><li>DR/BDR先看优先级，然后查RID来选DR。</li><li>主从选举看MS位，1为主，0为从，如果都为1，比RID.</li></ul><p>3、功能不同：</p><ul><li>DR/BDR：拓扑变更时，DR通过组播来维护LSDB</li><li>主从：初始化OSPF路由器链路状态数据库用的。</li></ul>',77),r=[d];function t(p,c){return i(),n("div",null,r)}const u=e(a,[["render",t],["__file","ospf.html.vue"]]);export{u as default};
