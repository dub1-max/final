const fs = require('fs');
const path = require('path');

// Define the import statement to remove
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

// Remove the import statement if it exists
function removeImportStatementFromFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  if (fileContent.includes(importStatement)) {
    const updatedContent = fileContent
      .split('\n')
      .filter((line) => line.trim() !== importStatement) // Remove the specific import line
      .join('\n');
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Removed import statement from ${filePath}`);
  } else {
    console.log(`No import statement found in ${filePath}`);
  }
}

// Main function
function removeImportFromAllTsxFiles(directory) {
  const tsxFiles = getAllTsxFiles(directory);

  tsxFiles.forEach((file) => {
    removeImportStatementFromFile(file);
  });
}

// Run the script
const projectDirectory = path.resolve(__dirname, 'src'); // Adjust the 'src' directory path as needed
removeImportFromAllTsxFiles(projectDirectory);
