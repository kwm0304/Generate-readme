// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "none" )
    return `### Notice 
    This product is covered under ${license}`
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license != "none") 
    return `## License
    `
    return ("")
 }

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
      
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
      
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contribution}
        
  ## Test

  ${data.test}
        
  ## Questions?

  email: ${data.email}<br>
  GitHub Username: ${data.username}<br>
  Project Repo: ${data.reponame}`;
}

module.exports = generateMarkdown;
// module.exports = renderLicenseBadge(), renderLicenseLink(), renderLicenseSection() 