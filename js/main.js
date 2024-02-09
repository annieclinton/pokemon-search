//Example fetch using pokemonapi.co

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  //ex choice = clefairy
  //link to documentation: https://pokeapi.co/docs/v2#pokemon-section
  //Go to Item(endpoint)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
        console.log(data.sprites.front_default)
        document.querySelector('.startImg').classList.add('hidden')
        document.querySelector('#front').src = data.sprites.front_default
        document.querySelector('#back').src = data.sprites.back_default
        document.querySelector('#abilities').innerText = 'Abilities:'
        if(document.querySelector('li')){
          // Assuming you have a <ul> element containing <li>s
          let ulElement = document.querySelector('ul');

          // Remove all <li> children from <ul>
          while (ulElement.firstChild) {
              ulElement.removeChild(ulElement.firstChild);
}
        }

        data.abilities.forEach(obj => {
          console.log(obj.ability.name) //console.log the name of each subclass
          // create an li
          const li = document.createElement('li')
          // add text to li
          li.textContent = obj.ability.name
          // append the li to the ul
          document.querySelector('ul').appendChild(li)
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
