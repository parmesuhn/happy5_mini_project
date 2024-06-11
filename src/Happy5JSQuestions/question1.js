const clothing = ["shirt", "pants", "jacket"];
const color = ["black", "white"];
const size = ["S", "M", "L"];

const generateList = () => {
  const result = [];

  for (let i = 0; i < clothing.length; i++) {
    for (let j = 0; j < color.length; j++) {
      for (let k = 0; k < size.length; k++) {
        result.push(`${clothing[i]} ${color[j]} ${size[k]}`);
      }
    }
  }

  return result;
};

const list = generateList();

console.log(list);
