import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Avatar, HStack } from '@gluestack/ui';
import React from 'react';

type CustomAvatarStory = ComponentStory<typeof Avatar>;

export const Basic: CustomAvatarStory = ({
  size,
  uri,
  fallbackText,
  badge,
  ...props
}) => {
  return (
    <HStack space="md">
      <Avatar size={size}>
        <Avatar.Image
          source={{
            uri: uri,
          }}
        />
        <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
        {badge && <Avatar.Badge />}
      </Avatar>
      <Avatar size={size}>
        <Avatar.Image
          source={{
            uri: 'https://broken.link',
          }}
        />
        <Avatar.FallbackText>{fallbackText}</Avatar.FallbackText>
        {badge && <Avatar.Badge />}
      </Avatar>
    </HStack>
  );
};
