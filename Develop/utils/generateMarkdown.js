// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (`${!data.license} = 'none' `)
    return (`"`)
    else 
    return `![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (`${!data.license} = 'none' `)
    return (`"`)
    else 
    return `
    ### Notice <br>
    This product is covered under ${data.license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (`${!data.license} = 'none' `)
    return (`"`)
    else 
    return `
    ##License
    
    ${renderLicenseLink()}`
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}<br>

  ${renderLicenseBadge()}
  
  ## Description
  ${data.description}<br>
      
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

  ${renderLicenseSection()}

  ## Contributing

  ${data.contributing}
        
  ## Test

  ${data.test}
        
  ## Questions?

  email: ${data.email}<br>
  GitHub Username: ${data.username}<br>
  Project Repo: ${data.reponame}`;
}

module.exports = generateMarkdown;