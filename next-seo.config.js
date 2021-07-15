const description = 'I like building small bits of code to help my everyday life.';
const title = 'Home';
const url = 'https://barbell-math.vercel.app/';
const siteName = 'Barbell Math';
const tagLine = 'Just another lazy coder';

const seo = {
  title,
  titleTemplate: 'Barbell Math | %s',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url,
  },
};

export {
  seo as defaultSeo, url as defaultUrl, siteName, tagLine,
};
