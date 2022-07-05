import cx from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import CardLink from './CardLink';

export default function Card({
  title,
  text,
  image,
  bodyLinkOneURL,
  bodyLinkOneTitle,
  bodyLinkTwoURL,
  bodyLinkTwoTitle,
  bodyLinkThreeURL,
  bodyLinkThreeTitle,
}) {
  const imageStyles = 'block h-28 object-cover rounded-t-md';
  const cardImage = getImage(image);
  return (
    <div
      className={cx(
        'bg-substrateGray-light rounded-md mb-4 lg:mx-4 lg:mb-8 md:md-10 shadow-md md:w-full lg:w-[280px] xl:w-[350px]',
        'dark:bg-substrateBlackish'
      )}
    >
      <GatsbyImage className={imageStyles} image={cardImage} alt={`Substrate Documentation ${title}`} />
      <div className="p-6 lg:p-9">
        <p className="text-2xl lg:text-4xl font-bold capitalize">{title}</p>
        <p className="sm:h-24 block">{text}</p>
        <div className="block sm:text-left">
          <CardLink className="mdx-anchor text-substrateGreen block my-2" link={bodyLinkOneURL}>
            {bodyLinkOneTitle}
          </CardLink>
          <CardLink className="mdx-anchor text-substrateGreen block my-2" link={bodyLinkTwoURL}>
            {bodyLinkTwoTitle}
          </CardLink>
          <CardLink className="mdx-anchor text-substrateGreen block my-2" link={bodyLinkThreeURL}>
            {bodyLinkThreeTitle}
          </CardLink>
        </div>
      </div>
    </div>
  );
}
