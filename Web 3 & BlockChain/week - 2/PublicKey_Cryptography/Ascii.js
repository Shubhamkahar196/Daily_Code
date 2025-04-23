//byte to Ascii
function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
  }
  
//   // Example usage:
  const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
  const asciiString = bytesToAscii(bytes);
  console.log(asciiString); // Output: "Hello"

  //Ascii to Byte

  function asciiToBytes(asciiString) {
    const byteArray = [];
    for (let i = 0; i < asciiString.length; i++) {
      byteArray.push(asciiString.charCodeAt(i));
    }
    return byteArray;
  }
  
  // Example usage:
  const ascii = "Hello";
  const byteArray = asciiToBytes(ascii);
  console.log(byteArray); // Output: [72, 101, 108, 108, 111]

  //UInt8Array to Ascii

  function bytesToAsciii(byteArrays) {
    return new TextDecoder().decode(byteArrays);
  }
  
  // Example usage:
  const bytess = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
  const asciiStrings = bytesToAsciii(bytess);
  console.log(asciiStrings); // Output: "Hello"

  //Ascii to UInt8Array

  function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
  }
  
  // Example usage:
  const asciiii = "Hello";
  const byteArrayss = asciiToBytes(ascii);
  console.log(byteArrayss); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
  
  