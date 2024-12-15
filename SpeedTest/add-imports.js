const fs = require('fs');
const path = require('path');

// Define the import statement to add
const importStatement = `import { SpeedInsights } from "@vercel/speed-insights/next";`;

// Recursively find all `.tsx` files in the directory
function getAllTsxFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllTsxFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.tsx')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Add the import statement if it's not already present
function addImportStatementToFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  if (!fileContent.includes(importStatement)) {
    const updatedContent = `${importStatement}\n${fileContent}`;
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Added import statement to ${filePath}`);
  } else {
    console.log(`Import statement already exists in ${filePath}`);
  }
}

// Main function
function addImportToAllTsxFiles(directory) {
  const tsxFiles = getAllTsxFiles(directory);

  tsxFiles.forEach((file) => {
    addImportStatementToFile(file);
  });
}

// Run the script
const projectDirectory = path.resolve(__dirname, 'src'); // Adjust the 'src' directory path as needed
addImportToAllTsxFiles(projectDirectory);
