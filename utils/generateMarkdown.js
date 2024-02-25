// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None") return `![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=="None") return `- [License](#license)`
  return ''

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if(license !== "None") return `## License\n This project is licensed under the ${license} license`
return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description 
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation
${data.instructions}


## Usage 
${data.usage}

## Contributions 
${data.contributions}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions, you can email me at: ${data.email}.
If you want to see more of my work, please visit my Github at: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
