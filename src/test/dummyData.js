import makeDummyTest from './makeDummyTest';

const tests = [
    { description: "uploads go in both directions",          run: makeDummyTest() },
    { description: "PDFs are adequately waterproof",         run: makeDummyTest() },
    { description: "videos are heated to 12,000,000 Kelvin", run: makeDummyTest() },
    { description: "subpixels can go rock climbing",         run: makeDummyTest() },
    { description: "images are squarer than traffic cones",  run: makeDummyTest() },
    { description: "metaproperties don't go too meta",       run: makeDummyTest() },
  ];

  export default tests;
  