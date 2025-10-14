const fs = require('fs');
const path = require('path');

const entitiesDir = path.join(__dirname, '..', 'src', 'entity');

fs.readdir(entitiesDir, (err, files) => {
  if (err) {
    console.error('Error reading entities directory:', err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.ts') && !file.endsWith('.entity.ts')) {
      const newFileName = file.replace(/\.ts$/, '.entity.ts');
      const oldPath = path.join(entitiesDir, file);
      const newPath = path.join(entitiesDir, newFileName);

      fs.rename(oldPath, newPath, (err) => {
        if (err) console.error(`Error renaming ${file}:`, err);
        else console.log(`Renamed ${file} -> ${newFileName}`);
      });
    }
  });
});
