import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const LocationSmallIcon: FC<SvgProps> = (props) => (
  <Svg width={16} height={17} fill="none" {...props}>
    <Path
      d="M7.833 14.55c-1.522-1.144-2.652-2.239-3.391-3.283-.74-1.045-1.109-2.072-1.109-3.083 0-.756.136-1.42.409-1.992A4.515 4.515 0 0 1 4.8 4.75c.433-.389.917-.68 1.45-.875a4.6 4.6 0 0 1 1.583-.292 4.6 4.6 0 0 1 1.584.292 4.423 4.423 0 0 1 1.45.875c.433.39.786.87 1.058 1.442s.408 1.236.408 1.992c0 1.01-.37 2.038-1.108 3.083-.739 1.044-1.87 2.139-3.392 3.283Zm0-5.3c.323 0 .598-.114.825-.341.228-.228.342-.503.342-.825 0-.323-.114-.598-.342-.825a1.124 1.124 0 0 0-.825-.342c-.322 0-.597.114-.825.341a1.124 1.124 0 0 0-.341.826c0 .322.114.597.341.825.228.227.503.341.825.341Z"
      fill="#CB9D54"
    />
  </Svg>
);

export { LocationSmallIcon };
