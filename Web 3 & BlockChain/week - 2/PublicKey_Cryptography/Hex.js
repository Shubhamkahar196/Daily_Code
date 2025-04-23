//Hex to Array

function hexToArray(hexString) {
    const byteArray = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < byteArray.length; i++) {
      byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
  }
  
  // Example usage:
  const hex = "48656c6c6f";
  const byteArrayFromHex = hexToArray(hex);
  console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]

  
  //Array to Hex
  
  function arrayToHex(byteArray) {
    let hexString = '';
    for (let i = 0; i < byteArray.length; i++) {
      hexString += byteArray[i].toString(16).padStart(2, '0');
    }
    return hexString;
  }
  
  // Example usage:
  const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
  const hexString = arrayToHex(byteArray);
  console.log(hexString); // Output: "48656c6c6f"
  