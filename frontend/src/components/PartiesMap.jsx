import { useState } from 'react';
import Region from './Region';

function PartiesMap() {
  const [selectRegion, setSelectRegion] = useState(null);

  const handleState = (region) => {
    setSelectRegion(region);
  };

  const regions = [
    {
      src: '../../assets/images/gobalo/awdal.png',
      alt: 'Awdal',
      transform: 'translateY(-581px) scale(0.42) translateX(-321px)',
      transformHover: 'translateY(-581px) scale(0.44) translateX(-321px)',
      degmoyinka: [
        {
          src: '../../assets/images/degmo/borama.png',
          alt: 'Borama',
          transform: 'translateX(-114px) translateY(-510px) scale(0.18)',
        },
        {
          src: '../../assets/images/degmo/salall.png',
          alt: 'Zeila',
          transform: ' translateX(-154px) translateY(-598px) scale(0.24)',
        },
        {
          src: '../../assets/images/degmo/lughaya.png',
          alt: 'Lughaya',
          transform: 'translateX(-248px) translateY(-572px) scale(0.13)',
        },
        {
          src: '../../assets/images/degmo/baki.png',
          alt: 'Baki',
          transform: 'translateX(-160px) translateY(-520px) scale(0.17)',
        },
      ],
    },
    {
      src: '../../assets/images/gobalo/mjeex.png',
      alt: 'M/jeex',
      transform: 'translateY(-458px) scale(0.358) translateX(-287px)',
      transformHover: 'translateY(-458px) scale(0.368) translateX(-287px)',

      degmoyinka: [
        {
          src: '../../assets/images/degmo/gabilay.png',
          alt: 'Gabiley',
          transform: 'translateX(-234px) translateY(-525px) scale(0.2)',
        },
        {
          src: '../../assets/images/degmo/hargeysa.png',
          alt: 'Hargeysa',
          transform: 'translateX(-274px) translateY(-520px) scale(0.24)',
        },
        {
          src: '../../assets/images/degmo/salaxley.png',
          alt: 'Salaxley',
          transform: 'translateX(-151px) translateY(-442px) scale(0.14)',
        },
        {
          src: '../../assets/images/degmo/bali-gubadle.png',
          alt: 'Bali-gubadle',
          transform: 'translateX(-201px) translateY(-451px) scale(0.105)',
        },
      ],
    },
    {
      src: '../../assets/images/gobalo/sahil.png',
      alt: 'Sahil',
      transform: 'translateY(-557px) scale(0.285) translateX(-306px)',
      transformHover: 'translateY(-557px) scale(0.305) translateX(-306px)',
      degmoyinka: [],
    },
    {
      src: '../../assets/images/gobalo/togdheer.png',
      alt: 'Togdheer',
      transform: 'translateY(-404px) scale(0.46) translateX(157px)',
      transformHover: 'translateY(-404px) scale(0.48) translateX(157px)',
      degmoyinka: [],
    },
    {
      src: '../../assets/images/gobalo/sool.png',
      alt: 'Sool',
      transform: 'translateY(-414px) scale(0.47) translateX(397px)',
      transformHover: 'translateY(-414px) scale(0.49) translateX(397px)',
      degmoyinka: [],
    },
    {
      src: '../../assets/images/gobalo/sanaag.png',
      alt: 'Sanaag',
      transform: 'translateY(-576px) scale(0.47) translateX(388px)',
      transformHover: 'translateY(-576px) scale(0.49) translateX(388px)',
      degmoyinka: [],
    },
  ];

  const allRegionNames = regions?.map((image) => image.alt);

  const parties = [
    {
      label: 'BARWAAQO',
      backgroundColor: 'lightgreen',
      vote: 9000,
    },
    {
      label: 'REJO',
      backgroundColor: 'orange',
      vote: 8000,
    },
    {
      label: 'HORSEED',
      backgroundColor: 'green',
      vote: 7000,
    },
    {
      label: 'TALO-WADAAG',
      backgroundColor: 'skyblue',
      vote: 6000,
    },
    {
      label: 'UCID',
      backgroundColor: 'pink',
      vote: 5000,
    },
    {
      label: 'KAAH',
      backgroundColor: 'red',
      vote: 4000,
    },
    {
      label: 'HILAAC',
      backgroundColor: 'blue',
      vote: 3000,
    },
    {
      label: 'SHACABKA',
      backgroundColor: 'purple',
      vote: 2000,
    },
    {
      label: 'WADDANI',
      backgroundColor: 'orange',
      vote: 2000,
    },
    {
      label: 'KULMIYE',
      backgroundColor: 'yellow',
      vote: 1000,
    },
  ];

  return (
    <div className="ml-5 relative">
      {!allRegionNames?.includes(selectRegion) && (
        <div className="relative">
          <img
            src="../../assets/images/somaliland.svg"
            alt=""
            className="opacity-0"
          />
          {regions.map((image, index) => (
            <Region key={index} {...image} handleState={handleState} />
          ))}
        </div>
      )}

      {allRegionNames.includes(selectRegion) && (
        <div>
          <p
            className="text-sm  font-bold shadow-lg w-10 mb-4 "
            style={{ cursor: 'pointer', position: 'relative', zIndex: 1000 }}
            onClick={() => handleState(null)}
          >
            Back
          </p>
          <h1 className="text-2xl font-semibold">Gobalka {selectRegion}</h1>

          <div
            className="relative scale-150  "
            style={{
              transform:
                selectRegion === 'M/jeex'
                  ? 'translateY(-133px) scale(1.3) translateX(30px)'
                  : 'none',
            }}
          >
            <img
              src="../../assets/images/map.svg"
              alt=""
              className="opacity-0"
            />
            {console.log(selectRegion)}
            <div className="ml-32 mt-10">
              {regions
                .filter((region) => region.alt === selectRegion)[0]
                .degmoyinka.map((degmoyinka) => (
                  <Region
                    key={degmoyinka.alt}
                    {...degmoyinka}
                    // handleState={handleState}
                  />
                ))}
            </div>
          </div>

          <table
            className="table-auto border-collapse border border-gray-300"
            style={{
              transform: ' translateX(350px) translateY(-498px)',
            }}
          >
            <thead className="bg-red-700 text-white">
              <tr>
                <th className="px-4 py-2 border">Xisbiga</th>
                <th className="px-4 py-2 border">Codka</th>
              </tr>
            </thead>
            <tbody>
              {parties.map((dataset, index) => (
                <tr key={index} className="bg-white">
                  {/* Color column with a small rectangle */}
                  <td className="px-4 py-2 border flex ">
                    <div
                      className="w-8 h-4 mr-3"
                      style={{ backgroundColor: dataset.backgroundColor }}
                    ></div>

                    {dataset.label}
                  </td>
                  {/* Label column */}
                  <td className="px-4 py-2 border">{dataset.vote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PartiesMap;
