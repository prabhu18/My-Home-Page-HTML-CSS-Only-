$(document).ready(function(){
  var htmlpre="<tr><th>Title</th><th>Authors</th><th>Category</th><th>Year</th><th>Price</th></tr>"
    $("button").click(function(){
        var thtml = '';
        $.ajax({url: "books.xml", success: function(result){

          $(result).find('book').each(function(){
            var category = $(this).attr('category')
            var title = $(this).find('title').text();
            var year =  $(this).find('year').text();
            var price = $(this).find('price').text();
            var author='';

            $.each($(this).find("author"), function() {
              author+= $(this).text()+ ',';
              });
            author=author.slice(0,-1);
            thtml += '<tr><td>' + title  + '</td><td>' + author + '</td><td>' +category  + '</td><td>' + year + '</td><td>'
            +price+'</tr></td>'
          });
           htmlpre+=thtml
           $('#Bookstore').append(htmlpre);
           $("button").hide();
        }
      });
    });
});
