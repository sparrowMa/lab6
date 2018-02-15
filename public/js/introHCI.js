'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	console.log(projectID);
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

    // call the AJAX endpoint using get
    // $.get("http://URL", callBackFn)

	// OMG the URL rule is crazy.... it automatically start from index page.
    $.get("project/" + idNumber, callBackFn);

    console.log("The URL you just called is " + "/project/" + idNumber);


}

function callBackFn(result){
	console.log("The callbackFn is being called!");
    console.log(result);

    var projectDetailsHTML = '<img src="' + result['image'] + '" class="img detailsImage">'
        + '<header><small>' + result['title'] + '</small></header>'
		+ '<p><small>' + result['date'] + '</small></p>'
		+ '<p>' + result['summary'] + '</p>';

    // $(".details").html(projectDetailsHTML);   // doing this will result in all projects inserting details at the same time!!
    $("#project" + result['id'] + " .details").html(projectDetailsHTML);
    // $("#result['id'] .details").html(projectDetailsHTML);

}
