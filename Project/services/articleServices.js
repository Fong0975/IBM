
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

var VisualRecognition = new VisualRecognitionV3({
  iam_apikey: 'COAi96rqKZl0UE9TxVF6XNGiFk8XGMEArFxC6v_k118Y',
  version: '2018-03-19'
});
var fs = require('fs');


//error message for missing URL
const MISSING_URL_ERROR = 'URL not passed';



exports.extractArticle = function(req, callback) {
	// if (req === null || req.body === null || req.body.url === null) {
	// 	callback(MISSING_URL_ERROR, null);
	// }

	var images_file = fs.createReadStream('a.jpg');
	var images_url = "https://images.askmen.com/1080x540/2017/01/06-044621-the_pitfalls_of_dating_a_married_woman.jpg";

	var params = {
	  images_file: images_file
	  
	};
	//images_file: images_file
	//url: images_url


	VisualRecognition.detectFaces(params, function(err, response) {
	  if (err) { 
	    callback(error,null);
	  } else {
	    callback(null,JSON.stringify(response, null, 2));
	  }
	});

	
}

