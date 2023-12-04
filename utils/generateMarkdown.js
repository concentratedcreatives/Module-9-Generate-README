function renderLicenseBadge(license) {
    if (license) {
      return `![License](https://img.shields.io/badge/license-${license}-blue)`;
    }
    return '';
  }
  
  function renderLicenseLink(license) {
    if (license) {
      return `[License](https://opensource.org/licenses/${license})`;
    }
    return '';
  }
  
  function renderLicenseSection(license) {
    if (license) {
      return `## License
    
  This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
    }
    return '';
  }
  
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}

  ${licenseBadge}
  ${licenseSection}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}
  
  ## Test
  ${data.test}
  

  ## Questions
  Any questions? Reach me here:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}`;
  }
  
  module.exports = generateMarkdown;
  