import { defineConfig } from 'vitepress'

// ─────────────────────────────────────────────
// 模块元数据：单一数据源，navbar / sidebar 共用
// ─────────────────────────────────────────────
const MODULES = [
  { id: 'm1-cpp',      label: 'M1 · C++ 基础',      desc: '竞赛环境 · 语言核心 · STL 实战' },
  { id: 'm2-search',   label: 'M2 · 暴力与搜索',    desc: '枚举 · DFS · BFS · 剪枝' },
  { id: 'm3-paradigm', label: 'M3 · 算法范式',      desc: '二分 · 分治 · 倍增 · 单调结构' },
  { id: 'm4-dp',       label: 'M4 · 动态规划',      desc: '线性 · 背包 · 区间 · 树形 · 优化' },
  { id: 'm5-ds',       label: 'M5 · 数据结构',      desc: '线段树 · 树状数组 · 堆 · 并查集' },
  { id: 'm6-graph',    label: 'M6 · 图论',          desc: '最短路 · 生成树 · 网络流 · SCC' },
  { id: 'm7-math',     label: 'M7 · 数学',          desc: '数论 · 计数组合 · 概率 · 博弈' },
  { id: 'm8-string',   label: 'M8 · 字符串',        desc: 'KMP · AC 自动机 · 后缀数组 · SAM' },
]

// ─────────────────────────────────────────────
// 顶部导航栏
// 职责：全局区域切换，用户始终可见
// 分组：学习路径 | 知识模块 | 问题图谱 | 关于
// ─────────────────────────────────────────────
const nav = [
  {
    text: '学习路径',
    items: [
      { text: '入门选手路线（CSP-J）', link: '/path/junior' },
      { text: '提高选手路线（NOIP）',  link: '/path/senior' },
      { text: '冲刺 NOI 路线',         link: '/path/noi' },
      { text: '─────────────', link: '' },
      { text: '如何使用本站',           link: '/path/howto' },
    ],
  },
  {
    text: '知识模块',
    items: [
      // M1~M8：知识视角
      ...MODULES.map(m => ({
        text: m.label,
        link: `/docs/${m.id}/`,
      })),
    ],
  },
  {
    text: '问题图谱',
    link: '/docs/m9-patterns/',
  },
  {
    text: '关于',
    items: [
      { text: '项目哲学',   link: '/about/philosophy' },
      { text: '贡献指南',   link: '/about/contributing' },
      { text: '更新日志',   link: '/about/changelog' },
    ],
  },
]

// ─────────────────────────────────────────────
// 侧边栏工厂函数
// 职责：模块内部的五层认知结构导航
// 原则：进入哪个模块，只显示该模块的侧边栏
// ─────────────────────────────────────────────

function sidebarM1() {
  return [
    {
      text: 'M1 · C++ 基础',
      items: [{ text: '模块导览', link: '/docs/m1-cpp/' }],
    },
    {
      text: '竞赛环境层',
      collapsed: false,
      items: [
        { text: 'Linux 基本操作', link: '/docs/m1-cpp/linux-basics' },
        { text: 'g++ 编译与调试', link: '/docs/m1-cpp/compile-debug' },
        { text: '评测环境配置',   link: '/docs/m1-cpp/judge-env' },
      ],
    },
    {
      text: '语言核心层',
      collapsed: false,
      items: [
        { text: '数据类型与运算',     link: '/docs/m1-cpp/types-ops' },
        { text: '控制流',             link: '/docs/m1-cpp/control-flow' },
        { text: '函数与递归',         link: '/docs/m1-cpp/functions' },
        { text: '数组与字符串',       link: '/docs/m1-cpp/arrays-strings' },
        { text: '指针与引用',         link: '/docs/m1-cpp/pointers' },
        { text: '结构体',             link: '/docs/m1-cpp/structs' },
      ],
    },
    {
      text: 'STL 实战层',
      collapsed: false,
      items: [
        { text: 'vector / array',      link: '/docs/m1-cpp/stl-vector' },
        { text: 'stack / queue / deque', link: '/docs/m1-cpp/stl-stack-queue' },
        { text: 'set / map',           link: '/docs/m1-cpp/stl-set-map' },
        { text: 'priority_queue',      link: '/docs/m1-cpp/stl-pq' },
        { text: '常用算法模板',        link: '/docs/m1-cpp/stl-algorithms' },
      ],
    },
    {
      text: '图谱层',
      items: [{ text: 'M1 知识坐标', link: '/docs/m1-cpp/map' }],
    },
  ]
}

function sidebarM2() {
  return [
    {
      text: 'M2 · 暴力与搜索',
      items: [{ text: '模块导览', link: '/docs/m2-search/' }],
    },
    {
      text: '直觉层',
      collapsed: false,
      items: [
        { text: '为什么先学暴力',     link: '/docs/m2-search/why-brute-force' },
        { text: '状态空间的心智模型', link: '/docs/m2-search/state-space' },
      ],
    },
    {
      text: '推导层',
      collapsed: false,
      items: [
        { text: '枚举法',         link: '/docs/m2-search/enumeration' },
        { text: '模拟法',         link: '/docs/m2-search/simulation' },
        { text: 'DFS',            link: '/docs/m2-search/dfs' },
        { text: 'BFS',            link: '/docs/m2-search/bfs' },
        { text: '回溯',           link: '/docs/m2-search/backtracking' },
        { text: '剪枝优化',       link: '/docs/m2-search/pruning' },
        { text: '记忆化搜索',     link: '/docs/m2-search/memo-search' },
        { text: '双向 BFS',       link: '/docs/m2-search/bidirectional-bfs' },
        { text: '迭代加深',       link: '/docs/m2-search/iddfs' },
      ],
    },
    {
      text: '实战层',
      collapsed: false,
      items: [
        { text: 'DFS 实战',   link: '/docs/m2-search/dfs-practice' },
        { text: 'BFS 实战',   link: '/docs/m2-search/bfs-practice' },
        { text: '回溯实战',   link: '/docs/m2-search/backtracking-practice' },
      ],
    },
    {
      text: '图谱层',
      items: [{ text: 'M2 知识坐标', link: '/docs/m2-search/map' }],
    },
  ]
}

function sidebarM3() {
  return [
    {
      text: 'M3 · 算法范式',
      items: [{ text: '模块导览', link: '/docs/m3-paradigm/' }],
    },
    {
      text: '直觉层',
      collapsed: false,
      items: [
        { text: '什么是算法范式',     link: '/docs/m3-paradigm/what-is-paradigm' },
        { text: '降低规模的思维方式', link: '/docs/m3-paradigm/reduce-scale' },
      ],
    },
    {
      text: '推导层',
      collapsed: false,
      items: [
        { text: '前缀和与差分',   link: '/docs/m3-paradigm/prefix-sum' },
        { text: '二分法',         link: '/docs/m3-paradigm/binary-search' },
        { text: '双指针',         link: '/docs/m3-paradigm/two-pointers' },
        { text: '单调栈',         link: '/docs/m3-paradigm/monotone-stack' },
        { text: '单调队列',       link: '/docs/m3-paradigm/monotone-queue' },
        { text: '分治',           link: '/docs/m3-paradigm/divide-conquer' },
        { text: '倍增',           link: '/docs/m3-paradigm/binary-lifting' },
        { text: '离散化',         link: '/docs/m3-paradigm/discretization' },
        { text: '扫描线',         link: '/docs/m3-paradigm/sweep-line' },
      ],
    },
    {
      text: '实战层',
      collapsed: true,
      items: [
        { text: '二分实战',       link: '/docs/m3-paradigm/binary-search-practice' },
        { text: '单调结构实战',   link: '/docs/m3-paradigm/monotone-practice' },
        { text: '扫描线实战',     link: '/docs/m3-paradigm/sweep-practice' },
      ],
    },
    {
      text: '图谱层',
      items: [{ text: 'M3 知识坐标', link: '/docs/m3-paradigm/map' }],
    },
  ]
}

function sidebarM4() {
  return [
    {
      text: 'M4 · 动态规划',
      items: [{ text: '模块导览', link: '/docs/m4-dp/' }],
    },
    {
      text: '直觉层',
      collapsed: false,
      items: [
        { text: '什么是动态规划',     link: '/docs/m4-dp/what-is-dp' },
        { text: 'DP 的心智模型',      link: '/docs/m4-dp/dp-mental-model' },
      ],
    },
    {
      text: '推导层',
      collapsed: false,
      items: [
        { text: '线性 DP',     link: '/docs/m4-dp/linear-dp' },
        { text: '背包问题',    link: '/docs/m4-dp/knapsack' },
        { text: '区间 DP',     link: '/docs/m4-dp/interval-dp' },
        { text: '树形 DP',     link: '/docs/m4-dp/tree-dp' },
        { text: '状压 DP',     link: '/docs/m4-dp/bitmask-dp' },
        { text: '数位 DP',     link: '/docs/m4-dp/digit-dp' },
        { text: '计数 DP',     link: '/docs/m4-dp/counting-dp' },
        { text: 'DP 优化概览', link: '/docs/m4-dp/dp-optimization' },
      ],
    },
    {
      text: '实战层',
      collapsed: true,
      items: [
        { text: '线性 DP 实战', link: '/docs/m4-dp/linear-dp-practice' },
        { text: '背包实战',      link: '/docs/m4-dp/knapsack-practice' },
        { text: '区间 DP 实战',  link: '/docs/m4-dp/interval-dp-practice' },
        { text: '树形 DP 实战',  link: '/docs/m4-dp/tree-dp-practice' },
        { text: '状压 DP 实战',  link: '/docs/m4-dp/bitmask-dp-practice' },
      ],
    },
    {
      text: '图谱层',
      items: [{ text: 'M4 知识坐标', link: '/docs/m4-dp/map' }],
    },
  ]
}

function sidebarM5() {
  return [
    {
      text: 'M5 · 数据结构',
      items: [{ text: '模块导览', link: '/docs/m5-ds/' }],
    },
    {
      text: '直觉层',
      collapsed: false,
      items: [
        { text: '为什么需要这些结构',     link: '/docs/m5-ds/why-ds' },
        { text: '选容器的思维框架',       link: '/docs/m5-ds/how-to-choose' },
      ],
    },
    {
      text: '推导层 · 入门级',
      collapsed: false,
      items: [
        { text: '栈与队列',     link: '/docs/m5-ds/stack-queue' },
        { text: '链表',         link: '/docs/m5-ds/linked-list' },
        { text: '二叉树基础',   link: '/docs/m5-ds/binary-tree' },
        { text: '堆',           link: '/docs/m5-ds/heap' },
      ],
    },
    {
      text: '推导层 · 提高级',
      collapsed: false,
      items: [
        { text: '并查集',       link: '/docs/m5-ds/union-find' },
        { text: '树状数组',     link: '/docs/m5-ds/bit' },
        { text: '线段树',       link: '/docs/m5-ds/segment-tree' },
        { text: 'Trie 字典树',  link: '/docs/m5-ds/trie' },
        { text: '哈希表',       link: '/docs/m5-ds/hash-table' },
        { text: '平衡树',       link: '/docs/m5-ds/balanced-tree' },
      ],
    },
    {
      text: '推导层 · NOI 级',
      collapsed: true,
      items: [
        { text: '树链剖分',         link: '/docs/m5-ds/hld' },
        { text: '可持久化线段树',   link: '/docs/m5-ds/persistent-seg' },
        { text: 'LCT',             link: '/docs/m5-ds/lct' },
        { text: 'k-d 树',          link: '/docs/m5-ds/kd-tree' },
      ],
    },
    {
      text: '实战层',
      collapsed: true,
      items: [
        { text: '线段树实战', link: '/docs/m5-ds/segment-tree-practice' },
        { text: '并查集实战', link: '/docs/m5-ds/union-find-practice' },
      ],
    },
    {
      text: '图谱层',
      items: [{ text: 'M5 知识坐标', link: '/docs/m5-ds/map' }],
    },
  ]
}

function sidebarM6() {
  return [
    {
      text: 'M6 · 图论',
      items: [{ text: '模块导览', link: '/docs/m6-graph/' }],
    },
    {
      text: '直觉层',
      collapsed: false,
      items: [
        { text: '图是什么问题的自然语言', link: '/docs/m6-graph/what-is-graph' },
        { text: '图的表示与存储',         link: '/docs/m6-graph/representation' },
      ],
    },
    {
      text: '推导层 · 入门级',
      collapsed: false,
      items: [
        { text: '图的遍历（DFS/BFS）', link: '/docs/m6-graph/traversal' },
        { text: 'Flood Fill',          link: '/docs/m6-graph/flood-fill' },
      ],
    },
    {
      text: '推导层 · 提高级',
      collapsed: false,
      items: [
        { text: '最短路（Dijkstra）',  link: '/docs/m6-graph/dijkstra' },
        { text: '最短路（Bellman-Ford / SPFA）', link: '/docs/m6-graph/bellman-ford' },
        { text: '全源最短路（Floyd）', link: '/docs/m6-graph/floyd' },
        { text: '最小生成树',          link: '/docs/m6-graph/mst' },
        { text: '拓扑排序',            link: '/docs/m6-graph/topological-sort' },
        { text: '强连通分量（SCC）',   link: '/docs/m6-graph/scc' },
        { text: '割点与割边',          link: '/docs/m6-graph/cut' },
        { text: '二分图',              link: '/docs/m6-graph/bipartite' },
        { text: '最近公共祖先（LCA）', link: '/docs/m6-graph/lca' },
        { text: '树上差分与倍增',      link: '/docs/m6-graph/tree-techniques' },
      ],
    },
    {
      text: '推导层 · NOI 级',
      collapsed: true,
      items: [
        { text: '网络流',   link: '/docs/m6-graph/network-flow' },
        { text: '2-SAT',   link: '/docs/m6-graph/2-sat' },
        { text: '基环树',  link: '/docs/m6-graph/functional-graph' },
        { text: '匈牙利算法', link: '/docs/m6-graph/hungarian' },
      ],
    },
    {
      text: '实战层',
      collapsed: true,
      items: [
        { text: '最短路实战', link: '/docs/m6-graph/shortest-path-practice' },
        { text: 'SCC 实战',   link: '/docs/m6-graph/scc-practice' },
        { text: 'LCA 实战',   link: '/docs/m6-graph/lca-practice' },
      ],
    },
    {
      text: '图谱层',
      items: [{ text: 'M6 知识坐标', link: '/docs/m6-graph/map' }],
    },
  ]
}

function sidebarM7() {
  return [
    {
      text: 'M7 · 数学',
      items: [{ text: '模块导览', link: '/docs/m7-math/' }],
    },
    {
      text: '数论',
      collapsed: false,
      items: [
        { text: '整除与因数',         link: '/docs/m7-math/divisibility' },
        { text: '质数与筛法',         link: '/docs/m7-math/primes' },
        { text: '模运算',             link: '/docs/m7-math/modular-arithmetic' },
        { text: '欧拉定理与欧拉函数', link: '/docs/m7-math/euler-theorem' },
        { text: '逆元',               link: '/docs/m7-math/modular-inverse' },
        { text: '扩展欧几里得',       link: '/docs/m7-math/ext-gcd' },
        { text: '中国剩余定理',       link: '/docs/m7-math/crt' },
      ],
    },
    {
      text: '计数与组合',
      collapsed: false,
      items: [
        { text: '加法与乘法原理',     link: '/docs/m7-math/counting-principles' },
        { text: '排列与组合',         link: '/docs/m7-math/permutation-combination' },
        { text: '二项式定理',         link: '/docs/m7-math/binomial-theorem' },
        { text: '容斥原理',           link: '/docs/m7-math/inclusion-exclusion' },
        { text: 'Catalan 数',         link: '/docs/m7-math/catalan' },
        { text: '莫比乌斯反演',       link: '/docs/m7-math/mobius' },
      ],
    },
    {
      text: '线性代数与概率',
      collapsed: true,
      items: [
        { text: '矩阵运算',           link: '/docs/m7-math/matrix' },
        { text: '矩阵快速幂',         link: '/docs/m7-math/matrix-exponentiation' },
        { text: '高斯消元',           link: '/docs/m7-math/gaussian-elimination' },
        { text: '概率基础',           link: '/docs/m7-math/probability' },
        { text: '期望',               link: '/docs/m7-math/expectation' },
      ],
    },
    {
      text: '专项',
      collapsed: true,
      items: [
        { text: '博弈论（Nim / SG）', link: '/docs/m7-math/game-theory' },
        { text: '计算几何基础',       link: '/docs/m7-math/computational-geometry' },
        { text: '多项式与 FFT',       link: '/docs/m7-math/fft' },
      ],
    },
    {
      text: '图谱层',
      items: [{ text: 'M7 知识坐标', link: '/docs/m7-math/map' }],
    },
  ]
}

function sidebarM8() {
  return [
    {
      text: 'M8 · 字符串',
      items: [{ text: '模块导览', link: '/docs/m8-string/' }],
    },
    {
      text: '直觉层',
      collapsed: false,
      items: [
        { text: '字符串问题的形状',   link: '/docs/m8-string/what-is-string-problem' },
        { text: '从暴力匹配到 KMP',   link: '/docs/m8-string/from-naive-to-kmp' },
      ],
    },
    {
      text: '推导层',
      collapsed: false,
      items: [
        { text: 'KMP 算法',           link: '/docs/m8-string/kmp' },
        { text: 'Manacher 算法',      link: '/docs/m8-string/manacher' },
        { text: '字符串哈希',         link: '/docs/m8-string/string-hash' },
        { text: 'Trie 字典树',        link: '/docs/m8-string/trie' },
        { text: 'AC 自动机',          link: '/docs/m8-string/aho-corasick' },
        { text: '后缀数组（SA）',     link: '/docs/m8-string/suffix-array' },
        { text: '后缀自动机（SAM）',  link: '/docs/m8-string/sam' },
      ],
    },
    {
      text: '实战层',
      collapsed: true,
      items: [
        { text: 'KMP 实战',       link: '/docs/m8-string/kmp-practice' },
        { text: 'AC 自动机实战',  link: '/docs/m8-string/aho-corasick-practice' },
        { text: '后缀数组实战',   link: '/docs/m8-string/suffix-array-practice' },
      ],
    },
    {
      text: '图谱层',
      items: [{ text: 'M8 知识坐标', link: '/docs/m8-string/map' }],
    },
  ]
}

function sidebarM9() {
  return [
    {
      text: 'M9 · 问题类型图谱',
      items: [{ text: '如何使用图谱', link: '/docs/m9-patterns/' }],
    },
    {
      text: '图与连通性',
      collapsed: false,
      items: [
        { text: '连通块',       link: '/docs/m9-patterns/connected-components' },
        { text: '强连通分量',   link: '/docs/m9-patterns/scc-problem' },
        { text: '割点与桥',     link: '/docs/m9-patterns/cut-problem' },
        { text: '二分图',       link: '/docs/m9-patterns/bipartite-problem' },
      ],
    },
    {
      text: '路径与距离',
      collapsed: false,
      items: [
        { text: '单源最短路',   link: '/docs/m9-patterns/sssp' },
        { text: '全源最短路',   link: '/docs/m9-patterns/apsp' },
        { text: '树上路径',     link: '/docs/m9-patterns/tree-path' },
        { text: '次短路',       link: '/docs/m9-patterns/second-shortest' },
      ],
    },
    {
      text: '子集与选择',
      collapsed: false,
      items: [
        { text: '背包问题族',   link: '/docs/m9-patterns/knapsack-family' },
        { text: '区间选择',     link: '/docs/m9-patterns/interval-selection' },
        { text: '序列划分',     link: '/docs/m9-patterns/sequence-partition' },
      ],
    },
    {
      text: '区间查询',
      collapsed: false,
      items: [
        { text: '区间最值（RMQ）', link: '/docs/m9-patterns/rmq' },
        { text: '区间和查询与修改', link: '/docs/m9-patterns/range-sum' },
        { text: '区间合并',         link: '/docs/m9-patterns/interval-merge' },
      ],
    },
    {
      text: '树上问题',
      collapsed: false,
      items: [
        { text: '树的直径与重心', link: '/docs/m9-patterns/tree-diameter' },
        { text: 'LCA 问题',       link: '/docs/m9-patterns/lca-problem' },
        { text: '树上背包',       link: '/docs/m9-patterns/tree-knapsack' },
      ],
    },
    {
      text: '匹配与覆盖',
      collapsed: true,
      items: [
        { text: '二分图最大匹配', link: '/docs/m9-patterns/bipartite-matching' },
        { text: '最小顶点覆盖',   link: '/docs/m9-patterns/vertex-cover' },
      ],
    },
    {
      text: '流与割',
      collapsed: true,
      items: [
        { text: '最大流最小割', link: '/docs/m9-patterns/max-flow' },
        { text: '费用流',       link: '/docs/m9-patterns/min-cost-flow' },
      ],
    },
    {
      text: '排列与计数',
      collapsed: true,
      items: [
        { text: '排列计数',       link: '/docs/m9-patterns/permutation-counting' },
        { text: '组合计数',       link: '/docs/m9-patterns/combination-counting' },
        { text: '方案数 mod p',   link: '/docs/m9-patterns/counting-mod' },
      ],
    },
  ]
}

function sidebarPath() {
  return [
    {
      text: '学习路径',
      items: [{ text: '如何使用本站', link: '/path/howto' }],
    },
    {
      text: '入门选手（CSP-J）',
      collapsed: false,
      items: [
        { text: '路线总览',         link: '/path/junior' },
        { text: '第 1 阶段：语言基础',   link: '/path/junior/stage-1' },
        { text: '第 2 阶段：基础算法',   link: '/path/junior/stage-2' },
        { text: '第 3 阶段：数据结构',   link: '/path/junior/stage-3' },
        { text: '第 4 阶段：搜索与枚举', link: '/path/junior/stage-4' },
      ],
    },
    {
      text: '提高选手（NOIP）',
      collapsed: false,
      items: [
        { text: '路线总览',     link: '/path/senior' },
        { text: '前置检查清单', link: '/path/senior/checklist' },
        { text: '图论专项',     link: '/path/senior/graph' },
        { text: 'DP 专项',      link: '/path/senior/dp' },
        { text: '数据结构专项', link: '/path/senior/ds' },
      ],
    },
    {
      text: '冲刺 NOI',
      collapsed: true,
      items: [
        { text: '路线总览',         link: '/path/noi' },
        { text: 'NOI 级知识点攻坚', link: '/path/noi/advanced' },
        { text: '历年真题分析',     link: '/path/noi/problems' },
      ],
    },
  ]
}

function sidebarAbout() {
  return [
    {
      text: '关于',
      items: [
        { text: '项目哲学',   link: '/about/philosophy' },
        { text: '贡献指南',   link: '/about/contributing' },
        { text: '更新日志',   link: '/about/changelog' },
      ],
    },
  ]
}

// ─────────────────────────────────────────────
// 侧边栏路由映射
// 规则：进入哪个路径前缀，显示对应侧边栏
// ─────────────────────────────────────────────
const sidebar = {
  '/docs/m1-cpp/':      sidebarM1(),
  '/docs/m2-search/':   sidebarM2(),
  '/docs/m3-paradigm/': sidebarM3(),
  '/docs/m4-dp/':       sidebarM4(),
  '/docs/m5-ds/':       sidebarM5(),
  '/docs/m6-graph/':    sidebarM6(),
  '/docs/m7-math/':     sidebarM7(),
  '/docs/m8-string/':   sidebarM8(),
  '/docs/m9-patterns/': sidebarM9(),
  '/path/':             sidebarPath(),
  '/about/':            sidebarAbout(),
}

// ─────────────────────────────────────────────
// 主配置
// ─────────────────────────────────────────────
export default defineConfig({
  lang: 'zh-CN',
  title: 'NOI Learning OS',
  description: '不只是题解库，是算法思维的基础设施',

  // GitHub Pages 部署路径
  base: '/LesBeta-learn/',

  // docs/ 作为 VitePress 根目录，_drafts / _templates 等不发布
  srcExclude: ['_drafts/**', '_templates/**', '_assets/**', '_journal/**'],

  // URL 方案：扁平结构 /docs/m4-dp/dijkstra
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/LesBeta-learn/favicon.ico' }],
  ],

  themeConfig: {
    // 品牌标识
    logo: '/logo.svg',
    siteTitle: 'neo code',

    nav,
    sidebar,

    // 顶部导航右侧
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/noi-learning-os' },
    ],

    // 页内目录：显示到 h3，与文档骨架（A~E 区的 ## 标题）对应
    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    // 文档底部：上一篇 / 下一篇
    // 由 module_position 和 frontmatter 的 prev/next 字段驱动
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    // 本地搜索：不依赖第三方服务，支持中文
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '没有找到相关结果',
                resetButtonTitle: '清除搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },

    // 页脚
    footer: {
      message: '基于 CC BY-NC-SA 4.0 协议发布',
      copyright: 'NOI Learning OS · 开源课程项目',
    },

    // 编辑链接（指向 GitHub 源文件）
    editLink: {
      pattern: 'https://github.com/your-org/noi-learning-os/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'short' },
    },
  },

  // Markdown 配置
  markdown: {
    // 代码块行号
    lineNumbers: true,
    // 数学公式支持（需要安装 markdown-it-mathjax3）
    math: true,
    // 代码块主题
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
})
