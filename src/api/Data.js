const defaultData = {
  // default data structure
  userBmr: 0,
  days: {},
};

export const readData = () => {
  const jsonData = localStorage.getItem("data");
  if (!jsonData) {
    // if I don't have anything
    return defaultData; // return the default
  }
  const data = JSON.parse(jsonData);
  return data;
};

export const writeData = (data) => {
  // overwrite the default with data.
  // if data is missing a key, then it exists in the default
  const intermediateData = { ...defaultData, ...data };
  localStorage.setItem("data", JSON.stringify(intermediateData));
};
