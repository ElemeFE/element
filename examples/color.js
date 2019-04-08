export const tintColor = (c, tint) => {
  const color = c.replace('#', '');
  let red = parseInt(color.slice(0, 2), 16);
  let green = parseInt(color.slice(2, 4), 16);
  let blue = parseInt(color.slice(4, 6), 16);

  if (tint === 0) { // when primary color is in its rgb space
    return [red, green, blue].join(',');
  } else {
    red += Math.round(tint * (255 - red));
    green += Math.round(tint * (255 - green));
    blue += Math.round(tint * (255 - blue));
    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);
    return `#${ red }${ green }${ blue }`;
  }
};
