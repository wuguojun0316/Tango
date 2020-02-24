# Tango
It's a test project, nothing to show!
###赠卫十八子
#####人生不相见，动如参与商；
#####今夕复何夕，共次灯烛光。
#####少壮能几何，鬓发各已苍；
#####访旧半未鬼，惊呼热中肠。
####塞下曲
#####月黑雁飞高，单于爷遁逃，
#####欲将轻骑逐，大雪满弓刀。
### Git使用方法
Git和其他版本控制系统如SVN的一个不同之处就是暂存区的概念；
##### 工作区(Working Directory)
项目所在电脑的所能看到的目录和文件；
##### 版本库(Repository)
在工作区所根目录，有一个隐藏的目录<code>.git</code>，此目录不算工作区，而是Git的版本库；
Git的版本库里存储了很多东西，其中最重要的就是成为stage(或者叫index)的暂存区，还有Git自动创建的第一个分支<code>master</code>，以及指向<code>master</code>的一个指针<code style="color: red">HEAD</code>。
<br/>
把文件往Git版本库添加的时候，是分两步执行的：
第一步: 是用<code>git add</code>把文件添加进去，实际上就是把文件修改添加到暂存区;
<br/>
第二部: 是用<code>git commit</code>体检更改，实际上就是把暂存区的所有内容提交到当前分支;
##### 撤销修改
Git管理的是文件修改，而不是文件；
##### 创建feature分支
修改分支数据；