
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
      return []
    };

    return matrix.reduce((acc, val, index) => {
      if(index % 2 > 0) {
        acc.push(...val.reverse())
      } else {
        acc.push(...val)
      }

      return acc;
    }, []);
}
