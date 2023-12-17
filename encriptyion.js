function caesarCipher(str, shift) {
  shift = shift % 26;
  str = str.toUpperCase();

  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char.match(/[A-Z]/)) {
      let code = str.charCodeAt(i) - 65;
      code = (code + shift + 26) % 26;
      result += String.fromCharCode(code + 65);
    } else {
      result += char;
    }
  }

  return result;
}

function encrypt() {
  const plaintextInput = document.getElementById('plaintext');
  const shiftInput = document.getElementById('shift');
  const resultDiv = document.getElementById('result');

  const plaintext = plaintextInput.value;
  const shift = parseInt(shiftInput.value);

  if (!isNaN(shift)) {
    const ciphertext = caesarCipher(plaintext, shift);
    
    
    const h1Element = document.createElement('h1');
    
    h1Element.textContent = `Encrypted Message: ${ciphertext}`;
        
    resultDiv.innerHTML = '';
    
    
    resultDiv.appendChild(h1Element);

    resultDiv.classList.remove('active');
    
    void resultDiv.offsetWidth;
    
    resultDiv.classList.add('active');
  } else {
    resultDiv.innerHTML = '<h2>Invalid shift value. Please enter a number.</h2>';
    resultDiv.classList.remove('active');
    void resultDiv.offsetWidth;
    resultDiv.classList.add('active');
  }
}

