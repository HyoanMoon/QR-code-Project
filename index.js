import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
        message:"Type your URL:",
        name:"URL"
    }
  ])
  .then((answers) => {

    var url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("message.txt",url, (err) => {
        if (err) throw err;
        console.log(`The URL has been saved! ${answers.URL}`);
        });
   
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });