const cenario1 = [0, 0, 1, 0, 0, 1, 0];
const cenario2 = [0, 0, 0, 0, 1, 0];

const jumpingOnClouds = c => {
  let twoJumps = false;
  const pulos = c.reduce((acc, nuvem, i, array) => {
    
    console.log(`index: ${i} - acc: ${acc}`);
    console.log(`nuvem: ${nuvem} - prox: ${array[i + 1]}`);
    
    if(array[i + 1] === undefined) return acc;

    if(twoJumps) {
      twoJumps = false;
      console.log('eu dei pulo duplo a partir da casa anterior até a proxima\n')
      return acc;
    }

    if(array[i + 1] === 0 && array[i + 2] === 0) {
      twoJumps = true;
      console.log('pulei duas casas livres!\n')
      return acc + 1;
    } else if(array[i + 2] === 0) {
      twoJumps = true;
      console.log('pulei 2 casas por cima de uma casa eletrificada!\n')
      return acc + 1;
    } else {
      console.log('pulei uma casa!\n')
      return acc + 1;
    }
  }, 0);
  
  return pulos;
}

jumpingOnClouds(cenario1)

//c representa o cenario, mantenha o nome pra eu poder testar no hackerrank :D