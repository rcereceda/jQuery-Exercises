$('#states tr').each(function() {
    console.log("State: " + $(this).find('th').text() + ", Capital: " + $(this).find('td span').first().text());
});