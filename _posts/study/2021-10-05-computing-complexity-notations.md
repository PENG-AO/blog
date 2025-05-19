---
layout: post
title: 渐近记号
tags: 计算理论 备忘录
required: math
---

# 定义


$f(n),g(n):\mathbb{R}\to\mathbb{R}_{\ge0}$

- $f(n)=O(g(n))\iff\exists c>0,\exists N,\forall n\ge N,f(n)\le cg(n)$
- $f(n)=\Omega(g(n))\iff\exists c>0,\exists N,\forall n\ge N,f(n)\ge cg(n)$
- $f(n)=o(g(n))\iff\exists c>0,\exists N,\forall n\ge N,f(n)\lt cg(n)\iff\lim_{n\to\infty}\frac{f(n)}{g(n)}=0$
- $f(n)=\omega(g(n))\iff\exists c>0,\exists N,\forall n\ge N,f(n)\gt cg(n)\iff\lim_{n\to\infty}\frac{f(n)}{g(n)}=\infty$
- $f(n)=\Theta(g(n))\iff f(n)=O(g(n)),f(n)=\Omega(g(n))$

# 补充

大$O$和大$\Omega$强调收紧，然而小o和小$\omega$只说明趋近。此外，定义中使用的 $c$ 这个常数，抛开严禁数学定义不谈，其目的在于除去系数影响、只考虑真正决定函数增长速度的部分。

![]({{ "/assets/src/computing-complexity-notations/complexity.jpeg" | relative_url }}){: width="80%"}

# 参考资料

- [Asymptotic notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)
- [算法导论------渐近记号Θ、Ο、o、Ω、ω详解](https://blog.csdn.net/so_geili/article/details/53353593)
