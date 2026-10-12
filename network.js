/* WPC activity: weighted undirected network calculations in the browser. */
(function (root) {
  'use strict';
  const actors = ['Oil producers', 'Pipeline company', 'Power utility', 'Energy ministry',
    'Finance ministry', 'Lender', 'Affected communities', 'Contractors'];

  function calculate(scores, active = actors.map((_, i) => i)) {
    if (!Array.isArray(scores) || scores.length !== 28 || scores.some(v =>
      v !== null && (!Number.isInteger(v) || v < 0 || v > 100))) {
      throw Error('Use 28 whole-number scores from 0 to 100, or leave cells blank.');
    }
    if (!Array.isArray(active) || active.some(i => !Number.isInteger(i) || i < 0 || i >= actors.length) ||
        new Set(active).size !== active.length) throw Error('Choose each remaining actor once.');
    const included = new Set(active), count = active.length;
    const n = actors.length, adjacency = actors.map(() => []), strength = Array(n).fill(0), edges = [];
    // Put reciprocal scores on a common integer scale. BigInt preserves equal
    // shortest paths exactly, including ties involving different edge weights.
    const gcd = (a, b) => { while (b) { const next = a % b; a = b; b = next; } return a; };
    let scale = 1n;
    for (const score of scores) if (score > 0) {
      const value = BigInt(score); scale = scale / gcd(scale, value) * value;
    }
    let k = 0;
    for (let i = 0; i < n; i++) for (let j = 0; j < i; j++) {
      const value = scores[k++];
      if (value > 0 && included.has(i) && included.has(j)) {
        const length = scale / BigInt(value);
        adjacency[i].push({node:j, length, weight:value});
        adjacency[j].push({node:i, length, weight:value});
        strength[i] += value; strength[j] += value;
        edges.push({source:i, target:j, weight:value});
      }
    }
    const bw = Array(n).fill(0), clRaw = [], clNorm = [], componentSizes = [];
    for (let source = 0; source < n; source++) {
      const distance = Array(n).fill(null), predecessors = actors.map(() => []),
        sigma = Array(n).fill(0), seen = new Set(), order = [];
      distance[source] = 0n; sigma[source] = 1;
      while (true) {
        let v = -1;
        for (let i = 0; i < n; i++) if (!seen.has(i) && distance[i] !== null &&
          (v === -1 || distance[i] < distance[v])) v = i;
        if (v === -1) break;
        seen.add(v); order.push(v);
        for (const {node:w, length} of adjacency[v]) {
          const candidate = distance[v] + length;
          if (distance[w] === null || candidate < distance[w]) {
            distance[w] = candidate; sigma[w] = sigma[v]; predecessors[w] = [v];
          } else if (candidate === distance[w]) {
            sigma[w] += sigma[v]; predecessors[w].push(v);
          }
        }
      }
      const reachable = distance.filter((d,i) => i !== source && d !== null);
      const total = reachable.reduce((a,b) => a+b, 0n);
      const reciprocalTotal = total ? Number(scale) / Number(total) : null;
      clRaw.push(reciprocalTotal);
      clNorm.push(total ? reachable.length * reciprocalTotal : null);
      componentSizes.push(reachable.length + 1);
      const dependency = Array(n).fill(0);
      for (const w of order.reverse()) {
        for (const v of predecessors[w]) dependency[v] += sigma[v] / sigma[w] * (1 + dependency[w]);
        if (w !== source) bw[w] += dependency[w];
      }
    }
    for (let i = 0; i < n; i++) bw[i] /= 2;
    const connected = count > 0 && componentSizes[active[0]] === count;
    let eigen = Array(n).fill(null);
    if (connected && count > 1) {
      const shift = Math.max(...strength);
      let vector = actors.map((_,i) => included.has(i) ? 1 / Math.sqrt(count) : 0), converged = false;
      for (let iteration = 0; iteration < 20000; iteration++) {
        let next = vector.map((v,i) => shift*v + adjacency[i].reduce((sum,e) => sum + e.weight*vector[e.node], 0));
        const norm = Math.sqrt(next.reduce((sum,v) => sum + v*v, 0));
        next = next.map(v => v / norm);
        const error = Math.max(...next.map((v,i) => Math.abs(v-vector[i])));
        vector = next;
        if (error < 1e-13) { converged = true; break; }
      }
      if (!converged) throw Error('The eigenvector calculation did not converge. Try again.');
      const maximum = Math.max(...vector); eigen = vector.map(v => v / maximum);
    }
    return {actors:[...actors], edges, connected, completed:scores.filter(v => v !== null).length,
      total:28, distance_mode:'inverse', zero_links:'excluded', active_count:count, active:[...active].sort((a,b)=>a-b),
      metrics:actors.map((name,i) => ({name, active:included.has(i), degree:included.has(i)?strength[i]:null,
        closeness:included.has(i)?clNorm[i]:null, cl_raw:included.has(i)?clRaw[i]:null,
        betweenness:included.has(i)?bw[i]:null,
        bw_norm:included.has(i)?(count>2?2*bw[i]/((count-1)*(count-2)):0):null,
        eigenvector:included.has(i)?eigen[i]:null, component_size:included.has(i)?componentSizes[i]:null}))};
  }
  root.WPCNetwork = Object.freeze({actors:Object.freeze(actors), calculate});
})(globalThis);
