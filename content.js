//interacts with the webpage

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);
