import { Image, StyleSheet, Text, View } from 'react-native';
import { defaultMoodStyle, moodStyles } from '../constants/moodStyles';

export default function DiaryCard({ title, date, preview, image, mood }) {
  const theme = moodStyles[mood] ?? defaultMoodStyle;

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: theme.borderColor,
          backgroundColor: theme.backgroundColor,
          borderWidth: theme.borderWidth,
          borderLeftWidth: theme.borderWidth + theme.accentWidth,
        },
      ]}
    >
      <Image source={image} style={[styles.mood, { borderColor: theme.borderColor }]} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview}>{preview}</Text>
        <Text style={[styles.badge, { color: theme.borderColor }]}>{theme.label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    backgroundColor: '#e5e7eb',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
  badge: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '700',
  },
});