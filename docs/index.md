---
title: 首页
hide:
  - navigation
  - toc
---

<div class="landing-page">
  <section class="landing-hero">
    <div class="landing-eyebrow">Lao Deng's Truancy Log</div>
    <h1>把计算机学习过程，整理成一座可以慢慢走进去的知识网站。</h1>
    <p class="landing-lead">
      这里收集我对数据结构、操作系统、计算机组成原理和 OOAD 的长期学习笔记。
      我希望它不只是资料仓库，而是一条清晰、克制、能被反复回看的学习路径。
    </p>
    <div class="landing-actions">
      <a class="landing-button landing-button--primary" href="#study-map">开始阅读</a>
      <a class="landing-button" href="#featured-notes">精选内容</a>
      <a class="landing-button" href="https://github.com/Bushiganyuanzuohuaizi/Bushiganyuanzuohuaizi.github.io">访问仓库</a>
      <a class="landing-button" href="elsewhere/">站外联动</a>
    </div>
    <div class="landing-meta">
      <span>40+ 篇已整理笔记</span>
      <span>覆盖四门核心基础课</span>
      <span>持续更新中</span>
      <span>给我个星标吧家人们</span>
    </div>
  </section>

  <section class="landing-section" id="study-map">
    <div class="landing-section__header">
      <p class="landing-kicker">Study Map</p>
      <h2>从四条主线进入，而不是从杂乱目录开始。</h2>
      <p>
        我把站点内容按学习路径重新组织。你可以从算法打基础，再进入操作系统和组成原理，
        最后把设计与建模能力补齐。
      </p>
    </div>

    <div class="landing-grid">
      <a class="landing-card" href="ds-algorithm/">
        <p class="landing-card__index">01</p>
        <h3>数据结构与算法</h3>
        <p>从 C++ 基础、双指针、DFS/BFS 到算法专题，适合打底和训练题感。</p>
      </a>

      <a class="landing-card" href="os/">
        <p class="landing-card__index">02</p>
        <h3>操作系统</h3>
        <p>围绕进程、并发、内存管理、TLB 和磁盘 I/O，建立系统视角。</p>
      </a>

      <a class="landing-card" href="computer-architecture/">
        <p class="landing-card__index">03</p>
        <h3>计算机组成原理</h3>
        <p>从总线、缓存、流水线到 GPU，补上硬件层面的理解框架。</p>
      </a>

      <a class="landing-card" href="ooad/">
        <p class="landing-card__index">04</p>
        <h3>OOAD</h3>
        <p>把面向对象分析与设计中的关系、分层、包和威胁建模串联起来。</p>
      </a>
    </div>
  </section>

  <section class="landing-section landing-section--alternate" id="featured-notes">
    <div class="landing-section__header">
      <p class="landing-kicker">Featured Notes</p>
      <h2>如果你想快速判断这个站值不值得看，可以先从这些开始。</h2>
    </div>

    <div class="landing-feature-list">
      <a class="landing-feature" href="os/concurrency/">
        <span class="landing-feature__label">Operating System</span>
        <strong>并发 Concurrency</strong>
        <p>从概念、问题到实现方式，适合作为理解操作系统的入口章节之一。</p>
      </a>

      <a class="landing-feature" href="ds-algorithm/DoublePointer/">
        <span class="landing-feature__label">Data Structures</span>
        <strong>Double Pointer</strong>
        <p>双指针是很多题型的关键技巧，这部分内容适合用来快速建立方法感。</p>
      </a>

      <a class="landing-feature" href="computer-architecture/cache/">
        <span class="landing-feature__label">Architecture</span>
        <strong>缓存 Cache</strong>
        <p>把性能、层次结构和现实实现联系起来，是组成原理里非常核心的一章。</p>
      </a>

      <a class="landing-feature" href="ooad/threatModeling/">
        <span class="landing-feature__label">OOAD</span>
        <strong>Threat Modeling</strong>
        <p>从设计视角切入风险识别，让建模不只是画图，而是面向真实系统问题。</p>
      </a>
    </div>
  </section>

  <section class="landing-section landing-section--narrow" id="philosophy">
    <div class="landing-quote">
      <p class="landing-kicker">Why This Site Exists</p>
      <h2>最好的理解方式之一，是把复杂内容重新讲清楚。</h2>
      <p>
        这个站点记录的是我的长期学习过程，也希望给同样在自学计算机基础的人，
        提供一个更安静、更连续、更有结构的阅读入口。
      </p>
    </div>
  </section>

  <section class="landing-section landing-section--cta">
    <div class="landing-cta">
      <div>
        <p class="landing-kicker">Start Here</p>
        <h2>按路径看，效率通常比按目录翻更高。</h2>
        <p>建议从数据结构与算法开始，再进入操作系统，最后补组成原理与 OOAD。</p>
      </div>
      <div class="landing-actions landing-actions--stacked">
        <a class="landing-button landing-button--primary" href="ds-algorithm/">进入学习路线</a>
        <a class="landing-button" href="https://github.com/Bushiganyuanzuohuaizi/Bushiganyuanzuohuaizi.github.io">访问仓库</a>
        <a class="landing-button" href="README/CONTRIBUTING/">查看贡献说明</a>
      </div>
    </div>
  </section>
</div>
