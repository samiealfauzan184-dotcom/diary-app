import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { defaultMoodStyle, moodStyles } from '../constants/moodStyles';
import { COLORS, RADIUS, SPACE, TYPO } from '../styles/tokens';

export default function DiaryDetailModal({ visible, onClose, entry }) {
  if (!entry) return null;

  const { title, date, body, preview, image, heroUri, mood } = entry;
  const theme = moodStyles[mood] ?? defaultMoodStyle;
  const heroSource = image ?? { uri: heroUri };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <Image
          source={heroSource}
          style={[styles.hero, { borderColor: theme.borderColor }]}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <View style={[styles.badge, { backgroundColor: theme.borderColor }]}>
            <Text style={styles.badgeText}>{theme.label}</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>🗓️ {date}</Text>
          <Text style={styles.body}>{body ?? preview}</Text>

          <Pressable
            onPress={onClose}
            style={({ pressed }) => [styles.button, { opacity: pressed ? 0.85 : 1 }]}
            accessibilityRole="button"
            accessibilityLabel="Tutup detail entri"
          >
            <Text style={styles.buttonText}>Tutup 🐾</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#ddd',
    borderBottomWidth: 5,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  content: { padding: SPACE.l, gap: SPACE.s },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACE.m,
    paddingVertical: SPACE.xs + 1,
  },
  badgeText: { color: '#fff', fontSize: TYPO.caption, fontWeight: '800' },
  title: { fontSize: 24, fontWeight: '800', color: COLORS.text },
  date: { fontSize: TYPO.caption, color: COLORS.muted, marginBottom: SPACE.s },
  body: { fontSize: 15, color: COLORS.text, lineHeight: 22 },
  button: {
    marginTop: SPACE.l,
    padding: SPACE.m,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '800' },
});