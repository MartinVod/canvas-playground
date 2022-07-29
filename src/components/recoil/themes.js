import { atom, selector } from 'recoil';

// const selectedTheme = localStorage.getItem('selectedTheme');

// themes
export const themesList = atom({
  key: 'themesList',
  default: null,
});

export const selectedTheme = atom({
  key: 'selectedTheme',
  default: null,
});

// icon
export const selectedIcon = atom({
  key: 'selectedIcon',
  default: null,
});
export const selectedIconRef = atom({
  key: 'selectedIconRef',
  default: null,
});

// stage
export const colorOrImage = atom({
  key: 'colorOrImage',
  default: false, // false = color , true = image
});

export const stageBgColor = atom({
  key: 'stageBgColor',
  default: '#ffffff',
});

export const stageBgImage = atom({
  key: 'stageBgImage',
  default: null,
});
export const stageBgImageRef = atom({
  key: 'stageBgImageRef',
  default: null,
});

// text
export const celebratorsNames = atom({
  key: 'celebratorsNames',
  default: '',
});

export const date = atom({
  key: 'date',
  default: '',
});

export const celebratorsNamesColor = atom({
  key: 'celebratorsNamesColor',
  default: null,
});

export const celebratorsNamesFont = atom({
  key: 'celebratorsNamesFont',
  default: null,
});

export const celebratorsNamesIsBold = atom({
  key: 'celebratorsNamesIsBold',
  default: false,
});

export const celebratorsNamesIsUnderline = atom({
  key: 'celebratorsNamesIsUnderline',
  default: false,
});
export const dateColor = atom({
  key: 'dateColor',
  default: null,
});

export const dateFont = atom({
  key: 'dateFont',
  default: null,
});

export const dateIsBold = atom({
  key: 'dateIsBold',
  default: false,
});

export const dateIsUnderline = atom({
  key: 'dateIsUnderline',
  default: false,
});

// positions
export const positionImageTopX = atom({
  key: 'positionImageTopX',
  default: 30,
});
export const positionImageTopY = atom({
  key: 'positionImageTopY',
  default: 35,
});
export const positionImageMiddleX = atom({
  key: 'positionImageMiddleX',
  default: 30,
});
export const positionImageMiddleY = atom({
  key: 'positionImageMiddleY',
  default: 35 + 250,
});
export const positionImageBottomX = atom({
  key: 'positionImageBottomX',
  default: 30,
});
export const positionImageBottomY = atom({
  key: 'positionImageBottomY',
  default: 35 + 500,
});
export const iconPositionX = atom({
  key: 'iconPositionX',
  default: 100,
});

export const iconPositionY = atom({
  key: 'iconPositionY',
  default: 35 + 770,
});

export const datePositionX = atom({
  key: 'datePositionX',
  default: 40,
});
export const datePositionY = atom({
  key: 'datePositionY',
  default: 35 + 830,
});
export const celebratorsPositionX = atom({
  key: 'celebratorsPositionX',
  default: 40,
});
export const celebratorsPositionY = atom({
  key: 'celebratorsPositionY',
  default: 35 + 700,
});
export const cleanImages = atom({
  key: 'cleanImages',
  default: true,
});
