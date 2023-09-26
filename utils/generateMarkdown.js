module.exports = generateMarkdown;
function generateMarkdown(data) {

   return `# ${data.title}
 

   ## Table of Contents

   * [License](#license)
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributors](#contributors)
   * [Tests](#testing)
   * [Questions?](#contact)
   

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
 
  ## Contact
${data.email}">${data.github}</a>`
  
 }
 
 module.exports = generateMarkdown;