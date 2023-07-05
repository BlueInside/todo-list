function getFormData(data) {
  let result = [];
  for (const [name, value] of data) {
    result.push(value);
  }
  return result;
}

export { getFormData };
