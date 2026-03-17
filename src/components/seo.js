import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'codash is a platform where you can rent online IDEs and code editor. Now, you can edit and compile the code within the browser.',
  author = 'Codash',
  meta,
  title = 'Codash',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta || []);
  return (
    <Head>
      <title>{title}</title>
      {metaData.filter(Boolean).map((item, i) => (
        <meta key={i} name={item.name || item.property} content={item.content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
