import inquirer from "inquirer";                //a collection of common interactive command line user interface
import qr from "qr-image";                      //generate img as png
import fs from "fs";

inquirer
  .prompt([                                    //getting user input
    {                                       
      message: "Type in your URL: ",           //message is a js object so curly braces are needed around it
      name: "URL",
    },
  ])
  .then((answers) => {                                      //prints the answers to our message
   const url = answers.URL;                                //to store our data(answers) in url
   var qr_svg = qr.image(url);          //importing qr from module     //qr.image is turn a piece of text into a qr image and qr_vsg is image type   
   qr_svg.pipe(fs.createWriteStream("qr_img.png"));      //pipe purpose is to attach a writeable stream to a readable stream allowing to pass the readable stream data to the writeable stream.
    
   fs.writeFile("URL.txt", url, (err) => {      //for creating url.text file and storing the url link that the user generated
   if (err) throw err;
   console.log("The file has been saved!");
  });
  })

  
  .catch((error) => {
    if (error.isTtyError) {
      console.log(err)
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
