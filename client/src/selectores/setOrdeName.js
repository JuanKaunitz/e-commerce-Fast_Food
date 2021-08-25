export const setOrderName = (name, array) => {

    let newArray =  array.map((product) => product.name.toLowercase() === name.toLowercase());
    return newArray;
  };
  
  export default setOrderName;