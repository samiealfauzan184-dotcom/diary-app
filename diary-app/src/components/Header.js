import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, RADIUS, SPACE, TYPO } from '../styles/tokens';

const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 11) return 'Selamat pagi';
  if (h < 15) return 'Selamat siang';
  if (h < 18) return 'Selamat sore';
  return 'Selamat malam';
};

export default function Header({ name = 'Samie Al Fauzan', count = 0 }) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrap}>
        <Text style={styles.greeting}>🐱 {getGreeting()},</Text>
        <Text style={styles.name} numberOfLines={1}>
          {name} 👋
        </Text>
        <Text style={styles.title}>Buku Harian ✨</Text>
        <View style={styles.pill}>
          <Text style={styles.pillText}>📚 {count} cerita tersimpan</Text>
        </View>
      </View>
      <Image
        source={require('../../assets/avatar/profile.jpg')}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primarySoft,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderColor: COLORS.primary,
    borderRadius: 24,
    padding: SPACE.l,
    marginBottom: SPACE.m,
  },
  textWrap: { flex: 1, paddingRight: SPACE.m },
  greeting: { fontSize: TYPO.body, color: COLORS.muted },
  name: { fontSize: TYPO.title, fontWeight: '700', color: COLORS.text },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.primary,
    marginTop: SPACE.xs,
  },
  pill: {
    alignSelf: 'flex-start',
    marginTop: SPACE.s,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACE.m,
    paddingVertical: SPACE.xs,
  },
  pillText: { fontSize: TYPO.caption, fontWeight: '700', color: COLORS.primary },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: COLORS.pink,
    backgroundColor: COLORS.border,
  },
});