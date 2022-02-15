var heroListContainer = document.getElementById('favorite-hero-list-container')

for (var i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i)
  let heroObj = localStorage.getItem(key)
  let herobox = favHeroInfo(JSON.parse(heroObj))
  heroListContainer.prepend(herobox)
}

function favHeroInfo(hero) {
  let { id, name, powerstats, biography, appearance, image } = hero

  let heroBox = document.createElement('div')
  heroBox.setAttribute('class', 'mb-4 card')
  // heroBox.setAttribute('style', ':hover')

  let row = document.createElement('div')
  row.setAttribute('class', 'row')

  let imageContainer = document.createElement('div')
  imageContainer.setAttribute('class', 'container-fluid col-6')

  let photo = document.createElement('img')
  photo.setAttribute('style', 'width: 100%; height: 100%;')
  photo.setAttribute('src', `${image.url}`)
  photo.setAttribute('alt', `${name}`)

  let profileBox = document.createElement('div')
  profileBox.setAttribute('class', 'p-1 col-6')
  profileBox.setAttribute('style', 'font-size: small;')

  let heroName = document.createElement('p')
  heroName.innerText = `Name : ${name}`

  let height = document.createElement('p')
  height.innerText = `Height( cms ): ${appearance.height[1]}`

  let strength = document.createElement('p')
  strength.innerText = `Strength : ${powerstats.strength}`

  let speed = document.createElement('p')
  speed.innerText = `Speed : ${powerstats.speed}`

  let power = document.createElement('p')
  power.innerText = `Power : ${powerstats.power}`

  let removeToFavBtn = document.createElement('button')
  removeToFavBtn.innerText = 'Remove From Favorite'
  removeToFavBtn.setAttribute('class', 'btn btn-success')
  removeToFavBtn.setAttribute('style', 'font-size:13px')

  /** Profile - box Appending Child */

  profileBox.appendChild(heroName)
  profileBox.appendChild(height)
  profileBox.appendChild(strength)
  profileBox.appendChild(speed)
  profileBox.appendChild(power)
  profileBox.appendChild(removeToFavBtn)

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

  removeToFavBtn.addEventListener('click', function (e) {
    e.stopPropagation()
    localStorage.removeItem(id)
    this.parentNode.parentNode.remove()
  })

  /** Click on hero redirect to single hero page */
  heroBox.addEventListener('click', function () {
    window.location.href = `./hero.html?heroId=${id}`
  })

  return heroBox
}
