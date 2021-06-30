import React, { useRef } from 'react';

import { images } from '@constants/images';

import { IImagePickerProps } from './image-picker.typings';

import { ImagePickerStyles } from './image-picker.styles';

export const ImagePicker: React.FC<IImagePickerProps> = ({
  setValue,
  value,
}) => {
  const imagePickerRef = useRef<HTMLInputElement | null>(null);
  const imageChange = (e: React.SyntheticEvent<EventTarget>) => {
    const file = (e.target as HTMLInputElement).files![0];

    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.addEventListener(
      'load',
      function () {
        setValue(String(reader.result));
      },
      false
    );
  };

  return (
    <ImagePickerStyles.Wrapper>
      <input
        ref={imagePickerRef}
        type="file"
        name="image"
        onChange={imageChange}
      />
      <ImagePickerStyles.Icon>
        <img
          src={value || images.picker}
          alt="Picker"
          onClick={() => imagePickerRef.current?.click()}
        />
      </ImagePickerStyles.Icon>
      <span>Pick a picture</span>
    </ImagePickerStyles.Wrapper>
  );
};
