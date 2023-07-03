function getFormData(data) {
  let result = [];
  for (const [name, value] of data) {
    console.log(name, ":", value);
    result.push(value);
  }
  return result;
}

export { getFormData };
