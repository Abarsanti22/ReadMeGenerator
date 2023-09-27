module.exports = generateMarkdown;
function generateMarkdown(data) {

   return `# ${data.title}
 
   ![badge](https://img.shields.io/badge/license-${data.license}-important)

   ## Table of Contents

   * [License](#license)
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributors](#contributors)
   * [Tests](#testing)
   * [Questions?](#questions)
   

  ## Description
  ${data.description}
  
  ## Installation
   ${data.installation}
  
  ## Usage
   ${data.usage}
 
  ## Screenshot
  ![Screenshot](${data.screenshot})
 
   
  ## Contributors
   ${data.contributors}
     
  ## License
   ![badge](https://img.shields.io/badge/license-${data.license}-important)
   <br>
   Permission to use this application is granted under the ${data.license} license. <https://opensource.org/licenses/${data.license}>
 

  ## Testing
   ${data.testing}


  ## Questions
GitHub: <a href="github.com:${data.username}">${data.github}</a>

Please email me with any additional questions at <a href="mailto:${data.email}">${data.email}</a>`

 }
 
 module.exports = generateMarkdown;