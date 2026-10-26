import { useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { defaultMoodStyle, moodStyles } from '../constants/moodStyles';
import { COLORS, RADIUS, SPACE, TYPO } from '../styles/tokens';

export default function DiaryCard({
  title,
  date,
  preview,
  image,
  moodImage,
  moodUri,
  mood,
  liked = false,
  onPress = () => {},
  onToggleLike = () => {},
}) {
  const theme = moodStyles[mood] ?? defaultMoodStyle;
  const source = moodImage ?? image ?? { uri: moodUri };
  const scale = useRef(new Animated.Value(1)).current;

  // hati membal saat ditekan
  const handleLike = () => {
    Animated.sequence([
      Animated.spring(scale, { toValue: 1.5, speed: 40, bounciness: 14, useNativeDriver: false }),
      Animated.spring(scale, { toValue: 1, speed: 40, bounciness: 14, useNativeDriver: false }),
    ]).start();
    onToggleLike();
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.98 : 1 }] }]}
      accessible
      accessibilityLabel={`Entri ${title} tanggal ${date}`}
    >
      <View
        style={[
          styles.card,
          {
            borderColor: theme.borderColor,
            backgroundColor: theme.backgroundColor,
            borderWidth: theme.borderWidth,
            borderLeftWidth: theme.borderWidth + theme.accentWidth,
            borderBottomWidth: theme.borderWidth + 3,
          },
        ]}
      >
        <Image
          source={source}
          style={[styles.mood, { borderColor: theme.borderColor }]}
        />

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.date}>🗓️ {date}</Text>
          <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
            {preview}
          </Text>
          <View style={[styles.badge, { backgroundColor: theme.borderColor + '22' }]}>
            <Text style={[styles.badgeText, { color: theme.borderColor }]}>
              {theme.label}
            </Text>
          </View>
        </View>

        <Pressable
          onPress={handleLike}
          hitSlop={10}
          accessibilityLabel={liked ? 'Batal suka' : 'Suka'}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Text style={styles.like}>{liked ? '❤️' : '🤍'}</Text>
          </Animated.View>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: SPACE.m,
    padding: SPACE.l,
    borderRadius: RADIUS.bubble,
    alignItems: 'center',
  },
  mood: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    backgroundColor: COLORS.border,
  },
  content: { flex: 1 },
  title: { fontSize: TYPO.title, fontWeight: '800', color: COLORS.text },
  date: { fontSize: TYPO.caption, color: COLORS.muted, marginBottom: SPACE.s },
  preview: { fontSize: TYPO.body, color: COLORS.text },
  badge: {
    alignSelf: 'flex-start',
    marginTop: SPACE.s,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: RADIUS.pill,
  },
  badgeText: { fontSize: TYPO.caption, fontWeight: '800' },
  like: { fontSize: 26, paddingHorizontal: 4 },
});