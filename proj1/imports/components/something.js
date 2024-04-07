
export const testArr = [
    {
        "name": "foo"
    },
    {
        "name": "bar"
    }
];

export const handleDeleteField = (index) => {
    let newData = testArr;
    testArr.splice(index, 1);
    setData([...newData]);
  };


  