let key = location.search.split('=')[1]
let title = document.querySelector('title')

var xhrRequest = new XMLHttpRequest()
xhrRequest.open(
  'get',
  `https://www.superheroapi.com/api.php/1628132770683309/${key}`,
  true
)
xhrRequest.send()


xhrRequest.onload = function () {
    var resJSON = JSON.parse(xhrRequest.response)
    title.innerHTML = resJSON.name;
  }