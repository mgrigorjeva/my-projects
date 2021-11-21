function dropdown0(e) {
    document.getElementById("dropdown0").classList.toggle("show");
    document.getElementById("dropdown1").classList.remove("show");
    // e=e||window.event 
    // e.preventDefault()
    // e.stopPropagation()
    // return false
  }
  function dropdown1(e) {
    document.getElementById("dropdown1").classList.toggle("show");
    document.getElementById("dropdown0").classList.remove("show");
    // e=e||window.event 
    // e.preventDefault()
    // e.stopPropagation()
    // return false
  }

  window.addEventListener("click",()=>{
    if (event.target.matches('#button0')){return}
    if (event.target.matches('#button1')){return}
    document.getElementById("dropdown1").classList.remove("show");
    document.getElementById("dropdown0").classList.remove("show");
  })

const mixer = new Array(2);
const mixerResults = [
    ['pyro', 'hydro', 'Vaporize'],
    ['pyro', 'cryo', 'Melt'],
    ['pyro', 'electro', 'Overload'],
    ['electro', 'cryo', 'Superconduct'],
    ['electro', 'hydro', 'Charged'],
    ['cryo', 'hydro', 'Froze'],
    ['anemo', 'pyro', 'Swirl'],
    ['anemo', 'hydro', 'Swirl'],
    ['anemo', 'electro', 'Swirl'],
    ['anemo', 'cryo', 'Swirl'],
    ['anemo', 'pyro', 'Swirl'],
    ['geo', 'pyro', 'Crystallize'],
    ['geo', 'hydro', 'Crystallize'],
    ['geo', 'electro', 'Crystallize'],
    ['geo', 'cryo', 'Crystallize'],
    ['geo', 'pyro', 'Crystallize'],
    ['pyro', 'dendro', 'Burning'],
    // ['pyro', 'pyro', 'No reaction'],
    // ['hydro', 'hydro', 'No reaction'],
    // ['electro', 'electro', 'No reaction'],
    // ['cryo', 'cryo', 'No reaction'],
    // ['anemo', 'anemo', 'No reaction'],
    // ['geo', 'geo', 'No reaction'],
    // ['dendro', 'dendro', 'No reaction'],
    ['geo', 'anemo', 'No reaction'],
    ['dendro', 'hydro', 'No reaction'],
    ['dendro', 'cryo', 'No reaction'],
    ['dendro', 'electro', 'No reaction'],
    ['dendro', 'geo', 'No reaction'],
    ['dendro', 'anemo', 'No reaction']
    

];

function addElement(e) {
    const {
        dataset: { element, mixeridx },
    } = e;

    mixer[mixeridx] = element;

    render();
}

function render() {
    const result = document.getElementById('result');

    let mixResult = '';

    if (mixer[0] === mixer[1]) {
        mixResult = 'No reaction';
    }

    if  (!mixer[0] || !mixer[1]) {
        mixResult = 'Select elements';
    } else {
        for (let i = 0; i < mixerResults.length; i++) {
            const [el1, el2, res] = mixerResults[i];

            if (
                (mixer[0] === el1 || mixer[0] === el2) &&
                (mixer[1] === el1 || mixer[1] === el2)
            ) {
                mixResult = res;
            }
        }
    }

    // const resultText = `
    //     1 element = ${mixer[0] ?? 'not selected'}
    //     <br/>
    //     2 element = ${mixer[1] ?? 'not selected'}
    //     <br/>
    //     result = ${mixResult}
    // `;
    document.getElementById("button0").innerHTML = `${mixer[0] ?? 'First Element'}`
    document.getElementById("button1").innerHTML = `${mixer[1] ?? 'Second Element'}`
    document.getElementById("result").innerHTML = `${mixResult}`

    result.innerHTML = resultText;
}