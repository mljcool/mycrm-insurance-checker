const openComparisonWindow = ({ insurance }) => {
  const { syncID } = insurance;
  const w = 450;
  const h = 850;
  const left = screen.width / 2 - w / 2;
  const top = screen.height / 2 - h / 2;
  const htmlPage = './pages/compare-details.html';
  const url = chrome.extension.getURL(htmlPage) + '?syncID=' + 12345;
  chrome.windows.create({
    url,
    type: 'panel',
    height: 670,
    width: 570,
    left: left,
    top: top,
  });
};
