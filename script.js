var input = document.getElementById('input')
var image = document.getElementById('image')
var heroListContainer = document.getElementById('hero-list-container')
input.addEventListener('keyup', () => {
  // console.log(input.value);
  if (input.value != '') {
    var xhrRequest = new XMLHttpRequest()

    xhrRequest.onload = function () {
      var resJSON = JSON.parse(xhrRequest.response)
      if (resJSON.response === 'success') {
        var results = resJSON.results
        page.insertAdjacentHTML('beforeend', '')
        for (let result of results) {
          let herobox = heroInfo(result)
          // heroListContainer.insertAdjacentElement("afterbegin", herobox);
          heroListContainer.prepend(herobox);
        }
        // var imageUrl = resJSON.results[0].image.url
        // image.setAttribute('src', imageUrl)
      } else {
        let errorMsg = JSON.parse(this.response).error
        heroListContainer.innerHTML = errorMsg
      }
    }
    xhrRequest.onerror = function () {
      console.log('Something Went Wrong')
    }
    xhrRequest.open(
      'get',
      `https://www.superheroapi.com/api.php/1628132770683309/search/${input.value}`,
      true
    )
    xhrRequest.send()
  }
})

function heroInfo(hero) {
  let { id, name, bio, appearance, work, connections, image } = hero

  let heroBox = document.createElement('div')
  heroBox.setAttribute('class', 'my-4 card')

  let row = document.createElement('div')
  row.setAttribute('class', 'row')

  let imageContainer = document.createElement('div')
  imageContainer.setAttribute('class', 'container-fluid col-6')

  let photo = document.createElement('img')
  photo.setAttribute('style', 'width: 100%; height: 100%;')
  photo.setAttribute('src', `${image.url}`)

  let profileBox = document.createElement('div')
  profileBox.setAttribute('class', 'p-1 col-6')
  profileBox.setAttribute('style', 'font-size: small;')

  let heroName = document.createElement('p')
  heroName.innerText = `Name : ${name}`

  let height = document.createElement('p')
  height.innerText = `Height( cms ): ${appearance.height[1]}`

  let occupation = document.createElement('p')
  occupation.innerText = `Occupation : ${work.occupation}`

  let based = document.createElement('p')
  based.innerText = `Based : ${work.base}`

  let addToFavBtn = document.createElement('button')
  addToFavBtn.innerText = "Add To Favorite"
  addToFavBtn.setAttribute('class', 'btn btn-success')

  /** Profile - box Appending Child */

  profileBox.appendChild(heroName)
  profileBox.appendChild(height)
  profileBox.appendChild(occupation)
  profileBox.appendChild(based)
  profileBox.appendChild(addToFavBtn)

  /** End appending profile - box */

  /** image - container */

  imageContainer.appendChild(photo)

  /**End image - container */

  /** Building row */

  row.appendChild(imageContainer)
  row.appendChild(profileBox)

  /** End Building row */

  /** Hero - box */
  heroBox.appendChild(row)

  /** End hero - box */


  return heroBox
}
