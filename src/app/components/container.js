export default function Container() {
  const startNumber = 5048;
  const endNumber = 5140;
  const totalImages = endNumber - startNumber + 1;
  const imageFileNames = [];

  for (let i = startNumber; i <= endNumber; i++) {
    const fileName = `IMG_${i}.jpg`;
    imageFileNames.push(fileName);
  }

  const div1Images = imageFileNames.slice(0, totalImages / 5);
  const div2Images = imageFileNames.slice(
    totalImages / 5,
    (2 * totalImages) / 5
  );
  const div3Images = imageFileNames.slice(
    (2 * totalImages) / 5,
    (3 * totalImages) / 5
  );
  const div4Images = imageFileNames.slice(
    (3 * totalImages) / 5,
    (4 * totalImages) / 5
  );
  const div5Images = imageFileNames.slice((4 * totalImages) / 5);

  return (
    <>
      <div className="flex w-full h-full justify-center px-2 mb-8">
        <div className="flex flex-col w-1/5 mx-4 space-y-6">
          {div1Images.map((fileName, index) => (
            <div key={index}>
              <img
                src={`/images/${fileName}`}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-2/12 mx-4 space-y-6">
        {div2Images.map((fileName, index) => (
            <div key={index}>
              <img
                src={`/images/${fileName}`}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-2/12 mx-4 space-y-6">
        {div3Images.map((fileName, index) => (
            <div key={index}>
              <img
                src={`/images/${fileName}`}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-2/12 mx-4 space-y-6">
        {div4Images.map((fileName, index) => (
            <div key={index}>
              <img
                src={`/images/${fileName}`}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-2/12 mx-4 space-y-6">
        {div5Images.map((fileName, index) => (
            <div key={index}>
              <img
                src={`/images/${fileName}`}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
