---
title: "A Review on Probability and Statistic"
description: "A summary of knowledge about the uncertainty"
pubDate: "2025-12-13"
---

## Probability Space

Before going directly into how these methods work and all the math behind them, let first take a quick review of probability:

Definition of probability space: the probability space models a real-world process (or an experiment) with *random* outcome. The probability space consists of the sample space, the event space and the probability.
- **Sample space**: the sample space $\Omega$ is the set of all possible outcomes of experiment. For example, when we toss two coins, the sample space is $\\{HH, TT, HT, TH\\}$ 
- **Event space**: the event space $\mathcal A$ is the space of potential results of the experiment. A subset $\mathit A$ of the sample space is in the event space $\mathcal A$ if we can observe an outcome of experiment in $\mathit A$. The event space $\mathcal A$ is obtained by considering the collection of subsets of $\Omega$. For example, if we toss a coin, the sample space would be $\\{H, T\\}$ and the event space $\\{ \{T\}, \{H\}, \emptyset, \Omega \\}$, which is a power set of $\Omega$.
- **Probability**: For each event $A \in \mathcal A$, we assign a number $P(A)$ that measures the probability that the event will occur. The probability $P(A)$ is in the interval $[0, 1]$ and $P(\Omega) = 1$.

## Random Variables

In order to avoid explicitly referring to the probability space, we have a **random variable** $X$, which actually is a function mapping from the sample space to a target space $\mathcal T$. When $\mathcal T$ is finite or countably infinite, this is called a discrete random variable. For continuous random variables, that happens when $\mathcal T = \mathbb R$ or $\mathcal T = \mathbb R^D$.

For discrete variables, we call the probability of $X$ take a value $x \in \mathcal T$ is $P(X=x)$. In the case of continuous, it makes more sense to specify the probability of $X$ is in an interval $P(a \leq X \leq b)$. 


## Statistic Review




