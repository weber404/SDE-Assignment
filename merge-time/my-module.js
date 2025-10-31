const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

  
  const sorted = [...ranges].sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [currStart, currEnd] = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const [nextStart, nextEnd] = sorted[i];

   
    if (nextStart <= currEnd + threshold) {
     
      currEnd = Math.max(currEnd, nextEnd);
    } else {
      
      merged.push([currStart, currEnd]);
      [currStart, currEnd] = [nextStart, nextEnd];
    }
  }

  
  merged.push([currStart, currEnd]);

  return merged;
};

module.exports = {
  mergeTimeRanges
};
