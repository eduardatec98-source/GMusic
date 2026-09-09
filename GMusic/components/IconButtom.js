import React, { act } from 'react'
import { StyleSheet, ActivityIndicator, Pressable} from 'react-native'


import colors from '../theme/colors'

const VARIANTS = {
    ghost: {
        backgraundColor: 'transparent',
        borderColor: 'tranparent',
        iconColor: colors.text,
    },
    surface: {
        backgraundColor: colors.surfaceElevated,
        borderColor:colors.border,
        iconColor: colors.text,
    },
    primary: {
        backgraundColor: colors.primary,
        borderColor:colors.primary,
        iconColor: colors.background,
    }
}

export default function IconButtom({
    accessivelityLabel,
    active = false,
    disabled = false,
    icon,
    iconSize = 24,
    loading = false,
    onPress,
    size = 48,
    variant = "ghost"
}) {
    const selectedVariant = VARIANTS[variant]?? VARIANTS.ghost;
    const iconColor = active ? colors.primary : selectedVariant.iconColor;

  return (
    <Pressable
    accessivelityLabel={accessivelityLabel}
    accessivelityRole='button'
    accessivelityState={{ disabled, selected: active }}
    disabled={disabled || loading}
    hitSlop={10}
    onPress={onPress}
    style={({ pressed }) => [
        styles.button,
        {
            with: size,
            height: size, 
            borderRadius: size
        }
    ]}
    >
     
    </Pressable>
  )
}

const styles = StyleSheet.create({})