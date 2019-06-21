



var number

var startYear

var endYear

  var searchTerm

  var apiKey = '&api-key=D7BcPTqs1n0lUq0r0IAlLsiR6h9H0j0I'









//on click
$('#find').on('click', function() {
    searchTerm = $('#term').val()
    number = $('#number').val()
    startYear = $('#startDate').val()
    endYear = $('#endDate').val()

    var httpRequest = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
    searchTerm + '&facet_fields=source&facet=true&begin_date=' + startYear + '0101&end_date=' + endYear + '1231' + apiKey

    $.ajax({
        url:  httpRequest,
        method: 'get'
      }).then(function(response){
      
      
      for (var i = 0; i < number; i++) {
      
          var title = response.response.docs[i].headline.main
      
          var webURL = response.response.docs[i].web_url
      
          var newTitle = $('<div>').html(`<a href="${webURL}" target="_blank">${title}</a>`)
      
          // console.log(response.response.docs[i].headline.main)
          // console.log(response.response.docs[i].web_url)
          $("#article-display").append(newTitle)
      }
      
      
      })


})

$('#reset').on('click', function (){
    $('#term').val('')
    $('#number').val('')
    $('#startDate').val('')
    $('#endDate').val('')

    $("#article-display").empty()
})








