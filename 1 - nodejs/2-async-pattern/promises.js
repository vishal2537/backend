const { readFile } = require("fs");

const gettext = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// gettext("./b.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await gettext("./b.txt");
    console.log(first)
  } catch (error) {
      console.log(error)
  }
};

start();
