import{_ as p,o as t,c as d,a as e}from"./app-d8328856.js";const o={},c=e('<p>在 TCP/IP 通信中使用 IP 地址识别主机和路由器。 IP 地址是逻辑地址，需 要手工配置或自动获取，为了保证正常通信，每个设备必须配置 IP 地址。</p><p>IP 地址由 32 位二进制数组成。为了方便记录，将 32 位的 IP 地址分为 4 组，每 8 位为一组，每组以“ . ”隔开，再将每组数转换为十进制数。</p><p>网络号是设备所在区域的一种标识，网络号相同的设备位于同一个网段内，网络 号不同的设备通过路由器实现通信。主机号是在同一个网段中不同设备的标识， 不允许同一个网段内出现重复的主机号</p><p>8位二进制对比表：</p><table><thead><tr><th>1000 0000</th><th>0100 0000</th><th>0010 0000</th><th>0001 0000</th><th>0000 1000</th><th>0000 0100</th><th>0000 0010</th><th>0000 0001</th></tr></thead><tbody><tr><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr></tbody></table><p>ISNA机构——五大类</p><p><em><strong>A类</strong></em>：A 类 IP 地址是首位以“ 0 ”开头的地址。从第 1 位到第 8 位是它的网络号， 网络号的范围是 0 ~ 127 。其中 0 和 127 属于保留地址，减去两个保留 地址，因此有 126 个可用的 A 类地址。后 24 位是主机号，一个 A 类地址的主机地址数量就是 2 的 24 次方，即16777216 个主机地址。</p><p><em><strong>B类</strong></em>：B 类 IP 地址是前两位以“ 10 ”开头的地址。从第 1 位到第 16 位是它的网络 号，网络号的范围是 128.0 ~ 191.255 。其中 128.0 和 191.255 属 于保留地址，减去两个保留地址，因此有 16382 个可用的 B 类地址。其中 128.0 和 191.255 属于保留地址，减去两个保留地址，因此有 16382 个可用的 B 类地址。后 16 位是主机号，一个 B 类地址的主机地址的数量就是 2 的 16 次方，即65536 个主机地址。</p><p><em><strong>C类</strong></em>：C 类 IP 地址是前三位以“ 110 ”开头的地址。从第 1 位到第 24 位是它的网 络号，网络号的范围是 192.0.0 ~ 223.255.255 。其中 192.0.0 和 223.255.255 属于保留地址，减去两个保留地址，因此有 2097150 个可用的 C 类地址。后 8 位是主机号，一个 C 类地址的主机地址的数量就是 2 的 8 次方，即 256 个主机地址。</p><p><em><strong>D类</strong></em>：D 类 IP 地址是前四位以“ 1110 ”开头的地址。从第 1 位到第 32 位是它的网 络号，网络号的范围是 224.0.0.0 ~ 239.255.255.255 。D 类地址 没有主机号，用于组播。</p><p><em><strong>广播地址</strong></em>:IP 地址中的主机号全部为 1 的就是广播地址，它是向同一个网段中的所有主 机发送数据包。例如一个 B 类主机地址 172.20.1.100 的广播地址是 172.20.255.255</p><p><em><strong>IP组播</strong></em>:组播用于将包发送给特定组内的所有主机。组播使用 D 类地址。因此 IP 地址前四位是“ 1110 ”开头的，就是组播地址。剩下的 28 位就是组播的组编号。组播的地址范围是 224.0.0.0 ~ 239.255.255.255 ，其中 224.0.0.0 ~ 224.0.0.255 既可以在同一个网段内实现组播，又可以跨网段给全网所有组员发送组包。</p><table><thead><tr><th>地址</th><th>网络位</th><th>主机位</th><th>网段范围</th><th>网段数量</th><th>每个网段可用主机数量</th></tr></thead><tbody><tr><td>A</td><td>8</td><td>24</td><td>0-127</td><td>2^7=128-2=126</td><td>2^24-2=16,777,214</td></tr><tr><td>B</td><td>16</td><td>16</td><td>128.0 ~ 191.255</td><td>2^14=16384</td><td>2^16-2=65534</td></tr><tr><td>C</td><td>24</td><td>8</td><td>192.0.0 ~ 223.255.255</td><td>2^21=2097152</td><td>2^8-2=254</td></tr></tbody></table><p>网段数量=2的可变的网络位的次方 主机数量=2的可变的主机位的次方-2 （剪掉网段内的一个网络地址和广播地址）</p><p>1100 0000.1010 1000.0000 0001.0110 1111地址 1111 1111.1111 1111.1111 1111.0000 0000掩码 1100 0000.1010 1000.0000 0001.0000 0000 —— 网络地址（出现在路由表）192.168.1.0 1100 0000.1010 1000.0000 0001.0000 0000 —— 广播地址（用于本网段所有主机通信）192.168.1.255</p><blockquote><p>VLSM——可变长子网掩码</p></blockquote><p>网络位向主机位进行借位，增加网段，减少网络广播，增加网络隔离</p><p>193.1.1.0/24</p><p>193.1.1.0/25</p><p>1100 0001.0000 0001.0000 0001.0000 0000 网络地址 193.1.1.0/24</p><p>1100 0001.0000 0001.0000 0001.1111 1111 广播地址 193.1.1.255/24</p><p>1111 1111.1111 1111.1111 1111.0000 0000 子网掩码</p><p>可用地址范围：<code>193.1.1.1-193.1.1.254 2^8 -2 =254</code></p><p>借一位主机位情况：</p><p>主机位为0：</p><p>1100 0001.0000 0001.0000 0001.<code>0</code>000 0000 网络地址 193.1.1.0/25</p><p>1100 0001.0000 0001.0000 0001.<code>0</code>111 1111 广播地址 193.1.1.127/25</p><p>1111 1111.1111 1111.1111 1111.<code>1</code>000 0000 子网掩码 255.255.255.128</p><p>可用地址范围：<code>193.1.1.1-193.1.1.126 2^7 -2 =126</code></p><p>主机位为1：</p><p>1100 0001.0000 0001.0000 0001.<code>1</code>000 0000 网络地址 193.1.1.128/25</p><p>1100 0001.0000 0001.0000 0001.<code>1</code>111 1111 广播地址 193.1.1.255/25</p><p>1111 1111.1111 1111.1111 1111.<code>1</code>000 0000 子网掩码 255.255.255.128</p><p>可用地址范围：<code>193.1.1.129-193.1.1.254 2^7 -2 =126</code></p><p>测试：</p><p>网段： 194.2.3.0/24 —— 分配給不同的部门（4个部门）</p><table><thead><tr><th>部门</th><th>人数</th><th>地址</th></tr></thead><tbody><tr><td>项目部</td><td>58人</td><td>地址:194.2.3.128/26</td></tr><tr><td>研发部</td><td>100人</td><td>地址:194.2.3.0/25</td></tr><tr><td>市场部</td><td>27人</td><td>地址:194.2.3.128/27</td></tr><tr><td>财务部</td><td>15人</td><td>地址:194.2.3.224/27</td></tr></tbody></table><p>分配原则：</p><ul><li>1、先求最大值，先求一个子网，该子网满足数量最多的情况</li><li>2、一旦分配出去的地址，不能再给别人使用</li></ul><p>前半部分给研发部：</p><p>2^x-2&gt;=100 x=7=主机位</p><hr><p>1100 0100.0000 0010.0000 0011.<code>0</code>000 0000</p><p>194.2.3.0/25（194.2.3.0-194.2.3.127）研发部（126个可用IP）</p><hr><p>1100 0100.0000 0010.0000 0011.1<code>0</code>00 0000</p><p>194.2.3.128/26: 194.2.3.128 - 194.2.3.191 (项目部:62个可用IP)</p><hr><p>1100 0100.0000 0010.0000 0011.11<code>0</code>0 0000</p><p>194.2.3.128/27: 194.2.3.192 - 194.2.3.223 (市场部：30个可用IP)</p><hr><p>1100 0100.0000 0010.0000 0011.11<code>1</code>0 0000</p><p>194.2.3.224/27: 194.2.3.224 - 194.2.3.255 (财务部：30个可用IP)</p><hr><blockquote><p>CIDR——无类域间路由</p></blockquote><p>将多个小的子网，用一个相对更大的地址范围进行概括，以此来实现表项优化 CIDR增加了网络的可扩展性。</p><p>10.1.0.0/24 10.1.1.0/24 10.1.2.0/24 10.1.3.0/24</p><p>1、将子网转换为2进制： 0000 1010.0000 0001.0000 0000.0000 0000 ------ 10.1.0.0</p><p>0000 1010.0000 0001.0000 0001.0000 0000 ------ 10.1.1.0</p><p>0000 1010.0000 0001.0000 0010.0000 0000 ------ 10.1.2.0</p><p>0000 1010.0000 0001.0000 0011.0000 0000 ------ 10.1.3.0 2、自高位向低位进行对比，位数相同原封不动取值，一旦不同，停止对比行为，后方全部取值为0，即便后面还有相同位数。</p><p>0000 1010.0000 0001.0000 0000.0000 0000 ------ 10.1.0.0</p><p>0000 1010.0000 0001.0000 0001.0000 0000 ------ 10.1.1.0</p><p>0000 1010.0000 0001.0000 0010.0000 0000 ------ 10.1.2.0</p><p>0000 1010.0000 0001.0000 0011.0000 0000 ------ 10.1.3.0</p><p><code>0000 1010.0000 0001.0000 00</code>00.0000 0000</p><p>3、将相同位数取值完毕，转换为十进制，将相同位数取值为掩码缩写的前缀</p><p><code>0000 1010.0000 0001.0000 00</code>00.0000 0000 --- 10.1.0.0/22 -&gt; 255.255.252.0</p><p>4、测试，再加一个网段</p><p>10.1.0.0/24 10.1.1.0/24 10.1.2.0/24 10.1.3.0/24 10.1.4.0/24</p><p><code>0000 1010.0000 0001.0000 0000</code>.0000 0000 ------ 10.1.0.0</p><p>0000 1010.0000 0001.0000 0001.0000 0000 ------ 10.1.1.0</p><p>0000 1010.0000 0001.0000 0010.0000 0000 ------ 10.1.2.0</p><p>0000 1010.0000 0001.0000 0011.0000 0000 ------ 10.1.3.0</p><p>0000 1010.0000 0001.0000 0100.0000 0000 ------ 10.1.4.0</p><p><code>0000 1010.0000 0001.0000 0</code>000.0000 0000 ---- 10.1.0.0/21 ---- 网络地址</p><p><code>0000 1010.0000 0001.0000 0</code>111.1111 1111 ---- 10.1.7.255/21 ---- 广播地址</p><p>可用地址范围： 10.1.0.1 --- 10.1.7.254</p><p>最优：</p><p>10.1.1.0/22 --- 上边四条 10.1.4.0/24 --- 最下面一条</p><blockquote><p>CIDR和VLSM区别</p></blockquote><p>CIDR 是主机号向网络号借位，目的是把几个网络汇总成一个大的网络，增加子网主机数量；</p><p>VLSM 是网络号向主机号借位，目的是把一个标准的网络划分成几个子网，减少子网主机数量。</p><p>VLSM是在私网（内网）内优化网络划分，CIDR是在路由器进行对外路由通告时用到，二者不冲突。</p><blockquote><p>公网和私网</p></blockquote><p>IP 地址分为公网地址和私有地址。公网地址是在互联网上使用的，私有地址是在局域网中使用的。 公网地址由 Internet NIC 负责分配，通过它直接访问互联网</p><blockquote><p>网关</p></blockquote><p>同网段通信时是可以直接通信的。 跨网段通信时是不可以直接通信的。</p><p>192.168.1.1/25 ------ping通------- 192.168.1.2/26</p><p>0000 0001</p><p>1000 0000</p><p>1000 0000</p><p>可以发包，也可以收到包</p><p>1、通信时，发送端的主机会使用对方的IP地址+自己的掩码进行计算，算出对方的网络地址 2、计算之后，将对方的网络地址和自己的网络地址进行对比，相同，则认为在同一个网段，不相同，则不在同一个网段，返回段也是。</p><p>192.168.1.1/25 ---------ping不通------ 192.168.1.5/30 可以发包，收不到包</p><p>网关用来转发来自不通网段之间的数据包。网关设备上连接本地网段的接口地址即为 <em><strong>该网段的网关地址</strong></em>。当前网络设备的下一跳地址。</p><p><em><strong>网关地址</strong></em>是一个配置在某个设备接口上的地址。</p><p><em><strong>网关设备</strong></em>可以是路由器，三层交换机，防火墙。</p><blockquote><p>ICMP协议</p></blockquote><p>ICMP一般被称为3.5层协议，归类于网络层协议，但封装IP Header之上，protocol = 1</p><p>ICMP应用：</p><ul><li>ping</li><li>tracert</li></ul><blockquote><p>ARP协议</p></blockquote><p>广播域：广播报文 交换机所有端口在同一个广播域（不划分VLAN） 路由器一个接口是一个广播域</p><p>DARP和定向ARP</p><p>ARP代理 免费ARP</p><h3 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h3><p>连接：正式发送数据前需要进行握手(一种虚拟的”点到点“的连接=单播的模式)</p><p>三次握手建立连接：</p><ul><li>-&gt; (SYN,ACK,seq=a)</li><li>&lt;- (SYN,ACK,seq=b,ack=a+1)</li><li>-&gt; (ACK,seq=a+1,ack=b+1)</li></ul><p>四次挥手关闭连接：</p><p>数据全部发送完毕，才能断开连接</p><ul><li>-&gt; (FIN,ACK,seq=a,ack=b)</li><li>&lt;- (ACK,seq=b,ack=a+1)</li><li>&lt;- (FIN,ACK,seq=b,ack=a+1)</li><li>-&gt; (ACK,seq=a+1,ack=b+1)</li></ul><p>确认机制</p><ul><li>通过报文标志位确认</li></ul><p>有序机制</p><ul><li><p>提前分片排序 重传机制：</p></li><li><p>确认重传</p></li><li><p>超时重传 （RTTS 加权的平均往返时间）</p></li></ul><p>流量控制：TCP协议中的Window控制，滑动窗口算法</p><hr><p>E2 | IPV4 | TCP | HTTP</p><hr><p><em><strong>MTU</strong></em>是数据链路层的<em><strong>最大传输单元</strong></em>，默认最大1500字节，可修改</p><p><em><strong>MSS</strong></em>是应用层的<em><strong>最大报文段长度</strong></em>，默认默认1460字节，可修改</p><p>ipv4头部最小20个字节，tcp头部最小20个字节，所以1500 - （3，4层头部头部长度） = 1460</p><blockquote><p>UDP</p></blockquote><p>使用UDP传输数据时，由应用程序根据需要提供报文到达确认、排序、流量控制等功能</p>',126),l=[c];function r(h,s){return t(),d("div",null,l)}const n=p(o,[["render",r],["__file","ip-vlsm.html.vue"]]);export{n as default};