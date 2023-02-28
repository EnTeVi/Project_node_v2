const fs = require('fs/promises');
const path = require('path');


// ************** Create folder

const createFolder = (folder) => {
    fs.mkdir(`${folder}`, (err) => {
        console.log(err);
    })
}

// createFolder('male');
// createFolder('female');

// *************** Create file

const createFile = async (folderName, fileName, gender, name, age) => {
    fs.appendFile(`./${folderName}/${fileName}.json`, JSON.stringify(
        {
            "gender": gender,
            "name": name,
            "age": age
        }
    ), (err) => {
        console.log(err);
    })
}

// createFile('male', 'Sergiy', 'male', 'Sergiy', 23);
// createFile('male', 'Andriy', 'male', 'Andriy', 24);
// createFile('male', 'Alina', 'female', 'Alina', 25);
// createFile('male', 'Viktoria', 'female', 'Viktoria', 26);
// createFile('female', 'Natalia', 'female', 'Natalia', 25);
// createFile('female', 'Ira', 'female', 'Ira', 24);
// createFile('female', 'Stepan', 'male', 'Stepan', 23);
// createFile('female', 'Viktor', 'male', 'Viktor', 22);

// ************** Sorting file

const sorting = async (readFolder, writeFolder, gender) => {
    const folderPath = path.join(__dirname, readFolder);

    const files = await fs.readdir(folderPath);

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const data = await fs.readFile(filePath);
        const user = JSON.parse(data);

        if (user.gender === gender) {
            await fs.rename(filePath, path.join(__dirname, writeFolder, file));
        }
    }
}


// sorting('male', 'female', 'female');
// sorting('female', 'male', 'male');


// **********************************************************
// hw2

// const fs = require('node:fs');


const createFolder = (folder) => {
    fs.mkdir(`${folder}`, (err) => {
        console.log(err);
    })
}

const createFolderLoop = (mainFolder, folder) => {
    for (let i = 0; i<5; i++) {
        fs.mkdir(`./${mainFolder}/${folder}-${i}`, (err) => {
            console.log(err);
        })
    }
}

const createFileLoop = (mainFolder, fileName) => {
    for (let i = 0; i<5; i++) {
        fs.appendFile(`./${mainFolder}/${fileName}-${i}.txt`, `This is ${i} file`,(err) => {
            console.log(err);
        })
    }
}


const readType = () => {
    fs.readdir('./hw2', (err, data) => {
        console.log(data);

        for (const fileName of data) {
            fs.stat(`./hw2/${fileName}`, (err1, stats) => {
                console.log(stats.isDirectory());

                if (stats.isFile()) {
                    fs.readFile(`./hw2/${fileName}`, (err2, data) => {
                        console.log(data.toString());
                    })
                }
            })
        }
    })
}


// createFolder('hw2');
// createFolderLoop('hw2', 'folder');
// createFileLoop('hw2', 'file');
// readType();